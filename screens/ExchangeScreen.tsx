import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@/components/ui/box';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import BackHeader from '@/components/BackHeader';
import { FlatList } from 'react-native';
import { Text } from '@/components/ui/text';
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from '@/components/ui/select';
import { getIconByString, IC_BTCUSDT } from '@/utils/constants/Icons';
import { ChevronDownIcon } from '@/components/ui/icon';
import { TouchableOpacity } from 'react-native';

interface Trade {
  id: string;
  symbol: string;
  price: number;
  quantity: number;
  time: string;
  type: 'Buy' | 'Sell';
  timestamp: number;
}

const ExchangeScreen = () => {
  const { appliedTheme } = useTheme();

  const [trades, setTrades] = useState<Trade[]>([]);
  const [currentCoin, setCurrentCoin] = useState<string>('btcusdt');
  const [filterType, setFilterType] = useState<'All' | 'Buy' | 'Sell'>('All');
  const [sortField, setSortField] = useState<'time' | 'price' | 'quantity'>('time');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [streaming, setStreaming] = useState<boolean>(true);
  const [filterDate, setFilterDate] = useState<number | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const arrow = sortDirection === 'asc' ? '↑' : '↓';

  const getCurrentIcon = (symbol: string) => {
    return React.createElement(getIconByString(`IC_${symbol.toUpperCase()}`) || IC_BTCUSDT);
  };

  const wsRef = useRef<WebSocket | null>(null);

  const startStreaming = () => {
    // Close any existing connection first
    if (
      wsRef.current &&
      (wsRef.current.readyState === WebSocket.OPEN ||
        wsRef.current.readyState === WebSocket.CONNECTING)
    ) {
      wsRef.current.close();
    }

    // Create new WebSocket
    wsRef.current = new WebSocket(
      `wss://stream.binance.com:9443/ws/${currentCoin.toLowerCase()}@trade`
    );

    // Counter for unique IDs within this session
    let counter = 0;

    wsRef.current.onopen = () => {
      console.log('WebSocket connection opened');
    };

    wsRef.current.onmessage = (event) => {
      counter++;
      const data = JSON.parse(event.data);
      const newTrade: Trade = {
        // Create truly unique ID
        id: `${data.t}_${Date.now()}_${Math.random().toString(36).substring(2, 9)}_${counter}`,
        symbol: data.s,
        price: parseFloat(data.p),
        quantity: parseFloat(data.q),
        time: new Date(data.T).toLocaleTimeString(),
        type: data.m ? 'Sell' : 'Buy',
        timestamp: data.T,
      };

      setTrades((prevTrades) => [newTrade, ...prevTrades]);
    };

    wsRef.current.onerror = (error: any) => {
      console.error('WebSocket error:', error);
    };

    wsRef.current.onclose = () => {
      console.log('WebSocket connection closed');
    };
  };

  // Start or stop streaming based on the button
  const toggleStreaming = () => {
    if (streaming) {
      // If currently streaming, stop it
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
        console.log('Streaming stopped');
      }
    } else {
      // If not streaming, start it
      startStreaming();
      console.log('Streaming started');
    }
    setStreaming(!streaming);
  };

  const filteredTrades = trades.filter((trade) => {
    let dateMatches = true;

    // If a specific date is selected, check if the trade's timestamp matches the selected date
    if (selectedDate) {
      const tradeDate = new Date(trade.timestamp);
      dateMatches = tradeDate.toDateString() === selectedDate.toDateString();
    }

    return (filterType === 'All' || trade.type === filterType) && dateMatches;
  });

  // Sort trades based on selected field
  const sortedTrades = [...filteredTrades].sort((a, b) => {
    if (sortField === 'time') {
      return sortDirection === 'asc' ? a.timestamp - b.timestamp : b.timestamp - a.timestamp;
    }
    return sortDirection === 'asc'
      ? (a as any)[sortField] - (b as any)[sortField]
      : (b as any)[sortField] - (a as any)[sortField];
  });

  useEffect(() => {
    if (streaming) {
      startStreaming();
    }

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, [currentCoin]);

  return (
    <Box className="h-full bg-white p-4">
      <BackHeader title="Exchange" />

      {/* FILTER BUTTONS */}
      <Box className="mb-2 flex-row justify-center space-x-2">
        {['All', 'Buy', 'Sell'].map((type, idx) => {
          const message = type === 'All' ? 'Show All' : `${type} Only`;
          return (
            <TouchableOpacity
              key={type}
              className={`${idx === 0 ? `rounded-l-lg` : ''} ${idx === 2 ? 'rounded-r-lg' : ''} px-3 py-1 ${filterType === type ? 'bg-purple-400' : 'bg-gray-700'} items-center`}
              onPress={() => setFilterType(type as 'All' | 'Buy' | 'Sell')}>
              <Text className="text-white">{message}</Text>
            </TouchableOpacity>
          );
        })}
      </Box>

      {/* SORTING BUTTONS */}
      <Box className="mb-4 flex-row justify-center space-x-2">
        {['time', 'price', 'quantity'].map((field, idx) => {
          return (
            <TouchableOpacity
              key={field}
              className={`${idx === 0 ? `rounded-l-lg` : ''} ${idx === 2 ? 'rounded-r-lg' : ''} px-3 py-1 ${sortField === field ? 'bg-green-500' : 'bg-gray-700'} flex-row items-center`}
              onPress={() => {
                setSortField(field as 'time' | 'price' | 'quantity');
                setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
              }}>
              <Text className="text-white">
                {`${field.toUpperCase()} ${sortField === field ? `(${arrow})` : ''}`}
              </Text>
            </TouchableOpacity>
          );
        })}
      </Box>

      {/* Toggle Websocket Streaming and CLear Trades History */}
      <Box className="flex-row items-center justify-around">
        {/* Toggle WebSocket Streaming */}
        <TouchableOpacity
          className={`rounded-lg px-3 py-1 ${streaming ? 'bg-red-500' : 'bg-green-500'} mb-4`}
          onPress={toggleStreaming}
          disabled={
            (selectedDate && selectedDate.toDateString() !== new Date().toDateString()) || false
          }>
          <Text className="text-white">{streaming ? 'Pause Streaming' : 'Resume Streaming'}</Text>
        </TouchableOpacity>

        {/* Clear trades history */}
        <TouchableOpacity
          onPress={() => setTrades([])}
          className="mb-4 flex items-center rounded-lg bg-purple-400 px-3 py-1"
          disabled={
            (selectedDate && selectedDate.toDateString() !== new Date().toDateString()) || false
          }>
          <Text className="text-white">Clear trades history</Text>
        </TouchableOpacity>
      </Box>

      {/* Select Coin */}
      <Box className="m-2 flex-row items-center justify-around">
        <Text>Choose different coin to track</Text>
        <Select defaultValue="btcusdt" onValueChange={(value) => setCurrentCoin(value)}>
          <SelectTrigger>
            <SelectInput placeholder="Select option" />
            <SelectIcon className="mr-3" as={ChevronDownIcon} />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="Bitcoin (BTC)" value="btcusdt" />
              <SelectItem label="Ethereum (ETH)" value="ethusdt" />
              <SelectItem label="XRP (XRP)" value="xrpusdt" />
              <SelectItem label="Binance Coin (BNB)" value="bnbusdt" />
              <SelectItem label="Cardano (ADA)" value="adausdt" />
              <SelectItem label="Dogecoin (DOGE)" value="dogeusdt" />
              <SelectItem label="Solana (SOL)" value="solusdt" />
              <SelectItem label="Toncoin (TON)" value="tonusdt" />
              <SelectItem label="Polkadot (DOT)" value="dotusdt" />
              <SelectItem label="Polygon (MATIC)" value="maticusdt" />
            </SelectContent>
          </SelectPortal>
        </Select>
      </Box>

      {/* Status and count indicator */}
      <Box className="mb-4 flex-row justify-between">
        <Text className="">Status: {streaming ? 'Live' : 'Paused'}</Text>
        <Text className="">Trades: {sortedTrades.length}</Text>
      </Box>

      {/* Table */}
      <Box className="p-y-4 flex-1 rounded-lg bg-gray-900">
        <Box className="flex-row p-2">
          <Text className="w-8 text-center text-white"> </Text>
          <Text className="flex-1 self-center text-center text-white">Price {`(in $)`}</Text>
          <Box className="items-between flex-1">
            <Text className="text-center text-white">Amount</Text>
          </Box>

          <Text className="flex-1 self-center text-center text-white">time</Text>
        </Box>

        <FlatList
          data={sortedTrades}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Box
              className={`flex-row border-b  p-3 ${item.type === 'Buy' ? 'bg-green-900' : 'bg-red-900'}`}>
              <Box className="h-8 w-8">{getCurrentIcon(item.symbol)}</Box>
              <Text className="flex-1 text-center text-white">${item.price.toFixed(2)}</Text>
              <Text className="flex-1 text-center text-white">
                {item.quantity} {item.symbol}
              </Text>
              <Text className="flex-1 text-center text-white">{item.time}</Text>
            </Box>
          )}
          ListEmptyComponent={() => (
            <Box className="py-10">
              <Text className="text-center text-gray-400">No trades found</Text>
            </Box>
          )}
        />
      </Box>
    </Box>
  );
};

export default ExchangeScreen;
