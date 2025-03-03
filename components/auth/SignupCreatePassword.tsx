import { Box } from '@/components/ui/box'
import React, { useEffect, useRef, useState } from 'react'
import { Text } from '../ui/text';
import { SignUpScreensProps } from '@/types/NavigationTypes';
import { Button, ButtonSpinner, ButtonText } from '../ui/button';
import { useToast } from '../ui/toast';
import { showNewToast } from '@/utils/constants/Toasts';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import InputAuth from './InputAuth';
import { useFormInput } from '@/hooks/useFormInput';
import { Input, InputField } from '../ui/input';
import { FormControl } from '../ui/form-control';
import { Clipboard, Keyboard, KeyboardAvoidingView, Pressable, TextInput } from 'react-native';
import { IM_PhoneHandConfirm, IM_PhoneHandPassword } from '@/utils/constants/Images';
import OverlayLoading from '../OverlayLoading';
import MyLinearGradient from '../gradient/MyLinearGradient';

interface VerifyPhoneProps extends SignUpScreensProps {
    phoneEntered: string;
}

function SignupCreatePassword({ handleScreenChange, phoneEntered } : VerifyPhoneProps) {
    const { appliedTheme } = useTheme();
    const [error, setError] = useState('');
    const [pass, setPass] = useState('');


    return (
    <Box className='flex-1 py-5'>
        {/* Main Image */}
        <Box className='mb-12'>
            <IM_PhoneHandPassword className='h-[150px] -mt-3'/>
        </Box>

        <Box className='flex-1 justify-between'>
            <Box>
                {/* Titles */}
                <Box className='mb-7 gap-2'>
                    <Text className={`text-3xl text-text-${appliedTheme} font-bold`}>Create Password</Text>
                    <Text className={`text-subText-${appliedTheme} text-lg`}>
                        {`Choose a secure password that will be easy for you to remember.`}
                    </Text>
                </Box>
                {/* Code Input */}
                <Box>
                    <InputAuth 
                    icon="IC_Lock" 
                    placeholder='Password' 
                    type='pass'
                    value={pass}
                    onChangeText={(val) => setPass(val)}
                    // error={errors.pass}
                    />
                </Box>
            </Box>

            {/* Buttons */}
            <Box className='gap-5'>
                <MyLinearGradient type='button' color='purple'>
                    <Button 
                    // onPress={() => handlePhoneSubmit()} 
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

export default SignupCreatePassword