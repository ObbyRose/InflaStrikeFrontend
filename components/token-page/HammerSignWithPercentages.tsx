import { View } from 'react-native';
import { Text } from '../ui/text';

interface HammerSignWithPercentagesProps {
  percentages: number;
}

export default function HammerSignWithPercentages({ percentages }: HammerSignWithPercentagesProps) {
  const isPositive = percentages > 0;
  return (
    <View className="relative m-2 flex h-20 w-full items-center justify-center">
      <View className="absolute right-[50%] top-0 h-[75px] w-4 rounded-2xl bg-black"></View>
      <View className="w-fit border-[10px] border-black bg-white">
        <Text className={`text-${isPositive ? 'green' : 'red'}-400`}>
          {isPositive ? '+' : ''}
          {percentages}%
        </Text>
      </View>
    </View>
  );
}
