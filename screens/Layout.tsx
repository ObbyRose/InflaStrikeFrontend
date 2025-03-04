import { Box } from '@/components/ui/box';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useState } from 'react';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import Svg, { Defs, G, Path, Rect, Filter, FeOffset, FeGaussianBlur, FeMerge, FeMergeNode } from 'react-native-svg';
import { IC_Home, IC_Invest, IC_Market, IC_Portfolio, IC_Profile } from '@/utils/constants/Icons';

interface LayoutProps {
    children: React.ReactNode;
    navigation: NavigationProp<ParamListBase>;
}

const Layout = ({ children, navigation }: LayoutProps) => {
    const { appliedTheme } = useTheme();
    const insets = useSafeAreaInsets();
    const [currentScreen, setCurrentScreen] = useState("Home");

    function navigateToScreen(screen: string) {
        setCurrentScreen(screen);
        navigation.navigate("MainApp", { screen });
    }

    const shadowStyle = {
        shadowColor: 'rgba(0,0,0,1)', 
        shadowOffset: { width: 0, height: -15 }, 
        shadowOpacity: 1, 
        shadowRadius: 23, 
        elevation: 10, 
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            {/* Status Bar */}
            <StatusBar barStyle="light-content" backgroundColor="#e8ebf5" />

            {/* Main Rendered Screens */}
            <View style={{ flex: 1 }}>{children}</View>

            {/* Bottom Navigation Bar */}
            <Box className="relative">
                <Svg
                    width={100}
                    height={60}
                    viewBox="0 0 100 60"
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: -60,
                        marginLeft: -50,
                    }}
                >
                    {/* Define Shadow Filter */}
                    <Defs>
                        <Filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                            <FeOffset dx="0" dy="2" result="offset" />
                            <FeGaussianBlur stdDeviation="6" result="blur" />
                            <FeMerge>
                                <FeMergeNode in="blur" />
                                <FeMergeNode in="SourceGraphic" />
                            </FeMerge>
                        </Filter>
                    </Defs>

                    {/* Shadow Effect */}
                    <G filter="url(#shadow)">
                        <Path
                            d="M2 60 C40 25, 60 25, 98 60 V80 H2 Z"
                            fill="black"
                            opacity={0.2}
                        />
                    </G>

                    {/* Main SVG Path */}
                    <Path
                        d="M2 60 C40 25, 60 25, 98 60 V80 H2 Z"
                        fill="white"
                    />
                </Svg>

                <Box
                    className={`flex flex-row items-center h-[62px] bg-layoutBottom-${appliedTheme} p-4`}
                    style={shadowStyle}
                >
                    {/* Left Icons Container */}
                    <Box className="flex-1 flex flex-row justify-evenly">
                        <TouchableOpacity onPress={() => navigateToScreen('Home')}>
                            <Box className='flex-col items-center text-center'>
                                <IC_Home className='w-7 h-7 mb-1' color={currentScreen === 'Home' ? `#4A3EF6` : '#B0B9C1'} />
                                <Text className={`text-sm ${currentScreen === 'Home' ? 'text-[#1761C5]' : 'text-[#5C616F]'}`}>Home</Text>
                            </Box>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigateToScreen('Portfolio')}>
                            <Box className='flex-col items-center text-center'>
                                <IC_Portfolio className='w-7 h-7 mb-1' color={currentScreen === 'Portfolio' ? `#4A3EF6` : '#B0B9C1'} />
                                <Text className={`text-sm ${currentScreen === 'Portfolio' ? 'text-[#1761C5]' : 'text-[#5C616F]'}`}>Portfolio</Text>
                            </Box>
                        </TouchableOpacity>
                    </Box>

                    {/* Middle Button - Centered and Independent */}
                    <Box className="w-20 relative">
                        <TouchableOpacity onPress={() => navigateToScreen('Markets')}>
                            <Box className={`bg-button-${appliedTheme} bottom-[18px] rounded-full w-16 h-16 items-center self-center justify-center`}>
                                <IC_Market color={`white`} />
                            </Box>
                            <Text className={`text-sm bottom-4 justify-center text-center ${currentScreen === 'Markets' ? 'text-[#1761C5]' : 'text-[#5C616F]'}`}> Markets </Text>
                        </TouchableOpacity>
                    </Box>

                    {/* Right Icons Container */}
                    <Box className="flex-1 flex flex-row justify-evenly">
                        <TouchableOpacity onPress={() => navigateToScreen('Investment')}>
                            <Box className='flex-col items-center text-center'>
                                <IC_Invest className='w-8 h-8' color={currentScreen === 'Investment' ? `#4A3EF6` : '#B0B9C1'} />
                                <Text className={`text-sm ${currentScreen === 'Investment' ? 'text-[#1761C5]' : 'text-[#5C616F]'}`}>Investment</Text>
                            </Box>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigateToScreen('Profile')}>
                            <Box className='flex-col items-center text-center'>
                                <IC_Profile className='w-8 h-8' color={currentScreen === 'Profile' ? `#4A3EF6` : '#B0B9C1'} />
                                <Text className={`text-sm ${currentScreen === 'Profile' ? 'text-[#1761C5]' : 'text-[#5C616F]'}`}>Profile</Text>
                            </Box>
                        </TouchableOpacity>
                    </Box>
                </Box>
            </Box>

            {/* Bottom Safe Area (Android Navigation Bar) */}
            <View
                style={{
                    height: insets.bottom, 
                    backgroundColor: "#4A3EF6",
                }}
            />
        </SafeAreaView>
    );
};

export default Layout;
