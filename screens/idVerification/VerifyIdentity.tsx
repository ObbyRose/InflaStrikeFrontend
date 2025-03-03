import React, { useState } from 'react';
import { Box } from '@/components/ui/box';
import BackHeader from '@/components/BackHeader';
import RoundedBox from '@/components/RoundedBox';
import { IC_Camera_Purple, IC_Drivers_License, IC_ID_Card, IC_Passport, IC_Passport_Photo, IC_Scan_Face_Purple, IC_Selfie_Photo } from '@/utils/constants/Icons';
import MyLinearGradient from '@/components/gradient/MyLinearGradient';
import { Text } from '@/components/ui/text';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import { Button, ButtonText } from '@/components/ui/button';
import { TouchableOpacity } from 'react-native';
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText } from '@/components/ui/actionsheet';
import SettingItem from '@/components/SettingItems';
import { Divider } from '@/components/ui/divider';



const VerifyIdentity = () => {
    const { appliedTheme } = useTheme();
    const [showActionSheet, setShowActionSheet] = useState(false);

    return (
        <MyLinearGradient type="background" color={appliedTheme === 'dark' ? 'dark' : 'light-blue'}>
            <Box className="p-4 h-full">
                <BackHeader title="Verify Identity" icons={["IC_Help"]} />
                
                {/* Government ID Section */}
                <Box>
                    <RoundedBox>
                        <IC_Passport_Photo />
                        <Box className="flex flex-col items-center">
                            <Text className={`text-text-${appliedTheme} font-bold text-[20px]`}>Government ID</Text>
                            <Text className={`text-subTextGray-${appliedTheme} p-4 text-center text-[16px]`}>
                                Take a driver's license, national identity card or passport photo.
                            </Text>
                        </Box>
                        
                        {/* Open ActionSheet on press */}
                        <TouchableOpacity onPress={() => setShowActionSheet(true)}>
                            <Box className="flex flex-row items-center gap-2 p-2 justify-center">
                                <IC_Camera_Purple className="w-8 h-8" />
                                <Text className="text-purple-500 font-bold text-[17px]">Take a photo</Text>
                            </Box>
                        </TouchableOpacity>
                    </RoundedBox>
                </Box>

                <Box className="p-3"></Box>

                {/* Selfie Photo Section */}
                <Box>
                    <RoundedBox>
                        <IC_Selfie_Photo />
                        <Box className="flex flex-col items-center">
                            <Text className={`text-text-${appliedTheme} font-bold text-[20px]`}>Selfie Photo</Text>
                            <Text className={`text-subTextGray-${appliedTheme} p-4 text-center text-[16px]`}>
                                Take a driver's license, national identity card or passport photo.
                            </Text>
                        </Box>
                        
                        {/* Open ActionSheet on press */}
                        <TouchableOpacity onPress={() => console.log('Take a selfie')}>
                            <Box className="flex flex-row items-center gap-2 p-2 justify-center">
                                <IC_Scan_Face_Purple className="w-8 h-8" />
                                <Text className="text-purple-500 font-bold text-[17px]">Take a selfie</Text>
                            </Box>
                        </TouchableOpacity>
                    </RoundedBox>
                </Box>

                <Box className="p-3"></Box>

                {/* Verify Identity Button */}
                <Button className={`w-full h-[4rem] rounded-full bg-buttonDisable-${appliedTheme}`}>
                    <ButtonText className={`text-buttonDisableText-${appliedTheme}`}>Verify My Identity</ButtonText>
                </Button>
            </Box>

            {/* Gluestack ActionSheet */}
            <Actionsheet isOpen={showActionSheet} onClose={() => setShowActionSheet(false)}>
                <ActionsheetBackdrop />
                <ActionsheetContent className={`bg-${appliedTheme === 'light' ? 'white' : 'background-dark'}`}>
                    <ActionsheetDragIndicatorWrapper>
                        <ActionsheetDragIndicator />
                    </ActionsheetDragIndicatorWrapper>

                    <ActionsheetItem onPress={() => console.log('Open Camera For Drivers License')}>
                        <ActionsheetItemText className={`text-text-${appliedTheme}`}>
                            <SettingItem IconComponent={IC_Drivers_License} title='Drivers License'></SettingItem>
                        </ActionsheetItemText>
                    </ActionsheetItem>

                    <Divider className={`bg-divider-${appliedTheme}`}></Divider>

                    <ActionsheetItem onPress={() => console.log('Open Camera For ID Card')}>
                        <ActionsheetItemText className={`text-itemText-${appliedTheme}`}>
                            <SettingItem IconComponent={IC_ID_Card} title='National Identity Card'></SettingItem>
                        </ActionsheetItemText>
                    </ActionsheetItem>

                    <Divider className={`bg-divider-${appliedTheme}`}></Divider>
                    
                    <ActionsheetItem onPress={() => console.log('Open Camera For Passport')}>
                        <ActionsheetItemText className={`text-itemText-${appliedTheme}`}>
                            <SettingItem IconComponent={IC_Passport} title='Passport' badge='Recommended'></SettingItem>
                        </ActionsheetItemText>
                    </ActionsheetItem>
                </ActionsheetContent>
            </Actionsheet>
        </MyLinearGradient>
    );
};

export default VerifyIdentity;
