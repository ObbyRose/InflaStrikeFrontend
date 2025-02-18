import { Box } from '@/components/ui/box';
import { View, Text, StatusBar, requireNativeComponent, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { Divider } from '@/components/ui/divider';
import { Image } from '@/components/ui/image';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { useState } from 'react';
import { Icon } from '@/components/ui/icon';
import { BellRing, MessageSquareText, Settings, UserRoundPen } from 'lucide-react-native';

interface LayoutProps {
    children: any
}

const Layout = ({ children }: LayoutProps) => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const [currentScreen, setCurrentScreen ] = useState("Home");

    function navigateToScreen(screen: string) {
        setCurrentScreen(screen);
        navigation.navigate(screen)
    }

    return (
        <View className="flex-1 bg-white">
            {/* Set Status Bar */}
            <StatusBar barStyle="light-content" backgroundColor="gray" />

            {/* Top Section */}
            <Box 
                style={{ paddingTop: insets.top }} 
                className="flex flex-row justify-between items-center h-[60px] bg-blue-900 px-4"
            >
                <Box className='flex flex-row items-center gap-3'>
                    <Text className="text-lg font-bold text-gray-100">NLV: $234,654</Text>
                </Box>

                <Box className='flex flex-row gap-3 items-end'>
                    <TouchableOpacity onPress={() => navigateToScreen('Chat')}>
                        <Icon as={MessageSquareText} size={"xl"} 
                        color={currentScreen === "Chat" ? "lightblue": "white"}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateToScreen('Notifications')}>
                        <Icon as={BellRing} size={'xl'} 
                        color={currentScreen === "Notifications" ? "lightblue": "white"}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateToScreen('Profile')}>
                        <Icon as={UserRoundPen}size={'xl'} 
                        color={currentScreen === "Profile" ? "lightblue": "white"}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateToScreen('Settings')}>
                        <Icon as={Settings} size={'xl'} 
                        color={currentScreen === "Settings" ? "lightblue": "white"}/>
                    </TouchableOpacity>
                </Box>
            </Box>
            <Divider className='h-[1.5px] bg-white w-[100%] mx-auto'/>

            {/* Main Rendered Screens */}
            <View className="flex-1">{children}</View>

            {/* Bottom Navigation */}
            <Divider className='h-[1.5px] bg-white w-[100%] mx-auto'/>
            <Box className="flex flex-row justify-evenly h-[60px] bg-blue-900 p-4">
                <TouchableOpacity onPress={() => navigateToScreen('Savings')}>
                    <MaterialCommunityIcons name="wallet" size={30}
                    color={currentScreen === "Savings" ? "lightblue": "white"}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('Transactions')}>
                    <MaterialCommunityIcons name="finance" size={30}
                    color={currentScreen === "Transactions" ? "lightblue": "white"}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('Home')}>
                    <AntDesign name="home" size={30}
                    color={currentScreen === "Home" ? "lightblue": "white"}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('Investment')}>
                    <Octicons name="graph" size={30}
                    color={currentScreen === "Investment" ? "lightblue": "white"}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('Token')}>
                    <MaterialIcons name="compare-arrows" size={30}
                    color={currentScreen === "Token" ? "lightblue": "white"}/>
                </TouchableOpacity>
            </Box>
        </View>
    );
};

export default Layout;
