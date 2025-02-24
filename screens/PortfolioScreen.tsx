import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import React, { useState } from 'react';

import { PieChart } from 'react-native-svg-charts';
import { Alert, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, ButtonText } from '@/components/ui/button';

interface PortfolioData {
  key: string;
  value: number;
  color: string;
}

const PortfolioScreen = () => {
  const theme = 'light';
  const [selectedSlice, setSelectedSlice] = useState<PortfolioData | null>(null);

  const data: PortfolioData[] = [
    { key: 'Available Money', value: 1000, color: 'red' },
    { key: 'Bitcoin', value: 500, color: 'blue' },
    { key: 'Ethereum', value: 200, color: 'green' },
    { key: 'XRP', value: 100, color: 'yellow' },
  ];

  function handleSetSelectedSlice(prev: PortfolioData | null, item: PortfolioData) {
    if (!prev) {
      return item;
    }
    return prev.key === item.key ? null : item;
  }

  function getAppropriateColor(currencyName: string) {
    const topCryptocurrencies = [
      { name: 'Available Money', color: 'purple' },
      { name: 'Bitcoin', symbol: 'BTC', color: '#f7931a' }, // Bitcoin Orange
      { name: 'Ethereum', symbol: 'ETH', color: '#3c3c3d' }, // Ethereum Gray
      { name: 'Tether', symbol: 'USDT', color: '#26a17b' }, // Tether Green
      { name: 'BNB', symbol: 'BNB', color: '#f3ba2f' }, // BNB Yellow
      { name: 'USD Coin', symbol: 'USDC', color: '#2775c9' }, // USD Coin Blue
      { name: 'XRP', symbol: 'XRP', color: '#006097' }, // Ripple Blue
      { name: 'Cardano', symbol: 'ADA', color: '#0033ad' }, // Cardano Blue
      { name: 'Solana', symbol: 'SOL', color: '#00ffa3' }, // Solana Green
      { name: 'Dogecoin', symbol: 'DOGE', color: '#c2a633' }, // Dogecoin Gold
      { name: 'Polkadot', symbol: 'DOT', color: '#e6007a' }, // Polkadot Pink
      { name: 'Shiba Inu', symbol: 'SHIB', color: '#fda32b' }, // Shiba Inu Orange
      { name: 'Litecoin', symbol: 'LTC', color: '#bfbbbb' }, // Litecoin Gray
      { name: 'Chainlink', symbol: 'LINK', color: '#2a5ada' }, // Chainlink Blue
      { name: 'Stellar', symbol: 'XLM', color: '#000000' }, // Stellar Black
      { name: 'USD Coin', symbol: 'USDC', color: '#2775c9' }, // USD Coin Blue
      { name: 'Avalanche', symbol: 'AVAX', color: '#e84142' }, // Avalanche Red
      { name: 'TRON', symbol: 'TRX', color: '#eb0029' }, // TRON Red
      { name: 'Uniswap', symbol: 'UNI', color: '#ff007a' }, // Uniswap Pink
      { name: 'Wrapped Bitcoin', symbol: 'WBTC', color: '#242d3d' }, // Wrapped Bitcoin Dark Blue
      { name: 'Dai', symbol: 'DAI', color: '#f4b731' }, // Dai Yellow
    ];
    const currency = topCryptocurrencies.find((crypto) => crypto.name === currencyName);
    return currency ? currency.color : 'grey';
  }

  const pieData = data.map((item) => {
    const currentColor = getAppropriateColor(item.key);
    return {
      value: item.value,
      svg: {
        fill: selectedSlice
          ? selectedSlice.key === item.key
            ? currentColor
            : 'grey'
          : currentColor,
        onPress: () => {
          setSelectedSlice((prev) => handleSetSelectedSlice(prev, item));
        },
        stroke: '#ffffff',
        strokeWidth: 1,
        scale: selectedSlice?.key === item.key ? 1.1 : 1,
      },
      key: item.key,
    };
  });

  const totalValue = data.reduce((acc, item) => acc + item.value, 0);
  return (
    <Box className="flex flex-1 items-center justify-center px-4 py-6">
      <Text className="mb-4 text-center text-xl font-bold">Total value: {totalValue}$</Text>

      {/* Chart Container */}
      <Box className="flex h-[250px] w-[250px] items-center justify-center ">
        <PieChart
          style={{ height: 225, width: 225 }}
          data={pieData}
          innerRadius="50%"
          outerRadius="90%"
          padAngle={0.01}>
          <View className="flex items-center justify-center">
            <View className="flex h-1/3 w-1/3 items-center justify-center ">
              {selectedSlice ? (
                <>
                  <Text className="text-center ">{selectedSlice.key}</Text>
                  <Text className="text-center ">{selectedSlice.value}$</Text>
                </>
              ) : (
                <></>
              )}
            </View>
          </View>
        </PieChart>
      </Box>

      <ScrollView horizontal={true} className="">
        {data.map((item) => {
          return (
            <View key={item.key} className="flex items-center p-2">
              <Button
                variant="outline"
                className={`border-none bg-background-${theme}`}
                onPress={() => setSelectedSlice((prev) => handleSetSelectedSlice(prev, item))}>
                <Box
                  className={`h-[16px] w-[16px] rounded-full border border-black`}
                  style={{ backgroundColor: getAppropriateColor(item.key) }}></Box>
                <ButtonText className={`text-text-${theme}`}>{item.key}</ButtonText>
              </Button>
            </View>
          );
        })}
      </ScrollView>
    </Box>
  );
};

export default PortfolioScreen;
