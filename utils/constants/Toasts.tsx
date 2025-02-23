import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box } from "@/components/ui/box";
import { CloseIcon, Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { Toast } from "@/components/ui/toast";
import { Pressable } from "react-native";
import { useToast } from "@/components/ui/toast";
import { IC_Mail } from "./Icons";

type ToastMessageProps = {
    id: string;
    toast: ReturnType<typeof useToast>;
    appliedTheme: string;
};

const ToastMessage: React.FC<ToastMessageProps> = ({ id, toast, appliedTheme }) => {
    const insets = useSafeAreaInsets();

    return (
    <Toast
        nativeID={id}
        className="relative p-6 gap-3 w-full bg-background-0 shadow-hard-4 flex-row mt-16"
        style={{ top: insets.top + 10 }}
    >
        <Pressable className="absolute top-3 right-3" onPress={() => toast.close(id)}>
            <Icon as={CloseIcon} className="stroke-background-500" />
        </Pressable>
        <IC_Mail className="w-16 h-16 mr-2" />
        <Box className='gap-1'>
            <Text size="lg" className="text-typography-950 font-semibold">
                Success
            </Text>
            <Text size="sm" className={`text-gray-${appliedTheme}`}>
                Email has been sent to your inbox
            </Text>
        </Box>
    </Toast>
    );
};

// Function to show the toast
export const showNewToast = (toast: ReturnType<typeof useToast>, toastId: string, appliedTheme: string) => {
    toast.show({
        id: toastId,
        placement: "top",
        render: ({ id }) => <ToastMessage id={id} toast={toast} appliedTheme={appliedTheme} />,
    });
};