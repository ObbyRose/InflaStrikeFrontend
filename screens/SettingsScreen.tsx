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
import { countryLanguages } from "../utils/constants/countries"; // Importing language list

// Import Gluestack Actionsheet Components
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
import { Text } from "@/components/ui/text";
import { Icon } from "@/components/ui/icon";

const SettingsScreen: React.FC<Props> = ({ navigation }) => {
    const { appliedTheme } = useTheme();
    const [selectedLanguage, setSelectedLanguage] = useState("English"); // Default language
    const [isOpen, setIsOpen] = useState(false);

    // Function to open and close ActionSheet
    const openLanguageSelection = () => setIsOpen(true);
    const closeLanguageSelection = () => setIsOpen(false);

    return (
        <Box className={`p-4 h-full bg-background-${appliedTheme}`}>
            <TouchableOpacity onPress={() => navigation.navigate("DisplaySettings")}>
                <SettingItem title="Display" IconComponent={IC_DisplaySetting} />
            </TouchableOpacity>
            <Divider className="rounded-lg mb-4 mt-4" />

            {/* Gluestack ActionSheet on Language Setting */}
            <TouchableOpacity onPress={openLanguageSelection}>
                <SettingItem title={`Language (${selectedLanguage})`} IconComponent={IC_LanguageSetting} />
            </TouchableOpacity>
            <Divider className="rounded-lg mb-4 mt-4" />

            <SettingItem title="Night Mode" IconComponent={IC_ThemeSettings} />
            <Divider className="rounded-lg mb-4 mt-4" />

            <TouchableOpacity onPress={() => navigation.navigate("NotificationSettings")}>
                <SettingItem title="Notification Settings" IconComponent={IC_NotificationSettings} />
            </TouchableOpacity>
            <Divider className="rounded-lg mb-4 mt-4" />

            <TouchableOpacity onPress={() => navigation.navigate("UserPreferences")}>
                <SettingItem title="Preferences" IconComponent={IC_UserPreferencesSettings} />
            </TouchableOpacity>
            <Divider className="rounded-lg mb-4 mt-4" />

            {/* Gluestack Actionsheet Component */}
            <Actionsheet isOpen={isOpen} onClose={closeLanguageSelection}>
                <ActionsheetBackdrop />
                <ActionsheetContent>
                    <ActionsheetDragIndicatorWrapper>
                        <ActionsheetDragIndicator />
                    </ActionsheetDragIndicatorWrapper>

                    {/* Language Selection List */}
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
        </Box>
    );
};

export default SettingsScreen;
