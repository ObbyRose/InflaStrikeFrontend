import PasswordVisibilityChangeButton from '@/components/PasswordVisibilityChangeButton';
import ProfileHeader from '@/components/profile/ProfileHeader';
import { Button } from '@/components/ui/button';
import passwordConvertor from '@/utils/functions/passwordConvertor';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, View } from 'react-native';

interface BasicProfilePageProps {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  user: {
    fullName: string;
    gender: string;
    yearOfJoining: number;
    image: string;
    email: string;
    password: string;
    phoneNumber: string;
    // phoneNumber: {
    //   prefix: string;
    //   number: string;
    // };
  };
}

export default function BasicProfilePage({ setIsEditing, user }: BasicProfilePageProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <>
      <Button
        className="absolute right-4 top-4 w-fit rounded-full bg-transparent"
        onPress={() => setIsEditing(true)}>
        <Entypo name="edit" size={24} color="black" />
      </Button>

      <View className="flex h-full w-full items-start justify-around p-4">
        <ProfileHeader
          fullName={user.fullName}
          gender={user.gender}
          image={user.image}
          yearOfJoining={user.yearOfJoining}
        />
        {/* Name field */}
        <View className="flex w-full gap-2 border-b border-gray-200 p-2">
          <Text className="text-gray-500">Your name</Text>
          <Text className="text-[24px] font-bold">{user.fullName}</Text>
        </View>

        {/* Email field */}
        <View className="flex w-full gap-2 border-b border-gray-200 p-2">
          <Text className="text-gray-500">Email address</Text>
          <Text className="text-[24px] font-bold">{user.email}</Text>
        </View>

        {/* Password field */}
        <View className="flex w-full gap-2 border-b border-gray-200 p-2">
          <Text className="text-gray-500">Your password</Text>
          <View className="flex w-full flex-row justify-between">
            <Text className="text-[24px] font-bold">
              {isPasswordVisible ? user.password : passwordConvertor(user.password)}
            </Text>
            <PasswordVisibilityChangeButton
              isPasswordVisible={isPasswordVisible}
              setIsPasswordVisible={setIsPasswordVisible}
            />
          </View>
        </View>

        {/* Phone field */}
        <View className="flex w-full gap-2 border-b border-gray-200 p-2">
          <Text className="text-gray-500">Phone number</Text>
          <View className="flex flex-row gap-2">
            {/* <Text className="text-[24px] font-bold">{user.phoneNumber.prefix}</Text> */}
            {/* <Text className="text-[24px] font-bold">{user.phoneNumber.number}</Text> */}
            <Text className="text-[24px] font-bold">{user.phoneNumber}</Text>
          </View>
        </View>
      </View>
    </>
  );
}
