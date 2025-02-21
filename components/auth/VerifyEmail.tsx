import { Box } from '@/components/ui/box'
import { useTheme } from '@/utils/Themes/ThemeProvider';
import React from 'react'
import { Text } from '../ui/text';
import { SignUpScreensProps } from '@/types/NavigationTypes';


function VerifyEmail({ appliedTheme, setScreenStep } : SignUpScreensProps) {
    
    return (
    <Box>
        <Box className='my-10 gap-2'>
        <Text>Verify</Text>
        </Box>
    </Box>
    )
}

export default VerifyEmail