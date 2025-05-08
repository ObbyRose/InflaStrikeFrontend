import { useEffect, useRef } from "react";
import * as Network from "expo-network";
import { Toast, ToastDescription, ToastTitle, useToast } from "@/components/ui/toast";
import { VStack } from "@/components/ui/vstack";

export const useCheckInternet = () => {
    const toast = useToast();
    const wasOffline = useRef(false); // Tracks previous state

    useEffect(() => {
        const checkInternet = async () => {
            try {
                const network = await Network.getNetworkStateAsync();
                const isOffline = !network.isConnected || !network.isInternetReachable;

                if (isOffline && !wasOffline.current) {
                    wasOffline.current = true;
                    toast.show({
                        placement: "top",
                        duration: 6000,
                        render: ({ id }) => (
                            <Toast action="error" variant="solid" nativeID={id}>
                                <VStack space="xs">
                                    <ToastTitle>No Internet</ToastTitle>
                                    <ToastDescription>
                                        You're currently offline. Please check your connection.
                                    </ToastDescription>
                                </VStack>
                            </Toast>
                        ),
                    });
                }

                if (!isOffline && wasOffline.current) {
                    wasOffline.current = false;
                    toast.show({
                        placement: "top",
                        duration: 3000,
                        render: ({ id }) => (
                            <Toast action="success" variant="solid" nativeID={id}>
                                <VStack space="xs">
                                    <ToastTitle>Back Online</ToastTitle>
                                    <ToastDescription>
                                        Internet connection has been restored.
                                    </ToastDescription>
                                </VStack>
                            </Toast>
                        ),
                    });
                }
            } catch (error) {
                console.error("Error checking network state:", error);
            }
        };

        const interval = setInterval(checkInternet, 5000);
        checkInternet();

        return () => clearInterval(interval);
    }, []);
};
