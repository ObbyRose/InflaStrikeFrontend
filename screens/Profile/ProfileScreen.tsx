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
import { Alert, ScrollView, TouchableOpacity } from 'react-native';

interface ProfileScreenProps extends Props {}

export default function ProfileScreen({ navigation }: ProfileScreenProps) {
  const { appliedTheme } = useTheme();
  // const appliedTheme = 'dark';
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
      description: 'Take a government ID & selfie photo to get verified',
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
    <Box className="mb-[210px] h-full">
      <MyLinearGradient type="background" color="blue">
        <Box className="flex h-[50%] items-center  p-4">
          {/* back and setting box */}
          <Box className="flex w-full flex-row justify-between">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={30} color={`white`} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('a function will be added soon')}>
              {/* <Text className={`text-[30px] text-iconGeneral-${appliedTheme}`}> */}
              <Text className={`text-[30px] text-[white]`}>•••</Text>
            </TouchableOpacity>
          </Box>

          {/* avatar, name and username box*/}
          <Box className="flex w-full items-center justify-center gap-4  p-6">
            <Avatar size="2xl">
              <AvatarFallbackText>{user.name}</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: user.image,
                }}
              />
            </Avatar>
            <Text className={`text-[24px] font-bold text-white`}>{user.name}</Text>
            <Text className={`text-[15px] font-medium text-[#f6f7f8]`}>{user.username}</Text>
          </Box>
        </Box>
      </MyLinearGradient>

      <ScrollView className={`mt-[60px] w-full p-2`}>
        {/* more features box */}
        <Box className={`bg-card-${appliedTheme} m-2 rounded-xl p-2`}>
          <Text className={` text-[18px] font-bold text-text-${appliedTheme} `}>More features</Text>
          <SettingItem title="Saving Goals" IconComponent={IC_Piggy_Bank} badge="+Start" />
          <Divider />

          <SettingItem title="Budgets" IconComponent={IC_Budget} />
          <Divider />

          <SettingItem title="Bundles" IconComponent={IC_Subscription} />
        </Box>

        {/* setting and invite friends box */}
        <Box className={`bg-card-${appliedTheme} m-2 gap-4 rounded-xl p-2`}>
          {/* invite new friends box */}
          <SettingItem title="Invite Friends" IconComponent={IC_Invite} badge="Earn $250" />
          <Divider />
          {/* setting box */}
          <TouchableOpacity
            onPress={() => navigation.navigate('SettingsStack', { screen: 'Settings' })}>
            <SettingItem title="Setting" IconComponent={IC_Setting} />
          </TouchableOpacity>
        </Box>
      </ScrollView>

      {/* things to do component */}
      <Box className="absolute top-[33%] z-50 flex h-fit w-full items-center justify-center">
        <ThingToDo thingToDo={thingToDo} />
      </Box>
    </Box>
  );
}
