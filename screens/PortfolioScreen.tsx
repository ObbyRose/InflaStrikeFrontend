import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import React, { useState } from 'react';
import Svg, { Circle } from 'react-native-svg';

import { PieChart } from 'react-native-svg-charts';

interface PortfolioData {
  key: string;
  value: number;
  color: string;
}

const PortfolioScreen = () => {
  const [selectedSlice, setSelectedSlice] = useState<string | null>(null);

  const data: PortfolioData[] = [
    { key: 'Available Money', value: 1000, color: '#fbd203' },
    { key: 'Bitcoin', value: 500, color: '#ffb300' },
    { key: 'Ethereum', value: 200, color: '#ff9100' },
    { key: 'XRP', value: 100, color: '#ff6c00' },
  ];

  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  const pieData = data.map((item) => ({
    value: item.value,
    svg: {
      fill: item.color,
      onPress: () => setSelectedSlice(item.key),
    },
    key: item.key,
  }));

  const getPercentage = (value: number) => {
    return ((value / totalValue) * 100).toFixed(1);
  };

  return (
    <Box className="flex flex-1 px-4 py-6">
      <VStack space="md">
        <Text className="mb-4 text-center text-xl font-bold">Your Portfolio</Text>

        {/* Chart Container */}
        <Box className="h-[250px] w-[250px] items-center">
          <PieChart
            style={{ height: 200, width: 200 }}
            data={pieData}
            innerRadius="50%"
            padAngle={0.01}
          />
        </Box>

        {/* Selected Slice Info */}
        {/* {selectedSlice && (
          <Box className="mb-4 rounded-lg bg-purple-600 p-4">
            <Text className="text-center ">
              {selectedSlice}: ${data.find((item) => item.key === selectedSlice)?.value.toFixed(2)}{' '}
              ({getPercentage(data.find((item) => item.key === selectedSlice)?.value || 0)}%)
            </Text>
          </Box>
        )} */}

        {/* Legend */}
        {/* <VStack space="sm">
          <Text fontWeight="$bold" mb="$2">
            Portfolio Breakdown:
          </Text>
          {data.map((item) => (
            <Pressable key={item.key} onPress={() => setSelectedSlice(item.key)}>
              <HStack
                bg={selectedSlice === item.key ? '$backgroundLight100' : 'transparent'}
                p="$3"
                borderRadius="$md"
                justifyContent="space-between"
                alignItems="center">
                <HStack space="sm" alignItems="center">
                  <Box width={16} height={16} borderRadius="$full" bg={item.color} />
                  <Text>{item.key}</Text>
                </HStack>
                <Text>
                  ${item.value.toFixed(2)} ({getPercentage(item.value)}%)
                </Text>
              </HStack>
            </Pressable>
          ))}
        </VStack> */}
      </VStack>
    </Box>
  );
};

export default PortfolioScreen;
