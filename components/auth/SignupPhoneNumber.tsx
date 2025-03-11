import { Box } from '@/components/ui/box'
import React, { useEffect, useState } from 'react'
import { Text } from '../ui/text';
import { SignUpScreensProps } from '@/types/NavigationTypes';
import { IM_PhoneHand, IM_PhoneHandMain } from '@/utils/constants/Images';
import { Button, ButtonText } from '../ui/button';
import CountryPhoneInput from '../profile/CountryPhoneInput';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import MyLinearGradient from '../gradient/MyLinearGradient';

function SignupPhoneNumber({ handleScreenChange, formHook } : SignUpScreensProps) {
    const { appliedTheme } = useTheme();
    const { values, errors, handleInputChange, setErrorByFields } =  formHook;
    const { phoneNumber, phonePrefix } = values

    const handlePhoneSubmit = () => {
        if(!phoneNumber?.trim())
            setErrorByFields({ phoneNumber: "Phone number is required"})
        else if(phoneNumber.length < 9)
            setErrorByFields({ phoneNumber: "Phone number is too short"})
        else
            handleScreenChange('next')
    }

    return (
    <Box className='flex-1 py-5'>
        <Box className='mb-12'>
            <IM_PhoneHandMain className='h-[150px] -mt-3'/>
        </Box>

        <Box className='flex-1 justify-between'>
            <Box>
                {/* Titles */}
                <Box className='mb-7 gap-2'>
                    <Text className={`text-3xl text-text-${appliedTheme} font-bold`}>Phone Number</Text>
                    <Text className={`text-subText-${appliedTheme} text-lg`}>
                        {"Simply enter your phone number."}
                    </Text>
                </Box>
            
                <CountryPhoneInput
                    error={errors.phoneNumber}
                    setError={(val) => setErrorByFields({ phoneNumber: val})}
                    prefix={phonePrefix}
                    setPrefix={(val) => handleInputChange("phonePrefix", val)}
                    phoneNumber={phoneNumber}
                    setPhoneNumber={(val) => handleInputChange("phoneNumber", val)}/>
            </Box>
            {/* Buttons */}
            <Box className='gap-5'>
                <MyLinearGradient type='button' color='purple'>
                    <Button onPress={() => handlePhoneSubmit()}>
                        <ButtonText className="text-white">
                            Continue
                        </ButtonText>
                    </Button>
                </MyLinearGradient>
            </Box>
        </Box>
    </Box>
    )
}

export default SignupPhoneNumber