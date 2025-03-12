import React, { useState, useEffect } from "react";
import { Text, ScrollView, TouchableOpacity } from "react-native";
import { Box } from "@/components/ui/box";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import { Divider } from "@/components/ui/divider";
import { useUserStore } from "@/context/userStore"; // Import the Zustand store
import { IC_BTCUSDT, IC_Bell_White, IC_Info, IC_Top_Up, IC_Transaction, IC_History, IC_Tothor, IC_Tothor_Logo_Only, IC_Tothor_Logo_Only_Bold, IC_Gold, IC_Doge } from "@/utils/constants/Icons";
import { Props } from "@/types/NavigationTypes";
import MyLinearGradient from "@/components/gradient/MyLinearGradient";
import OptionCard from "@/components/OptionCard";
import { handleSQLiteIInsert, handleSQLiteSelect } from "@/utils/api/internal/sql/handleSQLite";
import OverlayLoading from "@/components/OverlayLoading";

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const { appliedTheme } = useTheme();
    const { user } = useUserStore();

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {/* Header Section */}
            <MyLinearGradient type="background" color={appliedTheme === 'dark' ? 'blue' : 'purple'}>
                <Box className="h-[40%] p-4 gap-4">
                    <Box className="flex flex-row items-center justify-between">
                        <IC_Tothor className="w-40 h-16" />
                        <IC_Bell_White className="w-7 h-7" />
                    </Box>
                    <Box className="flex flex-col gap-4 p-4">
                        <Text className="text-white font-medium text-[17px]">Safe-to-spend</Text>
                        <Box className="flex-row gap-4 items-center">
                            <Text className="text-white font-medium text-4xl">${user?.nlve || 0}</Text>
                            <IC_Info className="w-6 h-6" />
                        </Box>
                        <Text className="text-white text-[14px]">Updated 2 mins ago</Text>
                    </Box>

                    <Box className="items-center h-full mt-2">
                        <Box className={`bg-card-${appliedTheme} p-2 rounded-full w-[80%] z-10`}>
                            <Box className={`flex flex-row justify-evenly`}>
                                <Box className="flex-col items-center text-center">
                                    <IC_Top_Up className="w-12 h-12"/>
                                    <Text className={`text-text-${appliedTheme} font-bold`}> Top up</Text>
                                </Box>
                                <Box className="p-2">
                                    <Box className={` border-s-[1px] border-divider-${appliedTheme} h-full justify-center  mx-2`} />
                                </Box>
                                <Box className="flex-col items-center text-center">
                                    <IC_Transaction className="w-12 h-12"/>
                                    <Text className={`text-text-${appliedTheme} font-bold`}> Transfer </Text>
                                </Box>
                                <Box className="p-2">
                                    <Box className={` border-s-[1px] border-divider-${appliedTheme} h-full justify-center  mx-2`} />
                                </Box>
                                <Box className="flex-col items-center text-center">
                                    <IC_History className="w-12 h-12"/>
                                    <Text className={`text-text-${appliedTheme} font-bold`}> History </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                </MyLinearGradient>
            <MyLinearGradient type="background" color={appliedTheme === 'dark' ? 'dark' : 'light-blue'}>
                <Box className={`p-4 bg-background-${appliedTheme} h-full`}>
                {/* Recommended Bundles Section */}
                <Box>
                    <Box className="flex-row items-center justify-between mt-10">
                        <Text className={`text-[22px] font-semibold text-text-${appliedTheme}`}>Recommended Bundles</Text>
                    </Box>
                    <Text className={`mt-2 mb-4 font-medium text-subText-${appliedTheme}`}>There are 4 recommended bundles</Text>
                    <ScrollView 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <Box className="flex-row gap-4">
                            <OptionCard>
                                <Box className="gap-1">
                                    <IC_BTCUSDT className="w-12 h-12" />
                                    <Text className={`text-text-${appliedTheme} font-medium text-[17px]`}>MAGA Bundle</Text>
                                    <Text className={`text-subText-${appliedTheme} font-medium text-[14px]`}>Past Month</Text>
                                    <Text className={`text-text-${appliedTheme} font-medium text-[17px]`}>+15%</Text>
                                </Box>
                            </OptionCard>
                            <OptionCard>
                                <Box className="gap-1">
                                    {appliedTheme === 'dark' ? 
                                        <IC_Tothor_Logo_Only_Bold className="w-12 h-12" /> :
                                        <IC_Tothor_Logo_Only className="w-12 h-12" />
                                    }
                                    <Text className={`text-text-${appliedTheme} font-medium text-[17px]`}>Tothor Bundle</Text>
                                    <Text className={`text-subText-${appliedTheme} font-medium text-[14px]`}>Past Month</Text>
                                    <Text className={`text-text-${appliedTheme} font-medium text-[17px]`}>+24%</Text>
                                </Box>
                            </OptionCard>
                            <OptionCard>
                                <Box className="gap-1">
                                    <IC_Gold className="w-12 h-12" />
                                    <Text className={`text-text-${appliedTheme} font-medium text-[17px]`}>Earth Bundle</Text>
                                    <Text className={`text-subText-${appliedTheme} font-medium text-[14px]`}>Past Month</Text>
                                    <Text className={`text-text-${appliedTheme} font-medium text-[17px]`}>+35%</Text>
                                </Box>
                            </OptionCard>
                            <OptionCard>
                                <Box className="gap-1">
                                    <IC_Doge className="w-12 h-12" />
                                    <Text className={`text-text-${appliedTheme} font-medium text-[17px]`}>DOGE Bundle</Text>
                                    <Text className={`text-subText-${appliedTheme} font-medium text-[14px]`}>Past Month</Text>
                                    <Text className={`text-text-${appliedTheme} font-medium text-[17px]`}>+4%</Text>
                                </Box>
                            </OptionCard>
                        </Box>
                    </ScrollView>
                </Box>
                    <Divider className={`bg-divider-${appliedTheme} mt-4`} />
                </Box>
            </MyLinearGradient>
        </ScrollView>
    );
};

export default HomeScreen;
