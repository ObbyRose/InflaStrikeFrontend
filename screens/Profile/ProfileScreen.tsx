import BackHeader from '@/components/BackHeader';
import MyLinearGradient from '@/components/gradient/MyLinearGradient';
import SettingItem from '@/components/SettingItems';
import ThingToDo from '@/components/ThingToDo';
import TothorCards from '@/components/TothorCards';
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Box } from '@/components/ui/box';
import { Divider } from '@/components/ui/divider';
import { Text } from '@/components/ui/text';
import { useUserStore } from '@/context/userStore';
import { Props } from '@/types/NavigationTypes';
import {
  IC_Bell_V2,
  IC_Budget,
  IC_Card_V2,
  IC_Invite,
  IC_Logout_V2,
  IC_Piggy_Bank,
  IC_Profile_V2,
  IC_Setting,
  IC_Subscription,
} from '@/utils/constants/Icons';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import { ScrollView, TouchableOpacity, View } from 'react-native';

interface ProfileScreenProps extends Props {}

export default function ProfileScreen({ navigation }: ProfileScreenProps) {
  const { appliedTheme } = useTheme();
  const { user } = useUserStore()

  const thingToDo = [
    {
      icon: IC_Card_V2,
      header: 'Verify your identity #1',
      description: 'Take a government ID & selfie photo to get verified ',
      actionText: 'Verify now',
      actionFunction: () => { navigation.navigate("VerifyIdentity")},
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
          <Box className='justify-center items-center gap-2 p-2'>
            <Avatar size="xl">
              <AvatarFallbackText>{user?.fName + ' ' + user?.lName}</AvatarFallbackText>
              <AvatarImage source={{uri: user?.avatar}} />
            </Avatar> 
            <Text className={`text-[24px] font-bold text-white`}>{user?.fName + ' ' + user?.lName}</Text>
            <Text className={`text-[14px] text-white`}>{user?.email}</Text>
            <Box className='z-10'>
              <ThingToDo thingToDo={thingToDo} />
            </Box>
          </Box>
        </MyLinearGradient>

        <MyLinearGradient type='background' color={appliedTheme === 'dark' ? 'dark' : 'light-blue'} className='h-full'>
            <Box className='gap-4 p-4 justify-center'>
                <Box className='p-5'></Box>
              <TothorCards>
                <SettingItem title="Saving Goals" IconComponent={IC_Piggy_Bank} badge="+Start" />
                <Divider />

                <SettingItem title="Budgets" IconComponent={IC_Budget} />
                <Divider />

                <SettingItem title="Bundles" IconComponent={IC_Subscription} />
              </TothorCards>

              {/* setting and invite friends box */}
              <TothorCards>
                {/* invite new friends box */}
                <SettingItem title="Invite Friends" IconComponent={IC_Invite} badge="Earn $250" />
                <Divider />
                {/* setting box */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('SettingsStack', { screen: 'Settings' })}>
                  <SettingItem title="Settings" IconComponent={IC_Setting} />
                </TouchableOpacity>
              </TothorCards>

              <TothorCards>
                <SettingItem title="Logout" IconComponent={IC_Logout_V2} />
              </TothorCards>
            </Box>
        </MyLinearGradient>
      </Box>
    </ScrollView>
  );
}
