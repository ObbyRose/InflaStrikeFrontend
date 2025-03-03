import BackAuth from '@/components/auth/BackAuth'
import SignupCaptureID from '@/components/auth/SignupCaptureID'
import SignupIDType from '@/components/auth/SignupIDType'
import SignupMain from '@/components/auth/SignupMain'
import SignupPersonalInformation from '@/components/auth/SignupPersonalInformation'
import SignupPhoneNumber from '@/components/auth/SignupPhoneNumber'
import SignupStatus from '@/components/auth/SignupStatus'
import SignupVerified from '@/components/auth/SignupVerified'
import VerifyEmail from '@/components/auth/VerifyEmail'
import SignupVerifyPhone from '@/components/auth/SignupVerifyPhone'
import MyLinearGradient from '@/components/gradient/MyLinearGradient'
import { Box } from '@/components/ui/box'
import { Props } from '@/types/NavigationTypes'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import React, { useEffect, useState } from 'react'
import { BackHandler, ScrollView } from 'react-native'
import { Animated, Easing } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import SignupCreatePassword from '@/components/auth/SignupCreatePassword'


const Signup: React.FC<Props> = ({ navigation }) => {
    const { appliedTheme } = useTheme();
    const [screenStep , setScreenStep ] = useState("CREATE_PASSWORD");
    const [slideAnim] = useState(new Animated.Value(0));
    const [isGoingBack, setIsGoingBack] = useState(false);
    const [finalData, setFinalData] = useState<any>({});
    const [ headerStep,  setHeaderStep] = useState(0);

    const screens = ['PHONE_NUMBER', 'VERIFY_PHONE', 'CREATE_PASSWORD', 'PERSONAL_INFO',     
        'MAIN', 'VERIFY_EMAIL', 'STATUS1' , 'STATUS2', 'ID_TYPE', 'CAPTURE_ID', 'VERIFIED'];

    useEffect(() => {
        console.log("FINAL DATA: ", finalData);
    }, [finalData]);

    const handleScreenChange = (newScreenStep: 'back' | 'next', data?: any) => {
        const direction = newScreenStep === 'next' ? -1 : 1;
        setIsGoingBack(direction === 1);

        // Update finalData
        if (data) {
            setFinalData((prevData:any) => ({
            ...prevData,
            ...data
            }));
        }

        // Trigger the animation when changing the screenStep
        Animated.timing(slideAnim, {
            toValue: -1,
            duration: 100,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start(() => {

        // After slide-out animation ends, change the screen step
        const currentIndex = screens.indexOf(screenStep);
        if(newScreenStep === "next")
            setScreenStep(screens[currentIndex + 1]);
        else {
            if(screenStep === "PHONE_NUMBER")
                navigation.navigate("Login");
            else
                setScreenStep(screens[currentIndex - 1]);

            setHeaderStep(prev => prev > 0 ? prev-1 : prev);
        }
    
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
        if(screenStep === "PHONE_NUMBER")
            navigation.navigate("Login");
        else 
            handleScreenChange("back");
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
        keyboardShouldPersistTaps="handled"
        >
        <MyLinearGradient type='background' color={appliedTheme === "dark" ? "dark" : 'light-blue'}>
        <Box className={`flex-1 min-h-screen`}>
            <BackAuth handleScreenChange={handleScreenChange} headerStep={headerStep}/>
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
                        { screenStep === 'PHONE_NUMBER' && <SignupPhoneNumber handleScreenChange={handleScreenChange} />}
                        { screenStep === 'VERIFY_PHONE' && <SignupVerifyPhone handleScreenChange={handleScreenChange} phoneEntered={finalData.phoneNumber || "your phone"}/>}
                        { screenStep === 'CREATE_PASSWORD' && <SignupCreatePassword handleScreenChange={handleScreenChange} phoneEntered={finalData.phoneNumber || "your phone"}/>}
                        { screenStep === 'PERSONAL_INFO' && <SignupPersonalInformation handleScreenChange={handleScreenChange} setHeaderStep={setHeaderStep}/>}



                        { screenStep === 'MAIN' && <SignupMain handleScreenChange={handleScreenChange} />}
                        { screenStep === 'VERIFY_EMAIL' && <VerifyEmail handleScreenChange={handleScreenChange} />}
                        { screenStep === 'STATUS1' && <SignupStatus handleScreenChange={handleScreenChange} currentStep={screens.indexOf(screenStep)} />}
                        { screenStep === 'STATUS2' && <SignupStatus handleScreenChange={handleScreenChange} currentStep={screens.indexOf(screenStep)} />}
                        { screenStep === 'ID_TYPE' && <SignupIDType handleScreenChange={handleScreenChange} />}
                        { screenStep === 'CAPTURE_ID' && <SignupCaptureID handleScreenChange={handleScreenChange} type={finalData.idMethod}/>}
                        { screenStep === 'VERIFIED' && <SignupVerified handleScreenChange={handleScreenChange} />}
                    </Animated.View>
            </Box>
        </Box>
        </MyLinearGradient>
    </ScrollView>
    </SafeAreaView>
    )
}

export default Signup