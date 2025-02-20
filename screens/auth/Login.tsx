import InputAuth from '@/components/auth/InputAuth'
import { Box } from '@/components/ui/box'
import { Button, ButtonText } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { Props } from '@/types/NavigationTypes'
import { IC_Person } from '@/utils/constants/Icons'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import React, { useState } from 'react'


const Login: React.FC<Props> = ({ navigation }) => {
    const { appliedTheme } = useTheme(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
    <Box className={`h-full p-10 bg-background-${appliedTheme}`}>
        {/* Title */}
        <Box className='my-10 gap-2'>
            <Text className='text-4xl text-black font-bold'>Welcome</Text>
            <Text className='text-xl text-gray-500'>Sign in to your account</Text>
        </Box>
        <Box className='gap-2'>
            {/* Inputs */}
            <InputAuth 
                icon="IC_Email" 
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
            />
            <InputAuth 
                icon="IC_Lock" 
                placeholder='Password' 
                isPassword={true}
                value={password}
                onChangeText={setPassword}
            />
            {/* Login Button & Forgot Pass */}
            <Button variant={`rounded-solid-${appliedTheme}`}>
                <ButtonText className={`text-buttonText-${appliedTheme}`}>Sign In</ButtonText>
            </Button>
            
            <Text className={`text-text-${appliedTheme}`}>Forgot password ?</Text>
        </Box>
    </Box>
    )
}

export default Login