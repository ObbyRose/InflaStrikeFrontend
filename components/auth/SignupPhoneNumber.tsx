import { Box } from '@/components/ui/box'
import React, { useEffect, useState } from 'react'
import { Text } from '../ui/text';
import { SignUpScreensProps } from '@/types/NavigationTypes';
import { IM_PhoneHand } from '@/utils/constants/Images';
import { Button, ButtonText } from '../ui/button';
import CountryPhoneInput from '../profile/CountryPhoneInput';
import { useTheme } from '@/utils/Themes/ThemeProvider';

function SignupPhoneNumber({ handleScreenChange } : SignUpScreensProps) {
    const { appliedTheme } = useTheme();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [prefix, setPrefix] = useState("");
    const [error, setError] = useState("");

    const handlePhoneSubmit = () => {
        if(!phoneNumber.trim())
            setError("Phone number is required")
        else if(phoneNumber.length < 9)
            setError("Phone number is too short")
        else
            handleScreenChange('next', { phoneNumber: prefix + phoneNumber })
    }

    return (
    <Box className='flex-1 py-5'>
        <Box className='flex-1 justify-between'>
            <Box>
                {/* Titles */}
                <Box className='mb-7 gap-2'>
                    <Text className='text-3xl text-black font-bold'>Phone Number</Text>
                    <Text className={`text-gray-${appliedTheme} text-lg`}>
                        Enter your phone number so we can text
                        you an authentication code.
                    </Text>
                </Box>
            
            <CountryPhoneInput error={error} setError={setError} setPrefix={setPrefix} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>
            
            </Box>
            {/* Buttons */}
            <Box className='gap-3'>
                <Button variant={`rounded-solid-${appliedTheme}`}  className='h-fit'
                onPress={() => handlePhoneSubmit()}
                >
                    <ButtonText className="text-white">
                        Continue
                    </ButtonText>
                </Button>
            </Box>
        </Box>
    </Box>
    )
}

export default SignupPhoneNumber