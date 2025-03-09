import React, { useState, useRef, useEffect } from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { SignUpScreensProps } from "@/types/NavigationTypes";
import { Box } from "../ui/box";
import { Progress, ProgressFilledTrack } from "../ui/progress";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import { IM_ProcessingVerification } from "@/utils/constants/Images";
import { LinearGradient } from "../ui/linear-gradient";
import { IC_Camera_Flip, IC_Flash, IC_NoFlash, IC_Tick_Purple, IC_Vi } from "@/utils/constants/Icons";

interface SignupCaptureIDProps extends SignUpScreensProps {
    type: "ID Card" | "Driver's License" | 'Passport';
}

function CaptureID({ handleScreenChange, type }: SignupCaptureIDProps) {
    const [permission, requestPermission] = useCameraPermissions();
    const [frontPhoto, setFrontPhoto] = useState<string | null>(null);
    const [backPhoto, setBackPhoto] = useState<string | null>(null);
    const [step, setStep] = useState(0);
    const cameraRef = useRef<any>(null);
    const [direction, setDirection] = useState<CameraType>("back");
    const [isFlash, setIsFlash] = useState(false);

    useEffect(() => {
        if (!permission?.granted) {
            requestPermission();
        }
    }, [permission]);

    const takePicture = async () => {
        if (cameraRef.current) {
            try {
                const photo = await cameraRef.current.takePictureAsync();
                if (step === 0) {
                    setFrontPhoto(photo.uri);
                } else if (step === 1) {
                    setBackPhoto(photo.uri);
                }
                confirmAndProceed();
            } catch (error) {
                console.error("Error taking picture:", error);
            }
        } else {
            console.log("Camera ref not available");
        }
    };


    const confirmAndProceed = () => {
        if (step === 0 && type === "ID Card") {
                setStep(1);
        } else if (step === 1 || step === 0) {
            console.log("HERE")
            setTimeout(() => {
                handleScreenChange('next', { 
                    frontIdPhoto: frontPhoto, 
                    backIdPhoto: backPhoto 
                });
            }, 1000)
        }
    };

    if (!permission) {
        return (
            <Box className="flex-1 bg-white items-center justify-center">
                <Text>Requesting camera permission...</Text>
            </Box>
        );
    }

    if (!permission.granted) {
        return (
            <Box className="flex-1 bg-white items-center justify-center">
                <Text>No access to camera.</Text>
                <TouchableOpacity 
                    onPress={requestPermission}
                    className="mt-4 py-2 px-4 bg-indigo-500 rounded-lg"
                >
                    <Text className="text-white">Grant Permission</Text>
                </TouchableOpacity>
            </Box>
        );
    }

    // Determine which photo we're currently working with
    const currentPhoto = step === 0 ? frontPhoto : backPhoto;
    const photoSide = step === 0 ? "Front" : "Back";

    return (
        <Box className="flex-1">
            <Box className="flex-1 gap-10 -mt-20 justify-evenly">
                {/* Camera */}
                <Box className="absolute inset-0">
                    <CameraView 
                        ref={cameraRef}
                        style={{ width: "100%", height: "100%"}}
                        facing={direction}
                        // flash={isFlash ? "on" : "off"}
                        // flash={"on"}
                        // enableTorch={true}
                    />
                </Box>
                {/* Overlay */}
                <Box className="absolute inset-0">
                    <LinearGradient
                        colors={['rgba(0, 0, 0, 0.9)', 'rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.1)']}
                        locations={[0, 0.5, 1]}
                        start={[0.5, 1]}
                        end={[0.5, 0]}
                        className="absolute inset-0"
                    />
                </Box>
                {/* ID Borders */}
                <Box className="h-[10%]"></Box>
                <Box className="h-[220px] bg-transparent rounded-lg relative overflow-hidden w-[90%] mx-auto z-10">
                    <Box className="absolute w-8 h-8 border-t-4 border-l-4 border-cyan-600 rounded-sm" />
                    <Box className="absolute right-0 w-8 h-8 border-t-4 border-r-4 border-cyan-600 rounded-sm" />
                    <Box className="absolute bottom-0 w-8 h-8 border-b-4 border-l-4 border-cyan-600 rounded-sm" />
                    <Box className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-cyan-600 rounded-sm" />
                </Box>
                {/* Instructions Section */}
                <Box className="items-center p-4 my-3 gap-5">
                    <Text className="text-3xl font-bold text-text-dark">{photoSide} of your ID</Text>
                    <Text className="text-subText-dark text-sm text-center w-2/3">
                        Position all 4 corners of the front clearly in the frame.
                    </Text>
                </Box>
                {/* Submit Section */}
                <Box className="flex-row justify-evenly items-center px-6 py-4">
                    {/* Flash */}
                    <TouchableOpacity 
                        onPress={() => setIsFlash(prev => !prev)}
                        className="w-14 h-14 bg-white rounded-full items-center justify-center"
                        activeOpacity={0.7}
                    >
                        { isFlash ?
                        <IC_NoFlash className="w-8 h-8"/>
                        :
                        <IC_Flash className="w-8 h-8"/>
                        }
                    </TouchableOpacity>
                    {/* Take Photo */}
                    <TouchableOpacity 
                        onPress={takePicture}
                        className="w-21 h-21 bg-purple-400 rounded-full items-center justify-center"
                    >
                        <Box className="w-20 h-20 justify-center items-center bg-purple-600 border-4 rounded-full  border-black">
                            <IC_Vi color="white" className="w-10 h-10"/>
                        </Box>
                    </TouchableOpacity>
                    {/* Flip Camera */}
                    <TouchableOpacity
                        onPress={() => setDirection(prev => prev === "front" ? "back": "front")}
                        className="w-14 h-14 bg-white rounded-full items-center justify-center"
                        activeOpacity={0.7}
                    >
                        <IC_Camera_Flip className="w-8 h-8"/>
                    </TouchableOpacity>
                </Box>
            </Box>
            
            {/* <Box className="flex-1">
                <Box className="flex-1 p-4">
                    <Image 
                        source={{ uri: currentPhoto }} 
                        className="flex-1 rounded-lg" 
                        resizeMode="cover" 
                    />
                </Box>
                
                <Box className="items-center px-6 py-6">
                    <Text className="text-lg font-bold">Verify your ID image</Text>
                    <Text className="text-gray-500 text-center mt-2 mb-6">
                        Make sure your ID is clearly visible and all details are readable.
                    </Text>
                    
                    <Box className="flex-row justify-around w-full px-4">
                        <TouchableOpacity 
                            onPress={retakePicture}
                            className="py-3 px-6 bg-gray-100 rounded-lg"
                        >
                            <Text className="font-semibold">Retake</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            onPress={confirmAndProceed}
                            className="py-3 px-6 bg-indigo-500 rounded-lg"
                        >
                            <Text className="text-white font-semibold">Confirm</Text>
                        </TouchableOpacity>
                    </Box>
                </Box>
            </Box> */}
        </Box>
    );
}

export default CaptureID;