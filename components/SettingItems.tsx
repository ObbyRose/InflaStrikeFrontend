import React from "react";
import { Text } from "react-native";
import { Box } from "@/components/ui/box";
import { Icon } from "@/components/ui/icon";
import { ChevronRight } from "lucide-react-native";

interface SettingItemProps {
    title: string;
    IconComponent: React.ElementType;
}

const SettingItem: React.FC<SettingItemProps> = ({ title, IconComponent }) => {
    return (
        <Box className="flex flex-row justify-between items-center">
            <Box className="flex-row items-center gap-3">
                <Box className="bg-[#F2F2F7] rounded-full p-2">
                    <IconComponent className="w-8 h-8" />
                </Box>
                <Text className="font-extrabold text-[14px]">{title}</Text>
            </Box>
            <Box>
                <Icon as={ChevronRight} />
            </Box>
        </Box>
    );
};

export default SettingItem;
