import { Box } from '@/components/ui/box'
import React, { useEffect, useState } from 'react'
import { Text } from '../ui/text';
import { SignUpScreensProps } from '@/types/NavigationTypes';
import { IM_PhoneHand, IM_PhoneHandMain } from '@/utils/constants/Images';
import { Button, ButtonText } from '../ui/button';
import CountryPhoneInput from '../profile/CountryPhoneInput';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import MyLinearGradient from '../gradient/MyLinearGradient';

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
            handleScreenChange('next', { phoneNumber: prefix + " " + phoneNumber })
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
                    <Text className={`text-3xl text-text-${appliedTheme} font-bold`}>Sign In</Text>
                    <Text className={`text-subText-${appliedTheme} text-lg`}>
                        {"Simply enter your phone number to login\nor create an account."}
                    </Text>
                </Box>
            
            <CountryPhoneInput error={error} setError={setError} setPrefix={setPrefix} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>
            
            </Box>
            {/* Buttons */}
            <Box className='gap-5'>
                <Text className={`px-2 text-center text-sm text-subText-${appliedTheme}`}>
                    By using our mobile app, you agree to our  
                    <Text className={`font-bold underline text-sm text-subText-${appliedTheme}`}
                    onPress={() => console.log("Terms of Use Clicked")}>
                        {" Terms of Use "}
                    </Text>
                    and
                    <Text className={`font-bold underline text-sm text-subText-${appliedTheme}`}
                    onPress={() => console.log("Privacy Policy Clicked")}
                    >
                        {" Privacy Policy "}
                    </Text>
                </Text>
                <MyLinearGradient type='button' color='purple'>
                    <Button 
                    onPress={() => handlePhoneSubmit()} 
                    className='w-full'
                    style={{ backgroundColor: 'initial' }}
                    >
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