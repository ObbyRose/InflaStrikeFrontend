import React, { useState } from 'react'
import { Box } from '@/components/ui/box'
import BackHeader from '@/components/BackHeader'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import { Props } from '@/types/NavigationTypes'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SettingItem from '@/components/SettingItems'
import { Divider } from '@/components/ui/divider'
import { Switch } from '@/components/ui/switch'
import { ChevronRight } from 'lucide-react-native'
import { Text } from '@/components/ui/text'
import { Icon } from '@/components/ui/icon'


const SecuritySettingsScreen:React.FC<Props> = ({ navigation }) => {
    const [isPushEnabled, setIsPushEnabled] = useState(true);
    const { appliedTheme } = useTheme();
    return (
        <Box className={`flex gap-4 p-4 h-full bg-background-${appliedTheme}`}>  
            <BackHeader title='Security' />

                <Box className='flex justify-between flex-row items-center'>
                    <Text className='font-extrabold text-lg text-black'>Require PIN / Face ID</Text>
                    <Switch 
                    value={isPushEnabled} 
                    onValueChange={setIsPushEnabled} 
                    trackColor={{ false: 'gray', true: `#4A3EF6` }}
                    thumbColor={`white`}
                />
                </Box>
            <Divider className="rounded-lg mb-4 mt-4" />

                <Box className='flex justify-between flex-row items-center'>
                    <Text className='font-extrabold text-lg text-black'>PIN / Face ID Settings</Text>
                    <Icon as={ChevronRight} />
                </Box>
            <Divider className="rounded-lg mb-4 mt-4" />

                <Box className='flex justify-between flex-row items-center'>
                    <Text className='font-extrabold text-lg text-black'>Password Settings</Text>
                    <Icon as={ChevronRight} />
                </Box>
            <Divider className="rounded-lg mb-4 mt-4" />

                <Box className='flex justify-between flex-row items-center'>
                    <Text className='font-extrabold text-lg text-black'>Change Password</Text>
                    <Icon as={ChevronRight} />
                </Box>
            <Divider className="rounded-lg mb-4 mt-4" />

        </Box>
    )
    }

export default SecuritySettingsScreen