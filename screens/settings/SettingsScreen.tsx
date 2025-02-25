import React, { useState } from "react";
import { Box } from "@/components/ui/box";
import { Divider } from "@/components/ui/divider";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import SettingItem from "../../components/SettingItems";
import {
    IC_DisplaySetting,
    IC_Envelope,
    IC_LanguageSetting,
    IC_NotificationSettings,
    IC_ProfileSettings,
    IC_Security,
    IC_ThemeSettings,
    IC_UserPreferencesSettings
} from "@/utils/constants/Icons";
import { Props } from "@/types/NavigationTypes";
import { TouchableOpacity } from "react-native";
import { countryLanguages } from "../../utils/constants/countries";

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
import { Check } from "lucide-react-native";
import { Icon } from "@/components/ui/icon";
import BackHeader from "@/components/BackHeader";

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
          <BackHeader title="Settings" />
            <TouchableOpacity onPress={() => navigation.navigate("ProfileSettings")} activeOpacity={0.7}>
                <SettingItem title="Profile Settings" IconComponent={IC_ProfileSettings} />
            </TouchableOpacity>
            <Divider className="rounded-lg mb-4 mt-4" />

            {/* Gluestack ActionSheet on Language Setting */}
            <TouchableOpacity onPress={openLanguageSelection} activeOpacity={0.7}>
                <SettingItem title={`Language (${selectedLanguage})`} IconComponent={IC_LanguageSetting} />
            </TouchableOpacity>
            <Divider className="rounded-lg mb-4 mt-4" />

            <TouchableOpacity onPress={openThemeSelection} activeOpacity={0.7}>
                <SettingItem title="Themes" IconComponent={IC_ThemeSettings} />
            </TouchableOpacity>
            <Divider className="rounded-lg mb-4 mt-4" />

            <TouchableOpacity onPress={() => navigation.navigate("NotificationSettings")} activeOpacity={0.7}>
                <SettingItem title="Notification Settings" IconComponent={IC_NotificationSettings} />
            </TouchableOpacity>
            <Divider className="rounded-lg mb-4 mt-4" />

            <TouchableOpacity onPress={() => navigation.navigate("Preferences")} activeOpacity={0.7}>
                <SettingItem title="User Preferences" IconComponent={IC_UserPreferencesSettings} />
            </TouchableOpacity>
            <Divider className="rounded-lg mb-4 mt-4" />

            <TouchableOpacity onPress={() => navigation.navigate("SecuritySettings")} activeOpacity={0.7}>
                <SettingItem title="Security" IconComponent={IC_Security} />
            </TouchableOpacity>
            <Divider className="rounded-lg mb-4 mt-4" />

            <TouchableOpacity onPress={() => navigation.navigate("Support")} activeOpacity={0.7}>
                <SettingItem title="Contact Support" IconComponent={IC_Envelope} />
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
                              className="p-4 flex-row justify-between items-center"
                            >
                              <ActionsheetItemText className="font-bold text-[14px] text-black">
                                {country.label} {country.language}
                              </ActionsheetItemText>
                              {selectedLanguage === country.language && <Icon as={Check} className="text-indigo-600" />}
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
                          className="p-4 flex-row justify-between items-center"
                        >
                          <ActionsheetItemText className={`font-bold text-[14px]`}>
                            ☀️ Light Mode
                          </ActionsheetItemText>
                          {appliedTheme === "light" && <Icon as={Check} className="text-indigo-600" />}
                        </ActionsheetItem>

                        <ActionsheetItem
                          onPress={() => toggleTheme("dark")}
                          className="p-4 flex-row justify-between items-center"
                        >
                          <ActionsheetItemText className={`font-bold text-[14px]`}>
                            🌙 Dark Mode
                          </ActionsheetItemText>
                          {appliedTheme === "dark" && <Icon as={Check} className="text-indigo-600" />}
                        </ActionsheetItem>
                    </ActionsheetScrollView>
                </ActionsheetContent>
            </Actionsheet>
        </Box>
    );
};

export default SettingsScreen;
