import { View, Text } from 'react-native';
import React from 'react';
import { Props } from 'types/NavigationTypes';

import SliderWithPlusMinus from '@/components/token-page/SliderWithPlusMinus';
import HammerSignWithPercentages from '@/components/token-page/HammerSignWithPercentages';

const TokenScreen: React.FC<Props> = ({ navigation }) => {
  const [sliderValue, setSliderValue] = React.useState(50);

  const maxValue = 100;

  return (
    <View className="m-8">
      <HammerSignWithPercentages percentages={12.8} />
      <SliderWithPlusMinus
        maxValue={100}
        setSliderValue={setSliderValue}
        sliderValue={sliderValue}
      />
    </View>
  );
};

export default TokenScreen;
