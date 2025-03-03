import MyLinearGradient from '@/components/gradient/MyLinearGradient';
import ThingToDo from '@/components/ThingToDo';
import { Avatar, AvatarBadge, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Alert, ScrollView, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  const { appliedTheme } = useTheme();
  const navigation = useNavigation();
  const user = {
    name: 'John Abraham',
    username: '$dylanrobinson',
    image:
      'https://static.wikia.nocookie.net/spongebob-dictionary/images/0/04/Plankton.jpg/revision/latest?cb=20170910011333',
  };
  const thingToDo = [
    {
      icon: '',
      header: 'Verify your identity #1',
      description: 'Take a government ID & selfie photo to get verified',
      actionText: 'Verify now',
      actionFunction: () => {},
    },
    {
      icon: '',
      header: 'Verify your identity #2',
      description: 'Take a government ID & selfie photo to get verified',
      actionText: 'Verify now',
      actionFunction: () => {},
    },
    {
      icon: '',
      header: 'Verify your identity #3',
      description: 'Take a government ID & selfie photo to get verified',
      actionText: 'Verify now',
      actionFunction: () => {},
    },
  ];

  // const iconsColor = appliedTheme === 'dark' ? '#fff' : '#000';
  const iconsColor = '#fff';
  return (
    <Box className={`bg-card-${appliedTheme}`}>
      <MyLinearGradient type="background" color="blue">
        <Box className="flex h-[375px] items-center  p-4">
          {/* back and setting box */}
          <Box className="flex w-full flex-row justify-between">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={30} color={`${iconsColor}`} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('a function will be added soon')}>
              {/* <Text className={`text-[30px] text-iconGeneral-${appliedTheme}`}> */}
              <Text className={`text-[30px] text-[white]`}>•••</Text>
            </TouchableOpacity>
          </Box>

          {/* avatar, name and username box*/}
          <Box className="flex w-full items-center justify-center gap-4">
            <Avatar size="2xl">
              <AvatarFallbackText>{user.name}</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: user.image,
                }}
              />
            </Avatar>
            <Text className={`text-text-${appliedTheme} text-[24px] font-bold`}>{user.name}</Text>
            <Text className={`text-subText-${appliedTheme} text-[15px] font-medium`}>
              {user.username}
            </Text>
          </Box>
        </Box>
      </MyLinearGradient>

      {/* things to do component */}
      <Box className="absolute top-[55%] z-50 flex h-fit w-full items-center justify-center">
        <ThingToDo thingToDo={thingToDo} />
      </Box>

      <ScrollView className={`bg-card-${appliedTheme} mt-[75px] w-full `}>
        {/* more features box */}
        <Box></Box>

        {/* setting and invite friends box */}
        <Box></Box>
      </ScrollView>
    </Box>
  );
}
