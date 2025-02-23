import { View, Text } from 'react-native'
import React from 'react'
import { Box } from '@/components/ui/box'
import { Divider } from '@/components/ui/divider'
import { IC_DisplaySetting, IC_LanguageSetting, IC_NotificationSettings, IC_ThemeSettings, IC_UserPreferencesSettings } from '@/utils/constants/Icons'
import { ChevronRight } from 'lucide-react-native'
import { Icon } from '@/components/ui/icon'
import { useTheme } from '@/utils/Themes/ThemeProvider'

const SettingsScreen = () => {
  const { appliedTheme } = useTheme()
  return (
  <Box className={ `p-4 h-full bg-background-${appliedTheme}`}>
    <Box className='flex flex-row justify-between items-center'>
      <Box className='flex-row items-center just gap-4'>
        <Box className='bg-[#F2F2F7] rounded-full p-2'>
          <IC_DisplaySetting className='w-8 h-8'  />
        </Box>
        <Text className='font-extrabold text-[14px]'>Display</Text>
      </Box>
      <Box>
        <Icon as={ChevronRight}></Icon>
      </Box>
    </Box>

    <Divider className='rounded-lg mb-4 mt-4' />

    <Box className='flex flex-row justify-between items-center'>
      <Box className='flex-row items-center gap-3'>
        <Box className='bg-[#F2F2F7] rounded-full p-2'>
          <IC_LanguageSetting className='w-8 h-8'  />
        </Box>
        <Text className='font-extrabold text-[14px]'>Language</Text>
      </Box>
      <Box>
        <Icon as={ChevronRight}></Icon>
      </Box>
    </Box>

    <Divider className='rounded-lg mb-4 mt-4' />

    <Box className='flex flex-row justify-between items-center'>
      <Box className='flex-row items-center gap-3'>
        <Box className='bg-[#F2F2F7] rounded-full p-2'>
          <IC_ThemeSettings className='w-8 h-8'  />
        </Box>
        <Text className='font-extrabold text-[14px]'>Night mode</Text>
      </Box>
      <Box>
        <Icon as={ChevronRight}></Icon>
      </Box>
    </Box>

    <Divider className='rounded-lg mb-4 mt-4' />
    <Box className='flex flex-row justify-between items-center'>
      <Box className='flex-row items-center gap-3'>
        <Box className='bg-[#F2F2F7] rounded-full p-2'>
          <IC_NotificationSettings className='w-8 h-8'  />
        </Box>
        <Text className='font-extrabold text-[14px]'>Notification Settings</Text>
      </Box>
      <Box>
        <Icon as={ChevronRight}></Icon>
      </Box>
    </Box>

    <Divider className='rounded-lg mb-4 mt-4' />


    <Box className='flex flex-row justify-between items-center'>
      <Box className='flex-row items-center gap-3'>
        <Box className='bg-[#F2F2F7] rounded-full p-2'>
          <IC_UserPreferencesSettings className='w-8 h-8'  />
        </Box>
        <Text className='font-extrabold text-[14px]'>Preferences</Text>
      </Box>
      <Box>
        <Icon as={ChevronRight}></Icon>
      </Box>
    </Box>

    <Divider className='rounded-lg mb-4 mt-4' />
  </Box>
  )
}

export default SettingsScreen