import { View, Text } from 'react-native'
import React from 'react'
import { Box } from './ui/box'
import { useTheme } from '@/utils/Themes/ThemeProvider'

interface OptionCardProps {
    children: React.ReactNode;
}

const OptionCard: React.FC<OptionCardProps> = ({ children }) => {
    const { appliedTheme } = useTheme()
    return (
        <Box className={`bg-card-${appliedTheme} p-4 rounded-2xl h-fit w-fit flex justify-center`}>
            {children}
        </Box>
    )
}

export default OptionCard