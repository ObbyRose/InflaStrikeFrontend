import InputAuth from '@/components/auth/InputAuth'
import { Box } from '@/components/ui/box'
import { Button, ButtonText } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { Props } from '@/types/NavigationTypes'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import React, { useState } from 'react'


const Login: React.FC<Props> = ({ navigation }) => {
    const { appliedTheme } = useTheme(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
    <Box className={`h-[85%] my-auto p-10 justify-between bg-background-${appliedTheme}`}>
        <Box>
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
                    isPass={true}
                    value={password}
                    onChangeText={setPassword}
                />
                {/* Login Button & Forgot Pass */}
                <Button variant={`rounded-solid-${appliedTheme}`} className="h-fit p-3">
                    <ButtonText className="text-white">Sign In</ButtonText>
                </Button>
                
                <Text className={`text-link-${appliedTheme} mx-auto font-bold tracking-wide`}>Forgot password ?</Text>
            </Box>
        </Box>
        {/* Sign Up */}
        <Box className='mx-auto flex-row'>
            <Text className={`text-gray-${appliedTheme}`}>
                Don't have an account?
                <Text className={`text-link-${appliedTheme} mx-auto font-bold tracking-wide`}
                onPress={() => navigation.navigate("Signup")}
                > Sign Up</Text>
            </Text>
            
        </Box>
    </Box>
    )
}

export default Login