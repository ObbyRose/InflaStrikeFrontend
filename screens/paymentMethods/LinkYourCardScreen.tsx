import { View, Text } from 'react-native'
import React from 'react'
import { Box } from '@/components/ui/box'
import { useTheme } from '@/utils/Themes/ThemeProvider'

const LinkYourCardScreen = () => {
    const { appliedTheme }= useTheme()
    return (
        <Box className={`bg-background-${appliedTheme}`}>
            <Box>

            </Box>
        </Box>
    )
}

export default LinkYourCardScreen