import { View, Text } from 'react-native';
import React from 'react';
import { Props } from 'types/NavigationTypes';
import { Slider } from '@/components/ui/slider';
import SliderWithArrow from '@/components/SliderWithArrow';

const TokenScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View className="m-8">
      <SliderWithArrow />;
    </View>
  );
};

export default TokenScreen;
