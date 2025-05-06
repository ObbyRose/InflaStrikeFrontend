    import { useEffect } from "react";
    import * as Network from "expo-network";
import { Toast, ToastDescription, ToastTitle, useToast } from "@/components/ui/toast";
import { VStack } from "@/components/ui/vstack";

    export const useCheckInternet = () => {
    const toast = useToast();

    useEffect(() => {
        const checkInternet = async () => {
        const network = await Network.getNetworkStateAsync();
        if (!network.isConnected || !network.isInternetReachable) {
            toast.show({
            placement: "top",
            duration: 3000,
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
        };

        checkInternet();
    }, []);
    };
