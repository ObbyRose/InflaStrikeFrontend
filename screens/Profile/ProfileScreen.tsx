import BackHeader from '@/components/BackHeader';
import MyLinearGradient from '@/components/gradient/MyLinearGradient';
import SettingItem from '@/components/SettingItems';
import ThingToDo from '@/components/ThingToDo';
import { Avatar, AvatarBadge, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Box } from '@/components/ui/box';
import { Divider } from '@/components/ui/divider';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Props } from '@/types/NavigationTypes';
import {
  IC_Arrow_Right,
  IC_Bell_V2,
  IC_Budget,
  IC_Card_V2,
  IC_Invite,
  IC_Logout_V2,
  IC_Piggy_Bank,
  IC_Profile_V2,
  IC_Setting,
  IC_Settings,
  IC_Subscription,
  IC_ThemeSettings,
} from '@/utils/constants/Icons';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Alert, ScrollView, TouchableOpacity, View } from 'react-native';

interface ProfileScreenProps extends Props {}

export default function ProfileScreen({ navigation }: ProfileScreenProps) {
  const { appliedTheme } = useTheme();
  const user = {
    name: 'John Abraham',
    username: '$dylanrobinson',
    image:
      'https://static.wikia.nocookie.net/spongebob-dictionary/images/0/04/Plankton.jpg/revision/latest?cb=20170910011333',
  };
  const thingToDo = [
    {
      icon: IC_Card_V2,
      header: 'Verify your identity #1',
      description: 'Take a government ID & selfie photo to get verified ',
      actionText: 'Verify now',
      actionFunction: () => {},
    },
    {
      icon: IC_Profile_V2,
      header: 'Verify your identity #2',
      description: 'Take a government ID & selfie photo to get verified',
      actionText: 'Verify now',
      actionFunction: () => {},
    },
    {
      icon: IC_Bell_V2,
      header: 'Verify your identity #3',
      description: 'Take a government ID & selfie photo to get verified',
      actionText: 'Verify now',
      actionFunction: () => {},
    },
  ];
  
  return (
    <ScrollView>
      <Box className='h-full'>
        <MyLinearGradient type='background' color={appliedTheme === 'dark' ? 'blue' : 'purple'} className='h-[40%]'>
          <BackHeader />
          <Box className='justify-center items-center gap-2 p-4'>
            <Avatar size="xl">
              <AvatarFallbackText>{user.name}</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: user.image,
                }}
                />
            </Avatar> 
            <Text className={`text-[24px] font-bold text-white`}>{user.name}</Text>
            <Text className={`text-[14px] text-white`}>{user.username}</Text>
            <Box className='z-10'>
              <ThingToDo thingToDo={thingToDo} />
            </Box>
          </Box>
        </MyLinearGradient>

        <MyLinearGradient type='background' color={appliedTheme === 'dark' ? 'dark' : 'light-blue'} className='h-full'>
            <Box className='gap-4 p-4 justify-center'>
                <Box className='p-8'></Box>
              <Box className={`bg-card-${appliedTheme} p-2 rounded-xl`}>
                <Text className={` text-[18px] font-bold text-text-${appliedTheme} `}>More features</Text>
                <SettingItem title="Saving Goals" IconComponent={IC_Piggy_Bank} badge="+Start" />
                <Divider />

                <SettingItem title="Budgets" IconComponent={IC_Budget} />
                <Divider />

                <SettingItem title="Bundles" IconComponent={IC_Subscription} />
              </Box>

              {/* setting and invite friends box */}
              <Box className={`bg-card-${appliedTheme} p-2 rounded-xl`}>
                {/* invite new friends box */}
                <SettingItem title="Invite Friends" IconComponent={IC_Invite} badge="Earn $250" />
                <Divider />
                {/* setting box */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('SettingsStack', { screen: 'Settings' })}>
                  <SettingItem title="Settings" IconComponent={IC_Setting} />
                </TouchableOpacity>
              </Box>

              <Box className={`bg-card-${appliedTheme} p-2 rounded-xl`}>
                <SettingItem title="Logout" IconComponent={IC_Logout_V2} />
              </Box>

            </Box>
        </MyLinearGradient>
      </Box>
    </ScrollView>
  );
}
