import { Alert, TouchableOpacity } from 'react-native';
import { Box } from './ui/box';
import { IC_Tothor_Logo_Only, IC_Tothor_Logo_Only_Bold } from '@/utils/constants/Icons';
import { Text } from './ui/text';
import { useState } from 'react';
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from './ui/slider';
import ButtonsTrain from './ButtonsTrain';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import MyLinearGradient from './gradient/MyLinearGradient';
import { Button } from 'react-native-paper';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
} from '@/components/ui/actionsheet';

interface DropdownTothorProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DropdownTothor({ isOpen, setIsOpen }: DropdownTothorProps) {
  // const { appliedTheme } = useTheme();
  let appliedTheme = 'light';
  const [exitTimeMonths, setExitTimeMonths] = useState(0);
  const [value, setValue] = useState(0);

  let expectedValue: number;
  const maxValue = 1234567;
  const textColor = `text-text-${appliedTheme}`;
  const logoColor = appliedTheme === 'dark' ? 'white' : 'black';
  const gradientColor = appliedTheme === 'dark' ? 'blue' : 'purple';
  const exitDate = new Date();
  exitDate.setMonth(exitDate.getMonth() + exitTimeMonths);

  const handleClose = () => setIsOpen(false);

  function handlePressChange(newCategory: string) {
    const months = parseInt(newCategory.match(/\d+/)?.[0] || '0', 10);
    setExitTimeMonths(months);
  }

  //   set the expected outcome value
  switch (exitTimeMonths) {
    case 3:
      expectedValue = 6.7;
      break;
    case 6:
      expectedValue = 7.8;
      break;
    case 12:
      expectedValue = 8.9;
      break;
    default:
      expectedValue = 0;
  }

  return (
    <>
      <Actionsheet isOpen={isOpen} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent
          className={`bg-background-${appliedTheme} rounded-t-3x flex items-center justify-evenly gap-4`}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          {/* <ActionsheetItem className="relative bottom-0 top-0 flex h-fit w-full flex-col items-center justify-evenly gap-4 "> */}
          <MyLinearGradient
            type="background"
            color={gradientColor}
            className="w-fit rounded-full p-4">
            {/* <Box
              className={`border border-${appliedTheme === 'dark' ? 'white' : 'black'} w-fit rounded-full p-4`}> */}
            <IC_Tothor_Logo_Only_Bold color={'white'} className={`h-14 w-14`} />
            {/* </Box> */}
          </MyLinearGradient>

          {/* dates */}
          <Box className="flex w-full flex-row justify-between">
            <Text className={textColor}>Entry date: {new Date().toLocaleDateString()}</Text>
            <Text className={textColor}>
              Exit date: {exitTimeMonths != 0 ? exitDate.toLocaleDateString() : ''}
            </Text>
          </Box>

          {/* slider */}
          <Box className="mt-6 flex w-full flex-row items-center justify-between">
            <Text className={textColor}>0</Text>
            <Slider
              minValue={0}
              maxValue={maxValue}
              className="w-2/3"
              defaultValue={value}
              step={1}
              size="md"
              orientation="horizontal"
              isDisabled={false}
              isReversed={false}
              onChange={(newValue) => setValue(newValue)}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb shape="circle">
                <Box className={`relative bottom-10 h-10 w-40 justify-center `}>
                  <Text className={`${textColor} w-full text-start`}>{value}</Text>
                </Box>
              </SliderThumb>
            </Slider>
            <Text className={textColor}>{maxValue}</Text>
          </Box>

          {/* lock for */}
          <Text className={`${textColor} self-start text-[24px] font-bold`}>Lock for:</Text>
          <ButtonsTrain
            buttons={['3 months', '6 months', '12 months']}
            activeButton={`${exitTimeMonths} months`}
            handlePress={handlePressChange}
          />

          {/* expected interest */}
          <Box
            className={`flex flex-row items-center justify-center gap-5 rounded-xl  p-5 bg-card-${appliedTheme}`}>
            <IC_Tothor_Logo_Only_Bold color={logoColor} className="h-8 w-8" />
            <Text className={textColor}>Expected interest: {expectedValue}%</Text>
          </Box>

          {/* buy */}
          <MyLinearGradient type="button" color={gradientColor} className="m-10 w-full">
            <TouchableOpacity
              className="flex w-[95%] items-center justify-center"
              onPress={() => {
                if (exitTimeMonths && value) {
                  Alert.alert('buying option will be added soon, please wait :)');
                } else {
                  Alert.alert(
                    'Please make sure you chose both a value and a time you want to lock it for'
                  );
                }
              }}>
              <Text className={`font-semibold text-white`} size="2xl">
                Buy now!
              </Text>
            </TouchableOpacity>
          </MyLinearGradient>
          {/* </ActionsheetItem> */}
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}
