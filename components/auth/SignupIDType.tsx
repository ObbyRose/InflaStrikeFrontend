import React, { useState } from 'react'
import { Box } from '../ui/box'
import { Text } from '../ui/text'
import { useFormInput } from '@/hooks/useFormInput'
import { SignUpScreensProps } from '@/types/NavigationTypes'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import { validateAndConvertBirthday } from '@/utils/functions/help'
import { Card } from '../ui/card'
import OutlinedCard from '../OutlinedCard'
import { Button } from '../ui/button'
import { IC_ChevronRight, IC_IDCard, IC_Passport } from '@/utils/constants/Icons'
import { Pressable } from 'react-native'

function SignupIDType({ handleScreenChange }: SignUpScreensProps) {
    const { appliedTheme } = useTheme();

    const options = ["ID Card", "Driver's License", 'Passport'];

    const handleCardPress = (type: string) => {
        handleScreenChange('next', { idMethod: type });
    }

    return (
    <Box className='flex-1 justify-between'>
        {/* Title */}
        <Box className='mb-10 gap-2'>
            <Text className='text-4xl text-black font-bold'>Select your ID type</Text>
            <Text className={`text-gray-${appliedTheme} text-lg mb-5`}>
                We'll take 2 pictures of your ID. What type of ID do you want to use?
            </Text>
            <Box className="gap-5 mb-5">
                {options.map((item) =>
                <Pressable key={item} onPress={() => handleCardPress(item)}>
                    <OutlinedCard className='flex-row justify-between p-5'>
                        <Box className='flex-row gap-4 items-center'>
                            <Box className='w-12 h-12 bg-[#6C7380] rounded-full justify-center items-center'>
                                {item === "Passport" ?
                                    <IC_Passport className='w-6 h-6'/> :
                                    <IC_IDCard className='w-6 h-6'/>
                                }
                            </Box>
                            <Box>
                                <Text className='font-bold'>{item}</Text>
                                {item === "Driver's License" && <Text className={`text-gray-${appliedTheme}`}>Recommended</Text>}
                            </Box>
                        </Box>
                        <IC_ChevronRight className='w-3 h-3 self-center'/>
                    </OutlinedCard>
                </Pressable>
                )}
            </Box>
            

            <Text className={`text-gray-${appliedTheme} text-[12px]`}>
            Your photo ID and actions captured during the ID verification process may constitute biometric data. Please see our Privacy Policy for more information about how we store and use your biometric data.
            </Text>
            
        </Box>
    </Box>
    )
}

export default SignupIDType;