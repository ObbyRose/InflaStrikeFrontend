import React from 'react'
import { Box } from '@/components/ui/box'
import MyLinearGradient from '@/components/gradient/MyLinearGradient'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import { Text } from '@/components/ui/text'
import BackHeader from '@/components/BackHeader'
import { IC_Government_ID, IC_Magnifier } from '@/utils/constants/Icons'
import { Button, ButtonText } from '@/components/ui/button'
import { TouchableOpacity } from 'react-native'

const ConfirmGovernmentId = () => {
    const { appliedTheme } = useTheme()
    
    return (
        <MyLinearGradient type="background" color={appliedTheme === 'dark' ? 'dark' : 'light-blue'}>
            <Box className="h-full w-full">
                <BackHeader title="Confirm Government ID" />
                
                {/* Most Inner Box */}
                <Box className={`bg-card-${appliedTheme} w-full rounded-t-2xl p-4 items-center justify-center gap-16 absolute bottom-0 h-[75%]`}>
                    <IC_Government_ID className='-mt-[8rem] border-white' /> {/* Here will go the photo of the ID currently a placeholder */}
                    <Box className='flex flex-col items-center gap-6'>
                        <IC_Magnifier className="w-20 h-20" />
                        <Text className={`text-text-${appliedTheme} font-bold text-[24px]`}>Check Quality</Text>
                        <Text className={`text-subText-${appliedTheme} text-center text-[16px]`}>Please make sure your card details are clear to read with no blur or glare</Text>
                    </Box>
                    <Box className='flex flex-col items-center gap-6 mb-10'>
                        <MyLinearGradient type='button' color='purple'>
                            <Button className={`w-full flex justify-center items-center`}>
                                <ButtonText className='text-center w-full font-medium text-[17px]'>All Clear. Continue</ButtonText>
                            </Button>
                        </MyLinearGradient>
                        <TouchableOpacity>
                            <Text className={`text-[17px] text-purple-500 font-medium`}>Take a new photo</Text>
                        </TouchableOpacity>
                    </Box>
                </Box>
            </Box>
        </MyLinearGradient>
    )
}

export default ConfirmGovernmentId;
