import InputAuth from '@/components/auth/InputAuth'
import { LinearGradient } from '@/components/gradient/MyLinearGradient'
import { Box } from '@/components/ui/box'
import { Button, ButtonSpinner, ButtonText } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { useFormInput } from '@/hooks/useFormInput'
import { Props } from '@/types/NavigationTypes'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import React, { useState } from 'react'


const Login: React.FC<Props> = ({ navigation }) => {
    const { appliedTheme } = useTheme(); 
    const [isLoading, setIsLoading] = useState(false);
    const { values, errors, handleInputChange, setErrorByFields } = useFormInput({
        email: '',
        pass: '',
        api: ''
    });
    const { email, pass } = values;

    function handleSubmitLogin() {
        let valid = true;
        let newErrors = { email: "", pass: "" };

        // Validate email format
        if (!email.trim()) {
            newErrors.email = "Email is required.";
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Invalid email format.";
            valid = false;
        }

        // Validate password
        if (!pass.trim()) {
            newErrors.pass = "Password is required.";
            valid = false;
        } else if (pass.length < 6) {
            newErrors.pass = "Password must be at least 6 characters.";
            valid = false;
        }

        setErrorByFields(newErrors)

        if (valid) {
            setIsLoading(true);
            console.log({ email, password: pass });
            setTimeout(() =>  {
                setIsLoading(false)
                navigation.navigate("MainApp", { screen: "Home" });
            }, 1000);
        }
    }

    return (
    <Box className={`h-full p-10 pt-36 justify-between bg-background-${appliedTheme}`}>
        <Box>
            {/* Title */}
            <Box className='my-10 gap-2'>
                <Text className='text-4xl text-black font-bold'>Welcome</Text>
                <Text className='text-xl text-gray-500'>Sign in to your account</Text>
            </Box>
            {/* Main Login */}
            <Box className='gap-2'>
                {/* Inputs */}
                <InputAuth 
                    icon="IC_Email" 
                    placeholder='Email'
                    value={email}
                    onChangeText={(val) => handleInputChange("email", val)}
                    error={errors.email}
                />
                <InputAuth 
                    icon="IC_Lock" 
                    placeholder='Password' 
                    type='pass'
                    value={pass}
                    onChangeText={(val) => handleInputChange("pass", val)}
                    error={errors.pass}
                />

                { errors.api && <Text className="text-red-500 text-sm ps-3 mb-1 -mt-1">{errors.api}</Text>}
                {/* Login Button & Forgot Pass */}
                <LinearGradient variant={appliedTheme} style={{ borderRadius: 24, padding: 10 }}>
                    <Button onPress={handleSubmitLogin} className="items-center">
                        <ButtonText className="text-white">
                        {isLoading ? <ButtonSpinner color={"white"} className="h-6" /> : "Sign In"}
                        </ButtonText>
                    </Button>
                </LinearGradient>
                <Text className={`text-link-${appliedTheme} my-3 mx-auto font-bold tracking-wide`}>Forgot password ?</Text>
            </Box>
        </Box>

        {/* Sign Up Link*/}
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