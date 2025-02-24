import BackAuth from '@/components/auth/BackAuth'
import SignupIDType from '@/components/auth/SignupIDType'
import SignupMain from '@/components/auth/SignupMain'
import SignupPersonalInformation from '@/components/auth/SignupPersonalInformation'
import SignupPhoneNumber from '@/components/auth/SignupPhoneNumber'
import SignupStatus from '@/components/auth/SignupStatus'
import VerifyEmail from '@/components/auth/VerifyEmail'
import VerifyPhone from '@/components/auth/VerifyPhone'
import { Box } from '@/components/ui/box'
import { Props } from '@/types/NavigationTypes'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import React, { useEffect, useState } from 'react'
import { BackHandler, ScrollView } from 'react-native'
import { Animated, Easing } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'


const Signup: React.FC<Props> = ({ navigation }) => {
    const { appliedTheme } = useTheme();
    const [screenStep , setScreenStep ] = useState(7);
    const [slideAnim] = useState(new Animated.Value(0));
    const [isGoingBack, setIsGoingBack] = useState(false);

    const handleScreenChange = (newScreenStep: number) => {
        const direction = newScreenStep < screenStep ? 1 : -1;
        setIsGoingBack(direction === 1);

        // Trigger the animation when changing the screenStep
        Animated.timing(slideAnim, {
            toValue: -1,
            duration: 100,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start(() => {

        // After slide-out animation ends, change the screen step
        setScreenStep(newScreenStep);
    
        // Then, trigger the slide-in animation
        slideAnim.setValue(-direction);
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();
        });
    };

    useEffect(() => {
        const backAction = () => {
        if(screenStep === 0)
            navigation.navigate("Login");
        else 
            handleScreenChange(screenStep - 1);
        return true; 
        };
    
        BackHandler.addEventListener('hardwareBackPress', backAction);
    
        // Cleanup listener on component unmount
        return () => {
        BackHandler.removeEventListener('hardwareBackPress', backAction);
        };
    }, [screenStep]);

    return (
    <SafeAreaView>
        <ScrollView 
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        >
        <Box className={`flex-1 h-full min-h-screen bg-background-${appliedTheme}`}>
            <BackAuth screenStep={screenStep} handleScreenChange={handleScreenChange} navigation={navigation}/>
                <Box className={`flex-1 p-10 pt-5`}>
                    <Animated.View
                        className="flex-1"
                        style={{
                            transform: [
                                {
                                translateX: slideAnim.interpolate({
                                    inputRange: [-1, 0, 1],
                                    outputRange: [
                                    isGoingBack ? 350 : -350, 0,
                                    isGoingBack ? -350 : 350,
                                    ],
                                }),
                                },
                            ],
                            opacity: slideAnim.interpolate({
                                inputRange: [-1, 0, 1],
                                outputRange: [0, 1, 0],
                            }),
                        }}
                    >
                    { screenStep === 0 && <SignupMain handleScreenChange={handleScreenChange} />}
                    { screenStep === 1 && <VerifyEmail handleScreenChange={handleScreenChange} />}
                    { screenStep === 2 && <SignupStatus handleScreenChange={handleScreenChange} currentStep={screenStep} />}
                    { screenStep === 3 && <SignupPhoneNumber handleScreenChange={handleScreenChange} />}
                    { screenStep === 4 && <VerifyPhone handleScreenChange={handleScreenChange}/>}
                    { screenStep === 5 && <SignupStatus handleScreenChange={handleScreenChange} currentStep={screenStep} />}
                    { screenStep === 6 && <SignupPersonalInformation handleScreenChange={handleScreenChange} />}
                    { screenStep === 7 && <SignupIDType handleScreenChange={handleScreenChange} />}
                </Animated.View>
            </Box>
        </Box>
    </ScrollView>
    </SafeAreaView>
    )
}

export default Signup