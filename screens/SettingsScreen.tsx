import React, { useState } from "react";
import { Box } from "@/components/ui/box";
import { Divider } from "@/components/ui/divider";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import SettingItem from "../components/SettingItems";
import {
    IC_DisplaySetting,
    IC_LanguageSetting,
    IC_NotificationSettings,
    IC_ThemeSettings,
    IC_UserPreferencesSettings
} from "@/utils/constants/Icons";
import { Props } from "@/types/NavigationTypes";
import { TouchableOpacity } from "react-native";
import { countryLanguages } from "../utils/constants/countries";

import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetBackdrop,
  ActionsheetScrollView,
  ActionsheetItem,
  ActionsheetItemText,
} from "@/components/ui/actionsheet"

const SettingsScreen: React.FC<Props> = ({ navigation }) => {
    const { appliedTheme, setTheme } = useTheme();
    const [selectedLanguage, setSelectedLanguage] = useState("English");
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [isThemeOpen, setIsThemeOpen] = useState(false);

    // Open & Close Actionsheet
    const openLanguageSelection = () => setIsLanguageOpen(true);
    const closeLanguageSelection = () => setIsLanguageOpen(false);
    const openThemeSelection = () => setIsThemeOpen(true);
    const closeThemeSelection = () => setIsThemeOpen(false);

    // Function to switch themes
    const toggleTheme = (theme: "light" | "dark") => {
        setTheme(theme);
        closeThemeSelection();
    };

    return (
        <Box className={`p-4 h-full bg-background-${appliedTheme}`}>
            <TouchableOpacity onPress={() => navigation.navigate("DisplaySettings")} activeOpacity={0.7}>
                <SettingItem title="Display" IconComponent={IC_DisplaySetting} />
            </TouchableOpacity>
            <Divider className="rounded-lg mb-4 mt-4" />

            {/* Gluestack ActionSheet on Language Setting */}
            <TouchableOpacity onPress={openLanguageSelection} activeOpacity={0.7}>
                <SettingItem title={`Language (${selectedLanguage})`} IconComponent={IC_LanguageSetting} />
            </TouchableOpacity>
            <Divider className="rounded-lg mb-4 mt-4" />

            {/* Night Mode Settings */}
            <TouchableOpacity onPress={openThemeSelection} activeOpacity={0.7}>
                <SettingItem title="Themes" IconComponent={IC_ThemeSettings} />
            </TouchableOpacity>
            <Divider className="rounded-lg mb-4 mt-4" />

            <TouchableOpacity onPress={() => navigation.navigate("NotificationSettings")} activeOpacity={0.7}>
                <SettingItem title="Notification Settings" IconComponent={IC_NotificationSettings} />
            </TouchableOpacity>
            <Divider className="rounded-lg mb-4 mt-4" />

            <TouchableOpacity onPress={() => navigation.navigate("UserPreferences")} activeOpacity={0.7}>
                <SettingItem title="Preferences" IconComponent={IC_UserPreferencesSettings} />
            </TouchableOpacity>
            <Divider className="rounded-lg mb-4 mt-4" />

            {/* Gluestack Actionsheet for Language Selection */}
            <Actionsheet isOpen={isLanguageOpen} onClose={closeLanguageSelection}>
                <ActionsheetBackdrop />
                <ActionsheetContent>
                    <ActionsheetDragIndicatorWrapper>
                        <ActionsheetDragIndicator />
                    </ActionsheetDragIndicatorWrapper>
                    <ActionsheetScrollView className="mt-2">
                        {countryLanguages.map((country, index) => (
                            <ActionsheetItem
                                key={index}
                                onPress={() => {
                                    setSelectedLanguage(country.language);
                                    closeLanguageSelection();
                                }}
                                className={`p-4 ${
                                    selectedLanguage === country.language ? `bg-button-${appliedTheme} text-white rounded-lg` : ""
                                }`}
                            >
                                <ActionsheetItemText className={`font-bold text-[14px] text-black ${
                                    selectedLanguage === country.language ? "text-white" : ""
                                }`}>{country.label} {country.language}</ActionsheetItemText>
                            </ActionsheetItem>
                        ))}
                    </ActionsheetScrollView>
                </ActionsheetContent>
            </Actionsheet>

            {/* Gluestack Actionsheet for Theme Selection */}
            <Actionsheet isOpen={isThemeOpen} onClose={closeThemeSelection}>
                <ActionsheetBackdrop />
                <ActionsheetContent>
                    <ActionsheetDragIndicatorWrapper>
                        <ActionsheetDragIndicator />
                    </ActionsheetDragIndicatorWrapper>
                    <ActionsheetScrollView className="mt-2">
                        <ActionsheetItem
                            onPress={() => toggleTheme("light")}
                            className={`p-4 ${
                                appliedTheme === "light" ? "bg-button-light text-white rounded-lg" : ""
                            }`}
                        >
                            <ActionsheetItemText className={`font-bold text-[14px] ${
                                appliedTheme === "light" ? "text-white" : "text-black"
                            }`}>
                                ☀️ Light Mode
                            </ActionsheetItemText>
                        </ActionsheetItem>

                        <ActionsheetItem
                            onPress={() => toggleTheme("dark")}
                            className={`p-4 ${
                                appliedTheme === "dark" ? "bg-button-dark text-white rounded-lg" : ""
                            }`}
                        >
                            <ActionsheetItemText className={`font-bold text-[14px] ${
                                appliedTheme === "dark" ? "text-white" : "text-black"
                            }`}>
                                🌙 Dark Mode
                            </ActionsheetItemText>
                        </ActionsheetItem>
                    </ActionsheetScrollView>
                </ActionsheetContent>
            </Actionsheet>
        </Box>
    );
};

export default SettingsScreen;
