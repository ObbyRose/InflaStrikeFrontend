import InputAuth from '@/components/auth/InputAuth'
import MyLinearGradient from '@/components/gradient/MyLinearGradient'
import { Box } from '@/components/ui/box'
import { Button, ButtonSpinner, ButtonText } from '@/components/ui/button'
import { LinearGradient } from '@/components/ui/linear-gradient'
import { Text } from '@/components/ui/text'
import { useFormInput } from '@/hooks/useFormInput'
import { Props } from '@/types/NavigationTypes'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import * as Network from "expo-network";
import { useToast, Toast, ToastTitle, ToastDescription } from "@/components/ui/toast";
import { VStack } from "@/components/ui/vstack";


const Login: React.FC<Props> = ({ navigation }) => {
    const { appliedTheme } = useTheme();
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const { values, errors, handleInputChange, setErrorByFields } = useFormInput({
        email: '',
        pass: '',
        api: ''
    });
    const { email, pass } = values;

    async function handleSubmitLogin() {
        const network = await Network.getNetworkStateAsync();
        const toast = useToast();
        if (!network.isConnected || !network.isInternetReachable) {
            toast.show({
                placement: "top",
                duration: 3000,
                render: ({ id }) => (
                    <Toast action="error" variant="solid" nativeID={id}>
                        <VStack space="xs">
                            <ToastTitle>No Internet</ToastTitle>
                            <ToastDescription>
                                You're offline. Please connect to the internet to continue.
                            </ToastDescription>
                        </VStack>
                    </Toast>
                ),
            });
            return; // stop login flow
        }
    
        let valid = true;
        let newErrors = { email: "", pass: "" };
    
        if (!email.trim()) {
            newErrors.email = t('login.emailRequired');
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = t('login.invalidEmailFormat');
            valid = false;
        }
    
        if (!pass.trim()) {
            newErrors.pass = t('login.passwordRequired');
            valid = false;
        } else if (pass.length < 6) {
            newErrors.pass = t('login.passwordMinLength');
            valid = false;
        }
    
        setErrorByFields(newErrors)
    
        if (valid) {
            setIsLoading(true);
            console.log({ email, password: pass });
            setTimeout(() =>  {
                setIsLoading(false);
                navigation.navigate("MainApp", { screen: "Home" });
            }, 1000);
        }
    }

    return (
    <MyLinearGradient type='background' color={appliedTheme === "dark" ? 'dark' : 'light-blue'}>
    <Box className={`h-full p-10 pt-36 justify-between`}>
        <Box>
            {/* Title */}
            <Box className='my-10 gap-2'>
                <Text className={`text-4xl text-text-${appliedTheme} font-bold`}>{t('login.welcome')}</Text>
                <Text className={`text-xl text-subText-${appliedTheme}`}>{t('login.signInToAccount')}</Text>
            </Box>
            {/* Main Login */}
            <Box className='gap-2'>
                {/* Inputs */}
                <InputAuth 
                    icon="IC_Email" 
                    placeholder={t('login.emailPlaceholder')}
                    value={email}
                    onChangeText={(val) => handleInputChange("email", val)}
                    error={errors.email}
                />
                <InputAuth 
                    icon="IC_Lock" 
                    placeholder={t('login.passwordPlaceholder')}
                    type='pass'
                    value={pass}
                    onChangeText={(val) => handleInputChange("pass", val)}
                    error={errors.pass}
                />

                { errors.api && <Text className="text-red-500 text-sm ps-3 mb-1 -mt-1">{errors.api}</Text>}
                {/* Login Button & Forgot Pass */}
                <MyLinearGradient type='button' color='purple'>
                    <Button onPress={handleSubmitLogin}>
                        <ButtonText className="text-white">
                        {isLoading ? <ButtonSpinner color={"white"} className="h-6" /> : t('login.signInButton')}
                        </ButtonText>
                    </Button>
                </MyLinearGradient>
                <Text className={`text-link-${appliedTheme} my-3 mx-auto font-bold tracking-wide`}>{t('login.forgotPassword')}</Text>
            </Box>
        </Box>

        {/* Sign Up Link*/}
        <Box className='mx-auto flex-row'>
            <Text className={`text-gray-${appliedTheme}`}>
                {t('login.dontHaveAccount')}
                <Text className={`text-link-${appliedTheme} mx-auto font-bold tracking-wide`}
                onPress={() => navigation.navigate("Signup")}
                > {t('login.signUpLink')}</Text>
            </Text>
            
        </Box>
    </Box>
    </MyLinearGradient>
    )
}

export default Login