import { Text } from 'react-native'
import { ChevronDownIcon } from 'lucide-react-native'
import React from 'react'
import { Box } from '@/components/ui/box'
import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from '@/components/ui/select';

const SettingsScreen = () => {
  return (
    <Box className="flex-1 justify-center p-6 h-fit">
      <Box className="border border-gray-300 p-4">
      <Text className='text-3xl'>Settings</Text>
        <Box className='mt-4'>
          <Text className='text-lg font-bold'>
            Language
          </Text>
                <Select>
            <SelectTrigger variant="outline" size="md">
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
                <SelectItem label="Hebrew" value="hebrew"/>
              </SelectContent>
            </SelectPortal>
          </Select>
        </Box>
      </Box>
    </Box>
  )
}

export default SettingsScreen