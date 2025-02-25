import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Box } from '@/components/ui/box'
import { Divider } from '@/components/ui/divider'
import { ChevronRight } from 'lucide-react-native'
import { Icon } from '@/components/ui/icon'
import { Props } from '@/types/NavigationTypes'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import BackHeader from '@/components/BackHeader'

const PinSettingsScreen:React.FC<Props> = ({ navigation }) => {
    const { appliedTheme } = useTheme();
    return (
        <Box className={`flex gap-4 p-4 h-full bg-background-${appliedTheme}`}>
            <BackHeader title='PIN / Face ID Settings' />
            <TouchableOpacity onPress={() => navigation.navigate('CreatePin')} activeOpacity={0.7}>
                <Box className='flex justify-between flex-row items-center'>
                    <Text className='font-extrabold text-lg text-black'>Create PIN / Face ID</Text>
                    <Icon as={ChevronRight} />
                </Box>
            </TouchableOpacity>
            <Divider className="rounded-lg mb-4 mt-4" />
            
            <TouchableOpacity onPress={() => navigation.navigate('EnterChangePin')} activeOpacity={0.7}>
                <Box className='flex justify-between flex-row items-center'>
                    <Text className='font-extrabold text-lg text-black'>Change PIN / Face ID</Text>
                    <Icon as={ChevronRight} />
                </Box>
            </TouchableOpacity>
            <Divider className="rounded-lg mb-4 mt-4" />

        </Box>
    )
}

export default PinSettingsScreen