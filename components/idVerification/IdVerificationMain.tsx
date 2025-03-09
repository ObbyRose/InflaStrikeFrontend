import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Box } from '../ui/box'
import RoundedBox from '../RoundedBox'
import { IC_Camera_Orange, IC_Camera_Purple, IC_Drivers_License, IC_ID_Card, IC_Illustration, IC_Passport, IC_Passport_Photo, IC_Scan_Face_Orange, IC_Scan_Face_Purple, IC_Selfie_Photo, IC_Tick_Selected } from '@/utils/constants/Icons'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText } from '../ui/actionsheet'
import { AlertDialog, AlertDialogBackdrop, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader } from '../ui/alert-dialog'
import MyLinearGradient from '../gradient/MyLinearGradient'
import { Button, ButtonText } from '../ui/button'
import SettingItem from '../SettingItems'
import { Divider } from '../ui/divider'
import { idVerifyProps } from '@/types/NavigationTypes'

interface IdVerificationMainProps extends idVerifyProps {
    isGovernmentIDSubmitted: boolean;
    isSelfieSubmitted: boolean;
}

const IdVerificationMain = ({ handleScreenChange, isGovernmentIDSubmitted, isSelfieSubmitted} : IdVerificationMainProps) => {
    const { appliedTheme } = useTheme();
    const [showActionSheet, setShowActionSheet] = useState(false);
    
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleVerifyIdentity = () => {
        if (isGovernmentIDSubmitted && isSelfieSubmitted) {
            setIsDialogOpen(true);
        }
    };

    return (
    <Box className='flex-1 p-4'>
        {/* Government ID Section */}
        <Box>
            <RoundedBox>
                <IC_Passport_Photo />
                {isGovernmentIDSubmitted && <IC_Tick_Selected className="-mt-14" />}
                <Box className="flex flex-col items-center">
                    <Text className={`text-text-${appliedTheme} font-bold text-[20px]`}>Government ID</Text>
                    <Text className={`text-subTextGray-${appliedTheme} p-4 text-center text-[16px]`}>
                        Take a driver's license, national identity card or passport photo.
                    </Text>
                </Box>

                {/* Open ActionSheet on press */}
                <TouchableOpacity onPress={() => setShowActionSheet(true)}>
                    <Box className="flex flex-row items-center gap-2 p-2 justify-center">
                        {isGovernmentIDSubmitted ? (
                            <IC_Camera_Orange className="w-8 h-8" />
                        ) : (
                            <IC_Camera_Purple className="w-8 h-8" />
                        )}
                        <Text className={`font-bold text-[17px] ${isGovernmentIDSubmitted ? 'text-orange' : 'text-purple-500'}`}>
                            Take a photo
                        </Text>
                    </Box>
                </TouchableOpacity>
            </RoundedBox>
        </Box>

        <Box className="p-3"></Box>

        {/* Selfie Photo Section */}
        <Box>
            <RoundedBox>
                <IC_Selfie_Photo />
                {isSelfieSubmitted && <IC_Tick_Selected className="-mt-14" />}
                <Box className="flex flex-col items-center">
                    <Text className={`text-text-${appliedTheme} font-bold text-[20px]`}>Selfie Photo</Text>
                    <Text className={`text-subTextGray-${appliedTheme} p-4 text-center text-[16px]`}>
                        Take a selfie to verify your identity.
                    </Text>
                </Box>

                {/* Open ActionSheet on press */}
                <TouchableOpacity onPress={() => console.log('Take a selfie')}>
                    <Box className="flex flex-row items-center gap-2 p-2 justify-center">
                        {isSelfieSubmitted ? (
                            <IC_Scan_Face_Orange className="w-8 h-8" />
                        ) : (
                            <IC_Scan_Face_Purple className="w-8 h-8" />
                        )}
                        <Text className={`font-bold text-[17px] ${isSelfieSubmitted ? 'text-orange' : 'text-purple-500'}`}>
                            Take a selfie
                        </Text>
                    </Box>
                </TouchableOpacity>
            </RoundedBox>
        </Box>

        <Box className="p-3"></Box>

        {/* Verify Identity Button */}
        {isGovernmentIDSubmitted && isSelfieSubmitted ? (
            <MyLinearGradient type="button" color="purple">
                <Button className="w-full h-12 rounded-full" onPress={handleVerifyIdentity}>
                    <ButtonText className={`text-buttonText-${appliedTheme}`}>Verify My Identity</ButtonText>
                </Button>
            </MyLinearGradient>
        ) : (
            <Button className={`w-full h-16 rounded-full bg-buttonDisable-${appliedTheme}`}>
                <ButtonText className={`text-buttonDisableText-${appliedTheme}`}>Verify My Identity</ButtonText>
            </Button>
        )}
        
        {/* </Box> */}

        {/* Gluestack ActionSheet */}
        <Actionsheet isOpen={showActionSheet} onClose={() => setShowActionSheet(false)}>
            <ActionsheetBackdrop />
            <ActionsheetContent className={`bg-${appliedTheme === 'light' ? 'white' : 'background-dark'}`}>
                <ActionsheetDragIndicatorWrapper>
                    <ActionsheetDragIndicator />
                </ActionsheetDragIndicatorWrapper>

                <ActionsheetItem onPress={() => { handleScreenChange("CAMERA", { idMethod: "Driver's License"})}}>
                    <ActionsheetItemText>
                        <SettingItem IconComponent={IC_Drivers_License} title="Driver's License" />
                    </ActionsheetItemText>
                </ActionsheetItem>

                <Divider />

                <ActionsheetItem onPress={() => { handleScreenChange("CAMERA", { idMethod: "ID Card"})}}>
                    <ActionsheetItemText>
                        <SettingItem IconComponent={IC_ID_Card} title="National Identity Card" />
                    </ActionsheetItemText>
                </ActionsheetItem>
                <Divider />

                <ActionsheetItem onPress={() => { handleScreenChange("CAMERA", { idMethod: "Passport"})}}>
                    <ActionsheetItemText>
                        <SettingItem IconComponent={IC_Passport} title="Passport" badge="Recommended" />
                    </ActionsheetItemText>
                </ActionsheetItem>
            </ActionsheetContent>
        </Actionsheet>

        {/* Gluestack AlertDialog for Thank You Message */}
        <AlertDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
            <AlertDialogBackdrop />
            <AlertDialogContent className={`bg-${appliedTheme === 'light' ? 'white' : 'background-dark'} rounded-3xl`}>
                <Box className='flex gap-10 h-fit flex-col items-center'>
                <AlertDialogHeader>
                    <Box className={`flex flex-col items-center gap-4`}>
                    <IC_Illustration />
                    <Text className={`text-[20px] font-bold text-text-${appliedTheme} text-center`}>Thanks! We'll review your documents within 10 minutes</Text>
                    </Box>
                </AlertDialogHeader>
                <AlertDialogBody>
                    <Text className={`text-[15px] font-medium text-subText-${appliedTheme} text-center`}> Get ready to start using Tothor for your daily financial app.</Text>
                </AlertDialogBody>
                <AlertDialogFooter>
                    <MyLinearGradient type='button' color='purple'>
                        <Button className='w-full' onPress={() => setIsDialogOpen(false)}>
                            <ButtonText>Got it</ButtonText>
                        </Button>
                    </MyLinearGradient>
                </AlertDialogFooter>
                </Box>
            </AlertDialogContent>
        </AlertDialog>
    </Box>
    )
}

export default IdVerificationMain