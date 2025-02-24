import React from 'react'
import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { Icon } from '@/components/ui/icon'
import { IC_CardAdded } from '@/utils/constants/Icons'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import { Props } from '@/types/NavigationTypes'

const PaymentMethodAddedScreen: React.FC<Props> = ({ navigation }) => {
    const { appliedTheme } = useTheme()
    return (
        <Box className='flex-1 justify-between items-center gap-2'>
            <Box className='flex-1 justify-center items-center'>
                <Icon as={IC_CardAdded}></Icon>
                <Box className='w-[80%]'>
                    <Text className='font-extrabold text-black text-[24px] text-center'>All Done!</Text>
                    <Text className='font-extrabold text-[#828A99] text-[16px] text-center mt-4'>Congratulations! Your card has been successfully added</Text>
                </Box>
            </Box>
            <Button className={`bg-button-${appliedTheme} rounded-full mb-4 h-[4rem]`} onPress={() => {navigation.navigate('Home')}}>
                <Text className='text-white font-extrabold text-[16px] w-[80%] text-center'> Done </Text>
            </Button>
        </Box>
    )
}

export default PaymentMethodAddedScreen