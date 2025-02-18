import React from "react";
import { Text } from "react-native";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Clock, AlertCircle } from "lucide-react-native";
import { Box } from "@/components/ui/box";

interface NotificationCardProps {
    title: string;
    message: string;
    timeAgo: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
    title,
    message,
    timeAgo,
}) => {
    return (
        <Box className="p-4 bg-white rounded-lg shadow-md flex-row items-start space-x-3">
            <Icon as={Clock} size="lg" color="black" className="mt-1" />
            <Box className="flex-1">
                <Text className="text-base font-semibold">{title}</Text>
                <Text className="text-sm text-gray-600">{message}</Text>
            </Box>
            <HStack space="sm" className="items-center">
                <Icon as={AlertCircle} size="lg" color="black" />
                <Text className="text-xs text-gray-400">{timeAgo}</Text>
            </HStack>
        </Box>
    );
};

export default NotificationCard;