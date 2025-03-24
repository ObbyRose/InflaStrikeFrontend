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
import DateTimePicker from '@react-native-community/datetimepicker';
import { dummyTrades } from '@/utils/constants/data';


export interface Trade {
  id: string;
  symbol: string;
  price: number;
  quantity: number;
  time: string;
  type: 'Buy' | 'Sell';
  timestamp: number;
}

const TradingHistoryScreen = () => {
  const { appliedTheme } = useTheme();

  const [trades, setTrades] = useState<Trade[]>([]);
  const [currentCoin, setCurrentCoin] = useState<string>('btcusdt');
  const [filterType, setFilterType] = useState<'All' | 'Buy' | 'Sell'>('All');
  const [sortField, setSortField] = useState<'time' | 'price' | 'quantity'>('time');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const arrow = sortDirection === 'asc' ? '↑' : '↓';
  const getCurrentIcon = (symbol: string) => {
    return React.createElement(getIconByString(`IC_${symbol.toUpperCase()}`) || IC_BTCUSDT);
  };

  // Filter & Sort derived state
  const filteredTrades = trades.filter((trade) => {
    let dateMatches = true;

    // If a specific date is selected, check if the trade's timestamp matches the selected date
    if (selectedDate) {
      const tradeDate = new Date(trade.timestamp);
      dateMatches = tradeDate.toDateString() === selectedDate.toDateString();
    }

    return (filterType === 'All' || trade.type === filterType) && dateMatches;
  });
  const sortedTrades = [...filteredTrades].sort((a, b) => {
    if (sortField === 'time') {
      return sortDirection === 'asc' ? a.timestamp - b.timestamp : b.timestamp - a.timestamp;
    }
    return sortDirection === 'asc'
      ? (a as any)[sortField] - (b as any)[sortField]
      : (b as any)[sortField] - (a as any)[sortField];
  });

  useEffect(() => {
    setTrades(dummyTrades);
  }, []);

  const handleDateChange = (e: any, selectedDate: Date | undefined) => {
    setShowDatePicker(false);
    if (selectedDate)
      setSelectedDate(selectedDate);
  }

  return (
    <Box className={`h-full p-4 bg-background-${appliedTheme}`}>
      <BackHeader title="Trading History" />

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
      <Box className="mb-2 flex-row justify-center space-x-2">
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

      {/* Select Coin & Date */}
      <Box className="m-2 flex-row items-center justify-around">
        <Box>
        <TouchableOpacity
            className="px-3 py-1 rounded bg-blue-500"
            onPress={() => setShowDatePicker(true)}
        >
            <Text className="text-white">Select Date {selectedDate ? `(${selectedDate.toLocaleDateString()})` : ''}</Text>
        </TouchableOpacity>

        {showDatePicker && (
            <DateTimePicker
                value={selectedDate || new Date()}
                mode="date"
                display="default"
                onChange={handleDateChange}
            />
        )}
        </Box>
        <Select defaultValue="btcusdt" onValueChange={(value) => setCurrentCoin(value)}>
          <SelectTrigger className={`flex-row justify-between items-center border 
            border-divider-${appliedTheme} bg-input-${appliedTheme} rounded h-fit`}>
            <SelectInput placeholder="Select option" className={`text-text-${appliedTheme}`}/>
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

      {/* Table */}
      <Box className="p-y-4 flex-1 rounded-lg bg-gray-900">
        <Box className="flex-row p-2">
          <Text className="w-8 text-center text-white"> </Text>
          <Text className="flex-1 self-center text-center text-white">Price</Text>
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
              className={`flex-row items-center border-b  p-3 ${item.type === 'Buy' ? 'bg-green-900' : 'bg-red-900'}`}>
              <Box className="h-8 w-8">{getCurrentIcon(item.symbol)}</Box>
              <Text className="flex-1 text-center text-white">${item.price.toFixed(2)}</Text>
              <Text className="flex-1 text-center text-white">
                {item.quantity}
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

export default TradingHistoryScreen;
