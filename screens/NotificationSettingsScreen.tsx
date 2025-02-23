import React, { useState } from "react";
import { Box } from "@/components/ui/box";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import { Switch } from "@/components/ui/switch";
import { Text } from "@/components/ui/text";
import { Divider } from "@/components/ui/divider";
import { TouchableOpacity } from "react-native";
import { Icon } from "@/components/ui/icon";
import { ChevronRight, Check } from "lucide-react-native";

import {
    Actionsheet,
    ActionsheetContent,
    ActionsheetDragIndicator,
    ActionsheetDragIndicatorWrapper,
    ActionsheetBackdrop,
    ActionsheetItem,
    ActionsheetItemText,
} from "@/components/ui/actionsheet";

const NotificationSettings: React.FC = () => {
    const { appliedTheme } = useTheme();
    const [isPushEnabled, setIsPushEnabled] = useState(true);
    const [isActionSheetOpen, setIsActionSheetOpen] = useState(false);
    const [selectedNotification, setSelectedNotification] = useState<string | null>(null);
    
    // Notification Categories
    const [notificationSettings, setNotificationSettings] = useState<{ [key: string]: string[] }>({
        "Security alerts": ["Push", "Email", "SMS", "In-app"],
        "Account activity": ["Push", "Email", "In-app"],
        "Price alerts": ["Push", "In-app", "Email"],
        "News": ["In-app"],
    });

    const notificationMethods = ["Push", "Email", "SMS", "In-app"];

    const openActionSheet = (category: string) => {
        setSelectedNotification(category);
        setIsActionSheetOpen(true);
    };

    const toggleSelection = (method: string) => {
        if (selectedNotification) {
            setNotificationSettings((prevSettings) => {
                const currentMethods = prevSettings[selectedNotification];
                const updatedMethods = currentMethods.includes(method)
                    ? currentMethods.filter((item) => item !== method)
                    : [...currentMethods, method];

                return { ...prevSettings, [selectedNotification]: updatedMethods };
            });
        }
    };

        return (
        <Box className={`p-4 h-full bg-background-${appliedTheme}`}>
            {/* Push Notifications Section */}
            <Text className="text-gray-500 font-bold text-[16px]">Push Notifications</Text>
            <Box className="flex-row justify-between items-center">
                <Text className="text-black font-semibold text-md">Turn On / Off</Text>
                <Switch 
                    value={isPushEnabled} 
                    onValueChange={setIsPushEnabled} 
                    trackColor={{ false: 'gray', true: `#4A3EF6` }} 
                    thumbColor={`white`}
                />
            </Box>
            <Divider className="rounded-lg mb-4" />

            {/* Customize Notifications Section */}
            <Text className="text-gray-500 font-bold text-[16px]">Customize Notifications</Text>
            {Object.keys(notificationSettings).map((category, index) => (
                <React.Fragment key={index}>
                    <TouchableOpacity className="flex-row justify-between items-center py-3"
                        onPress={() => openActionSheet(category)}>
                        <Box>
                            <Text className="text-black font-semibold text-md">{category}</Text>
                            <Text className="text-gray-400 text-sm">{notificationSettings[category].join(", ")}</Text>
                        </Box>
                        <Icon as={ChevronRight} />
                    </TouchableOpacity>
                    <Divider className="rounded-lg mb-4" />
                </React.Fragment>
            ))}

            {/* Actionsheet Section */}
            <Actionsheet isOpen={isActionSheetOpen} onClose={() => setIsActionSheetOpen(false)}>
                <ActionsheetBackdrop />
                <ActionsheetContent>
                    <ActionsheetDragIndicatorWrapper>
                        <ActionsheetDragIndicator />
                    </ActionsheetDragIndicatorWrapper>
                    <Text className="text-lg font-semibold px-4 mb-2">
                        {selectedNotification}
                    </Text>

                    {notificationMethods.map((method, index) => (
                        <ActionsheetItem key={index} onPress={() => toggleSelection(method)}
                            className="p-4 flex-row justify-between items-center">
                            <ActionsheetItemText className="text-md font-bold text-black">{method}</ActionsheetItemText>
                            {selectedNotification && notificationSettings[selectedNotification].includes(method) && (
                                <Icon as={Check} className="text-indigo-600" />
                            )}
                        </ActionsheetItem>
                    ))}
                </ActionsheetContent>
            </Actionsheet>
        </Box>
    );
};

export default NotificationSettings;
