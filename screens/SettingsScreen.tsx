import React, { useState } from 'react';
import { Text } from 'react-native';
import { ChevronDownIcon, CircleDollarSign, Languages, SunMoon } from 'lucide-react-native';
import { Box } from '@/components/ui/box';
import { Radio, RadioGroup, RadioIndicator, RadioLabel, RadioIcon } from '@/components/ui/radio';
import { CircleIcon } from '@/components/ui/icon';
import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from '@/components/ui/select';
import OutlinedCard from '@/components/OutlinedCard';
import { Icon } from '@/components/ui/icon';
import { HStack } from '@/components/ui/hstack';

const SettingsScreen = () => {
  const [currency, setCurrency] = useState("Usd");
  const [theme, setTheme] = useState("System");

  return (
    <OutlinedCard title='Settings' className='gap-6 m-auto w-[90%]'>
      <Box className='flex flex-row gap-2 items-center'>
        <Icon as={Languages} size='xl' color='blue' className='flex flex-row' />
        <Text className='text-lg font-bold'>Language:</Text>
        <Select className='w-[125px]'>
          <SelectTrigger className='h-fit' variant="outline" size="md">
            <SelectInput placeholder="English" />
            <SelectIcon className="mr-3" as={ChevronDownIcon} />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="English" value="eng" />
              <SelectItem label="French" value="french" />
              <SelectItem label="Hebrew" value="hebrew" />
            </SelectContent>
          </SelectPortal>
        </Select>
      </Box>

      <Box className='flex flex-row gap-2 items-center'>
        <Icon as={CircleDollarSign} color='blue' />
        <Text className='text-lg font-bold'>Display Currency:</Text>
      </Box>
      <RadioGroup value={currency} onChange={setCurrency}>
        <HStack space="sm">
          <Radio value="Usd">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>USD</RadioLabel>
          </Radio>
          <Radio value="Eur">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>EUR</RadioLabel>
          </Radio>
        </HStack>
      </RadioGroup>

      <Box className='flex flex-row gap-2 items-center'>
        <Icon as={SunMoon} color='blue' />
        <Text className='text-lg font-bold'>Theme:</Text>
      </Box>
      <RadioGroup value={theme} onChange={setTheme}>
        <HStack space="sm">
          <Radio value="Light">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Light</RadioLabel>
          </Radio>
          <Radio value="Dark">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Dark</RadioLabel>
          </Radio>
          <Radio value="System">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>System Default</RadioLabel>
          </Radio>
        </HStack>
      </RadioGroup>
    </OutlinedCard>
  );
};

export default SettingsScreen;
