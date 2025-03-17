import React, { useEffect, useState } from 'react';
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

interface Trade {
  id: number;
  symbol: string;
  price: number;
  quantity: number;
  time: string;
  type: 'Buy' | 'Sell';
}

const ExchangeScreen = () => {
  const { appliedTheme } = useTheme();

  const [trades, setTrades] = useState<Trade[]>([]);
  const [currentCoin, setCurrentCoin] = useState<string>('btcusdt');

  const Icon = getIconByString(`IC_${currentCoin.toUpperCase()}`) || IC_BTCUSDT;

  const getCurrentIcon = (symbol: string) => {
    return React.createElement(getIconByString(`IC_${symbol.toUpperCase()}`) || IC_BTCUSDT);
  };

  useEffect(() => {
    let ws = new WebSocket(`wss://stream.binance.com:9443/ws/${currentCoin}@trade`);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      const newTrade: Trade = {
        id: data.t,
        symbol: data.s,
        price: parseFloat(data.p),
        quantity: parseFloat(data.q),
        time: new Date(data.T).toLocaleTimeString(),
        type: data.m ? 'Sell' : 'Buy',
      };

      setTrades((prevTrades) => [newTrade, ...prevTrades.slice(0, 9)]); // Keep latest 10 trades
    };

    return () => {
      ws.close();
    };
  }, [currentCoin]); // Re-run effect when `currentCoin` changes

  return (
    <Box className="h-full bg-white p-4">
      <BackHeader title="Exchange" />
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
      <Box className="p-y-4 flex-1 rounded-lg bg-gray-900">
        {/* <Text className="mb-4 text-center text-lg font-bold text-white">
          Live Trading Blotter for {trades[0].symbol}
        </Text> */}
        <Box className="flex-row p-2">
          <Text className="w-8 text-center text-white"> </Text>
          <Text className="flex-1 self-center text-center text-white">Price {`(in $)`}</Text>
          <Box className="items-between flex-1">
            <Text className="text-center text-white">Amount</Text>
            {/* <Text className="text-center text-white">{`(in ${trades[0].symbol})`}</Text> */}
          </Box>

          <Text className="flex-1 self-center text-center text-white">time</Text>
        </Box>
        <FlatList
          data={trades}
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
        />
      </Box>
    </Box>
  );
};

export default ExchangeScreen;
