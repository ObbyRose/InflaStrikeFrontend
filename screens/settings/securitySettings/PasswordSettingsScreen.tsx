import React from 'react'
import { Box } from '@/components/ui/box'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { ChevronRight } from 'lucide-react-native'
import { Divider } from '@/components/ui/divider'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import BackHeader from '@/components/BackHeader'

const PasswordSettings = () => {
    const { appliedTheme } = useTheme()
    return (
        <Box className={`flex gap-4 p-4 h-full bg-background-${appliedTheme}`}>
            <BackHeader title='Password Settings' />
            <Box className='flex justify-between flex-row items-center'>
                <Text className='font-extrabold text-lg text-black'>Change Password</Text>
                <Icon as={ChevronRight} />
            </Box>
            <Divider className="rounded-lg mb-4 mt-4" />
        </Box>
    )
}

export default PasswordSettings