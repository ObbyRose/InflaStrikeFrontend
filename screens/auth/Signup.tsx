import BackAuth from '@/components/auth/BackAuth'
import SignupPersonalInformation from '@/components/auth/SignupPersonalInformation'
import SignupPhoneNumber from '@/components/auth/SignupPhoneNumber'
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
import SignupAddress from '@/components/auth/SignupAddress'
import SignupAlmostThere from '@/components/auth/SignupAlmostThere'
import { SignupFinalDataType } from '@/types/other'

// const dummyFinalData = {"address": {"city": "נס ציונה", "coords": {"lat": 31.9293254, "lng": 34.7947742}, "country": "ישראל", "postal": "7054112", "street": "עמק השושנים", "subpremise": "Ap12"}, "birthday": "12/11/2007", "fName": "Xhjzus", "lName": "Jdjdis", "pass": "Xhxhsjwiieiei3i322", "phoneNumber": "+1 268 89764646616", "ssn": "7716"};

const Signup: React.FC<Props> = ({ navigation }) => {
    const { appliedTheme } = useTheme();
    const [screenStep , setScreenStep ] = useState("PHONE_NUMBER");
    const [slideAnim] = useState(new Animated.Value(0));
    const [isGoingBack, setIsGoingBack] = useState(false);
    const [finalData, setFinalData] = useState<SignupFinalDataType | null>(null);
    const [ headerStep,  setHeaderStep] = useState<number | null>(null);
    const [ comeFromEdit, setComeFromEdit] = useState(false);

    const screens = ['PHONE_NUMBER', 'VERIFY_PHONE', 'CREATE_PASSWORD', 'PERSONAL_INFO', 'ADDRESS', "ALMOST_THERE"];

    useEffect(() => {
        console.log("FINAL DATA: ", finalData);
    }, [finalData]);

    const handleScreenChange = (newScreenStep: 'back' | 'next' | string, data?: any, fromEdit = false) => {
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

        if(fromEdit)
            setComeFromEdit(true);
        else
            setComeFromEdit(false);

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
            chooseHeaderStep(newScreenStep)

        } else if(newScreenStep === "next"){
            setScreenStep(comeFromEdit ? "ALMOST_THERE" : screens[currentIndex + 1]);
            chooseHeaderStep(newScreenStep)
            

        } else { // "back"
            if(screenStep === "PHONE_NUMBER")
                navigation.navigate("Login");
            else
                setScreenStep(screens[currentIndex - 1]);

            setHeaderStep(prev => !prev ?  prev : prev === 1 ? null : prev - 1 )          
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

    function chooseHeaderStep(newScreenStep: string) {
        if(screenStep === "CREATE_PASSWORD")
            setHeaderStep(1);
        else if(screenStep === "")
            setHeaderStep(2);
        else if(screenStep === "")
            setHeaderStep(3);
        else
            setHeaderStep(null);
    }

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
                    { screenStep === 'VERIFY_PHONE' && <SignupVerifyPhone handleScreenChange={handleScreenChange} phoneEntered={finalData?.phoneNumber || "your phone"}/>}
                    { screenStep === 'CREATE_PASSWORD' && <SignupCreatePassword handleScreenChange={handleScreenChange} phoneEntered={finalData?.phoneNumber || "your phone"}/>}
                    { screenStep === 'PERSONAL_INFO' && <SignupPersonalInformation handleScreenChange={handleScreenChange} setHeaderStep={setHeaderStep}/>}
                    { screenStep === 'ADDRESS' && <SignupAddress handleScreenChange={handleScreenChange} setHeaderStep={setHeaderStep} />}
                    { screenStep === 'ALMOST_THERE' && <SignupAlmostThere navigation={navigation} handleScreenChange={handleScreenChange} setHeaderStep={setHeaderStep} finalData={finalData}/>}
                </Animated.View>
            </Box>
        </Box>
        </MyLinearGradient>
    </ScrollView>
    </SafeAreaView>
    )
}

export default Signup