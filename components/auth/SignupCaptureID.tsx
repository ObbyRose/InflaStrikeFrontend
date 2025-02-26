import React, { useState, useRef, useEffect } from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { SignUpScreensProps } from "@/types/NavigationTypes";
import { Box } from "../ui/box";
import { Progress, ProgressFilledTrack } from "../ui/progress";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import { IM_ProcessingVerification } from "@/utils/constants/Images";

interface SignupCaptureIDProps extends SignUpScreensProps {
    type: "ID Card" | "Driver's License" | 'Passport';
}

function SignupCaptureID({ handleScreenChange, type }: SignupCaptureIDProps) {
    const { appliedTheme } = useTheme();
    const [permission, requestPermission] = useCameraPermissions();
    const [frontPhoto, setFrontPhoto] = useState<string | null>(null);
    const [backPhoto, setBackPhoto] = useState<string | null>(null);
    const [step, setStep] = useState(0);
    const cameraRef = useRef<any>(null);

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
            } catch (error) {
                console.error("Error taking picture:", error);
            }
        } else {
            console.log("Camera ref not available");
        }
    };

    const retakePicture = () => {
        if (step === 0) {
            setFrontPhoto(null);
        } else if (step === 1) {
            setBackPhoto(null);
        }
    };

    const confirmAndProceed = () => {
        if (step === 0 && frontPhoto && type === "ID Card") {
                setStep(1);
        } else if (step === 1 && backPhoto || step === 0) {
            setStep(2);
            // Pass both photos to the next screen
            setTimeout(() => {
                handleScreenChange && handleScreenChange('next', { 
                    frontIdPhoto: frontPhoto, 
                    backIdPhoto: backPhoto 
                });
            }, 4000)
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
        <Box className="flex-1 bg-white">
            <Box className="flex-row gap-2 self-center my-4">
                {[0,1,2].map(idx =>
                    <Progress key={idx} value={idx < step ? 100 : idx === step ? 50 : 0} size="sm" className="w-[30%]">
                        <ProgressFilledTrack className={`bg-link-${appliedTheme}`}/>
                    </Progress>
                )}
            </Box>
            { step === 2 ?
            <Box>
                <IM_ProcessingVerification className='h-[300px] -mt-3'/>
                <Box className="items-center py-4">
                    <Text className="text-2xl font-bold">Verification still processing</Text>
                    <Text className="text-gray-500 text-center mt-2 mb-4">
                        Your ID requires additional verification. We will email you once verification has been completed.
                    </Text>
                </Box>
            </Box>
            :
            <>
            {!currentPhoto ? (
                <Box className="flex-1 gap-10 mt-10">
                    <Box className="w-full h-[220px] bg-gray-100 rounded-lg relative overflow-hidden">
                        <Box 
                            className="h-5/6 w-5/6 absolute top-1/2 left-1/2"
                            style={{ transform: "translate(-50%,-50%)"}}
                        >
                            <CameraView 
                                ref={cameraRef}
                                style={{ width: "100%", height: "100%"}}
                                facing="back"
                            />
                        </Box>
                        {/* Border Guides (for framing the ID) */}
                        <Box className="absolute w-8 h-8 border-t-4 border-l-4 border-black rounded-sm" />
                        <Box className="absolute right-0 w-8 h-8 border-t-4 border-r-4 border-black rounded-sm" />
                        <Box className="absolute bottom-0 w-8 h-8 border-b-4 border-l-4 border-black rounded-sm" />
                        <Box className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-black rounded-sm" />
                    </Box>
                    <Box className="items-center px-6 py-4">
                        <Text className="text-3xl font-bold">{photoSide} of your ID</Text>
                        <Text className="text-gray-500 text-center mt-2 mb-4">
                            Hold up your ID and take a picture. Your entire ID must be in the frame.
                        </Text>
                    </Box>

                    {/* Bottom Section with Instructions */}
                    <Box className="items-center px-6 py-4">
                        {/* Capture Button */}
                        <TouchableOpacity 
                            onPress={takePicture}
                            className="w-16 h-16 bg-indigo-500 rounded-full items-center justify-center"
                        >
                            <Box className="w-14 h-14 bg-white rounded-full border-2 border-indigo-500" />
                        </TouchableOpacity>
                    </Box>
                </Box>
            ) : 
            (
                <Box className="flex-1">
                    {/* Display captured photo */}
                    <Box className="flex-1 p-4">
                        <Image 
                            source={{ uri: currentPhoto }} 
                            className="flex-1 rounded-lg" 
                            resizeMode="cover" 
                        />
                    </Box>
                    
                    {/* Bottom Section with Actions */}
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
                </Box>
            )}</>
            }
        </Box>
    );
}

export default SignupCaptureID;