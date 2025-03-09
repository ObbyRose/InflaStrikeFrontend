import { View, Text } from 'react-native'
import React from 'react'
import { Box } from './ui/box'
import { cn } from './ui/cn'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import MyLinearGradient from './gradient/MyLinearGradient'

interface CardUpRoundedProps {
    children: React.ReactNode;
    className?: string;
}
const CardUpRounded = ({ className, children }: CardUpRoundedProps) => {
    const { appliedTheme } = useTheme();

    return (
        <MyLinearGradient type='background' color={appliedTheme === 'dark' ? 'dark' : 'light-blue'} className={cn(`bg-background-${appliedTheme} rounded-t-3xl -mt-10 
            flex-1 w-full p-5`, className)}>
            {children}
        </MyLinearGradient>
    )
}

export default CardUpRounded