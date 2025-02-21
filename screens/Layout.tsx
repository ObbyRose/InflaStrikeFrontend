import { Box } from '@/components/ui/box';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useState } from 'react';
import { Icon } from '@/components/ui/icon';
import { BellRing, MessageSquareText, Settings, UserRoundPen } from 'lucide-react-native';
import { useTheme } from '@/utils/Themes/ThemeProvider';

interface LayoutProps {
    children: React.ReactNode;
    navigation: NavigationProp<ParamListBase>;
}

const Layout = ({ children, navigation }: LayoutProps) => {
    const { appliedTheme } = useTheme();
    const insets = useSafeAreaInsets();
    const [currentScreen, setCurrentScreen ] = useState("Home");

    function navigateToScreen(screen: string) {
        setCurrentScreen(screen);
        navigation.navigate("MainApp", { screen });
    }

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Set Status Bar */}
            <StatusBar barStyle="light-content" backgroundColor="gray" />

            {/* Top Section */}
            <Box 
                style={{ paddingTop: insets.top }} 
                className={`flex flex-row justify-between items-center h-[60px] bg-layoutTop-${appliedTheme} px-4`}
            >
                <Box className='flex flex-row items-center gap-3'>
                    <Text className={`text-lg font-bold ${appliedTheme === 'light' ? 'text-white' : 'text-white'}`}>NLV: $234,654</Text>
                </Box>

                <Box className='flex flex-row gap-3 items-end'>
                    <TouchableOpacity onPress={() => navigateToScreen('Chat')}>
                        <Icon as={MessageSquareText} size={"xl"} 
                        className={currentScreen === "Chat" ? `text-iconTopActive-${appliedTheme}`: `text-iconTop-${appliedTheme}`}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateToScreen('Notifications')}>
                        <Icon as={BellRing} size={'xl'} 
                        className={currentScreen === "Notifications" ? `text-iconTopActive-${appliedTheme}`: `text-iconTop-${appliedTheme}`}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateToScreen('Profile')}>
                        <Icon as={UserRoundPen}size={'xl'} 
                        className={currentScreen === "Profile" ? `text-iconTopActive-${appliedTheme}`: `text-iconTop-${appliedTheme}`}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateToScreen('Settings')}>
                        <Icon as={Settings} size={'xl'} 
                        className={currentScreen === "Settings" ? `text-iconTopActive-${appliedTheme}`: `text-iconTop-${appliedTheme}`}/>
                    </TouchableOpacity>
                </Box>
            </Box>

            {/* Main Rendered Screens */}
            <View className="flex-1">{children}</View>

            <Box className={`flex flex-row justify-evenly h-[60px] bg-layoutBottom-${appliedTheme} p-4`}>
                <TouchableOpacity onPress={() => navigateToScreen('Savings')}>
                    <MaterialCommunityIcons name="wallet" size={30}
                    color={currentScreen === "Savings" ? (appliedTheme === "light" ? "#002ba1" : "#608afc") : (appliedTheme === "light" ? "#474747" : "#d9d9d9")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('Transactions')}>
                    <MaterialCommunityIcons name="finance" size={30}
                    color={currentScreen === "Transactions" ? (appliedTheme === "light" ? "#002ba1" : "#608afc") : (appliedTheme === "light" ? "#474747" : "#d9d9d9")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('Home')}>
                    <AntDesign name="home" size={30}
                    color={currentScreen === "Home" ? (appliedTheme === "light" ? "#002ba1" : "#608afc") : (appliedTheme === "light" ? "#474747" : "#d9d9d9")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('Investment')}>
                    <Octicons name="graph" size={30}
                    color={currentScreen === "Investment" ? (appliedTheme === "light" ? "#002ba1" : "#608afc") : (appliedTheme === "light" ? "#474747" : "#d9d9d9")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('Token')}>
                    <MaterialIcons name="compare-arrows" size={30}
                    color={currentScreen === "Token" ? (appliedTheme === "light" ? "#002ba1" : "#608afc") : (appliedTheme === "light" ? "#474747" : "#d9d9d9")}/>
                </TouchableOpacity>
            </Box>
        </SafeAreaView>
    );
};

export default Layout;
