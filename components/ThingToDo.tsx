import { Box } from '@/components/ui/box';
import { IC_Card_V2, IC_Identity } from '@/utils/constants/Icons';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import { useState } from 'react';
import { Text } from './ui/text';
import { Button, ButtonText } from './ui/button';
import MyLinearGradient from './gradient/MyLinearGradient';
import { TouchableOpacity } from 'react-native';

interface ThingToDoProps {
  thingToDo: {
    icon: string;
    header: string;
    description: string;
    actionText: string;
    actionFunction: () => void;
  }[];
}

export default function ThingToDo({ thingToDo }: ThingToDoProps) {
  const { appliedTheme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextMission() {
    if (currentIndex === thingToDo.length - 1) {
      return setCurrentIndex(0);
    }
    setCurrentIndex((prev) => prev + 1);
  }

  return (
    <Box className="flex w-[90%] items-center justify-center">
      <Box className="mb-2 flex w-full flex-row justify-between p-2">
        <Text className={`text-[15px] font-semibold text-text-${appliedTheme} p-2`}>
          Things to do
        </Text>
        {thingToDo.length > 1 && (
          <Text className={`text-text-${appliedTheme} rounded-full bg-[#2d363a45] p-2`}>
            {currentIndex} / {thingToDo.length}
          </Text>
        )}
      </Box>
      <Box className={`bg-card-${appliedTheme}  flex h-fit w-full flex-row gap-3 rounded-xl p-2`}>
        <IC_Identity className="h-[48px] w-[48px]" />

        <Box className="flex h-fit w-[75%] gap-3">
          <Text className={`text-text-${appliedTheme} text-[17px] font-semibold`}>
            {thingToDo[currentIndex].header}
          </Text>
          <Text className={`text-subText-${appliedTheme} w-auto text-[14px] font-medium`}>
            {thingToDo[currentIndex].description}
          </Text>
          <MyLinearGradient type="button" color="purple">
            <TouchableOpacity onPress={thingToDo[currentIndex].actionFunction}>
              <Text className={`text-text-${appliedTheme}`}>
                {thingToDo[currentIndex].actionText}
              </Text>
            </TouchableOpacity>
          </MyLinearGradient>
        </Box>
      </Box>
      {thingToDo.length > 1 && (
        <TouchableOpacity
          className={`h-4  w-[90%] rounded-b-xl bg-gray-500`}
          onPress={handleNextMission}>
          <Text> </Text>
        </TouchableOpacity>
      )}
    </Box>
  );
}
