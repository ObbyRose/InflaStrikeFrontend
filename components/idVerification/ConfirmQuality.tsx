import React from 'react'
import { Box } from '@/components/ui/box'
import MyLinearGradient from '@/components/gradient/MyLinearGradient'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import { Text } from '@/components/ui/text'
import BackHeader from '@/components/BackHeader'
import { IC_Government_ID, IC_Magnifier } from '@/utils/constants/Icons'
import { Button, ButtonText } from '@/components/ui/button'
import { TouchableOpacity } from 'react-native'
import CardUpRounded from '../CardUpRounded'
import { idVerifyProps } from '@/types/NavigationTypes'

const dummyPhoto = "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FClient-5e98229b-ebcd-4de6-b37a-117fb05620dd/Camera/250a65d0-7f92-4ad0-887b-2bf4b85a5742.jpg";

const ConfirmQuality = ({handleScreenChange, finalData} : idVerifyProps) => {
    const { appliedTheme } = useTheme()
    
    return (
        <MyLinearGradient type="background" color={appliedTheme === 'dark' ? 'dark' : 'light-blue'}>
            <Box className="h-full w-full">
                
                {/* Most Inner Box */}
                {/* <CardUpRounded>
                    <IC_Government_ID className='-mt-[8rem] border-white' />
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
                </CardUpRounded> */}
                </Box>
        </MyLinearGradient>
    )
}

export default ConfirmQuality;
