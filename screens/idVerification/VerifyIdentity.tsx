import React, { useState } from 'react';
import { Box } from '@/components/ui/box';
import MyLinearGradient from '@/components/gradient/MyLinearGradient';
import { Text } from '@/components/ui/text';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import { Props } from '@/types/NavigationTypes';
import IdVerificationMain from '@/components/idVerification/IdVerificationMain';
import BackAuth from '@/components/auth/BackAuth';
import { Animated, Easing } from 'react-native';
import CaptureID from '@/components/idVerification/CaptureID';
import { IC_Help_V2 } from '@/utils/constants/Icons';


const VerifyIdentity: React.FC<Props> = ({ navigation }) => {
    const { appliedTheme, setTheme } = useTheme();
    const [screenStep , setScreenStep ] = useState("CAMERA");
    const [slideAnim] = useState(new Animated.Value(0));
    const [isGoingBack, setIsGoingBack] = useState(false);
    const [finalData, setFinalData] = useState<any>({});

    const [isGovernmentIDSubmitted, setIsGovernmentIDSubmitted] = useState(false);
    const [isSelfieSubmitted, setIsSelfieSubmitted] = useState(false);
    
    const screens = ['MAIN', 'CAMERA', 'CONFIRM_QUALITY'];

    console.log("finalData", finalData)

    const handleScreenChange = (newScreenStep: 'back' | 'next' | string, data?: any) => {
            if (!['back', 'next'].includes(newScreenStep) && !screens.includes(newScreenStep)) {
                console.log("Invalid screen step");
                return null;
            }
            const isScreenName = typeof newScreenStep === 'string' && !['back', 'next'].includes(newScreenStep);
    
            let direction = 0; 
            let isGoingBack = false;
    
            if (isScreenName) {
                const currentIndex = screens.indexOf(screenStep);
                const targetIndex = screens.indexOf(newScreenStep);
                isGoingBack = targetIndex < currentIndex;
            } else {
                isGoingBack = newScreenStep === 'back';
            }
    
            setIsGoingBack(isGoingBack);
            direction = isGoingBack ? 1 : -1;
    
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
            if (isScreenName) {
                setScreenStep(newScreenStep);
    
            } else if(newScreenStep === "next"){
                setScreenStep(screens[currentIndex + 1]);
            } else { // "back"
                if(screenStep === "PHONE_NUMBER")
                    navigation.navigate("Login");
                else
                    setScreenStep(screens[currentIndex - 1])
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

    return (
    <MyLinearGradient className='flex-1' type="background" color={appliedTheme === 'dark' ? 'dark' : 'light-blue'}>
        <Box className="flex-1 min-h-screen">
            <BackAuth title={finalData.idMethod} icons={["IC_Help"]} handleScreenChange={handleScreenChange} theme={screenStep === "CAMERA" ? "dark" : ""}/>
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
                { screenStep === "MAIN" && <IdVerificationMain handleScreenChange={handleScreenChange} 
                    isGovernmentIDSubmitted={isGovernmentIDSubmitted} isSelfieSubmitted={isSelfieSubmitted}/>}
                { screenStep === "CAMERA" && <CaptureID handleScreenChange={handleScreenChange} type={finalData.idMethod}/>}
                { screenStep === "CONFIRM_QUALITY" && <></>}
            </Animated.View>
        </Box>
    </MyLinearGradient>
    );
};

export default VerifyIdentity;
