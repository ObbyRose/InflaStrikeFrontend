import { Box } from '@/components/ui/box';
import { View, Text, StatusBar, requireNativeComponent, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { Divider } from '@/components/ui/divider';
import { Image } from '@/components/ui/image';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { useState } from 'react';

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
                className="flex flex-row justify-between items-center h-[60px] bg-white px-4"
            >
                <Box className='flex flex-row items-center gap-3'>
                    <Image 
                        source={require('./../assets/images/inflaStrikeIcon.jpg')}
                        className='h-14 w-14'
                        resizeMode="contain"
                        alt='logo'
                    />
                    <Text className="text-lg font-bold">NLV: $234,654</Text>
                </Box>

                <Box className='flex flex-row gap-1 items-end'>
                    <TouchableOpacity onPress={() => navigateToScreen('Notification')}>
                        <MaterialCommunityIcons name="chat-outline" size={24} 
                        color={currentScreen === "Notification" ? "blue": ""}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateToScreen('Notification')}>
                        <Ionicons name="notifications-outline" size={24} 
                        color={currentScreen === "Notification" ? "blue": ""}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateToScreen('Profile')}>
                        <MaterialCommunityIcons name="account" size={24} 
                        color={currentScreen === "Profile" ? "blue": ""}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateToScreen('Settings')}>
                        <Ionicons name="settings-outline" size={24} 
                        color={currentScreen === "Settings" ? "blue": ""}/>
                    </TouchableOpacity>
                </Box>
            </Box>
            <Divider className='h-[1.5px] bg-black w-[95%] mx-auto'/>

            {/* Main Rendered Screens */}
            <View className="flex-1">{children}</View>

            {/* Bottom Navigation */}
            <Divider className='h-[1.5px] bg-black w-[95%] mx-auto'/>
            <Box className="flex flex-row justify-evenly h-[60px] bg-white p-4">
                <TouchableOpacity onPress={() => navigateToScreen('Savings')}>
                    <MaterialCommunityIcons name="sign-direction" size={30}
                    color={currentScreen === "Savings" ? "blue": ""}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('Transactions')}>
                    <MaterialCommunityIcons name="finance" size={30}
                    color={currentScreen === "Transactions" ? "blue": ""}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('Home')}>
                    <AntDesign name="home" size={30}
                    color={currentScreen === "Home" ? "blue": ""}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('Investment')}>
                    <Octicons name="graph" size={30}
                    color={currentScreen === "Investment" ? "blue": ""}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('Token')}>
                    <MaterialIcons name="compare-arrows" size={30}
                    color={currentScreen === "Token" ? "blue": ""}/>
                </TouchableOpacity>
            </Box>
        </View>
    );
};

export default Layout;
