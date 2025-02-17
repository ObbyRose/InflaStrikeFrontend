import { Box } from '@/components/ui/box';
import { View, Text, StatusBar, requireNativeComponent } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { Divider } from '@/components/ui/divider';
import { Image } from '@/components/ui/image';

interface LayoutProps {
    children: any
}

const Layout = ({ children }: LayoutProps) => {
    const insets = useSafeAreaInsets();

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
                    <MaterialCommunityIcons name="chat-outline" size={24} />
                    <Ionicons name="notifications-outline" size={24} />
                    <MaterialCommunityIcons name="account" size={24} />
                    <Ionicons name="settings-outline" size={24} />
                </Box>
            </Box>
            <Divider className='h-[1.5px] bg-black w-[95%] mx-auto'/>

            {/* Main Rendered Screens */}
            <View className="flex-1">{children}</View>

            {/* Bottom Section */}
            <Divider className='h-[1.5px] bg-black w-[95%] mx-auto'/>
            <Box className="flex flex-row justify-evenly h-[60px] bg-white p-4">
                <MaterialCommunityIcons name="sign-direction" size={30}/>
                <MaterialCommunityIcons name="finance" size={30}/>
                <AntDesign name="home" size={30}/>
                <Octicons name="graph" size={30} color="black" />
                <MaterialIcons name="compare-arrows" size={30} color="black" />
            </Box>
        </View>
    );
};

export default Layout;
