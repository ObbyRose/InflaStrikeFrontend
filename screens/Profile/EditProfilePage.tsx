import PasswordVisibilityChangeButton from '@/components/PasswordVisibilityChangeButton';
import CountryPhoneInput from '@/components/profile/CountryPhoneInput';
import { Button, ButtonText } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { Input, InputField } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { getIconByString } from '@/utils/constants/Icons';
import passwordConvertor from '@/utils/functions/passwordConvertor';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import { View } from 'react-native';

interface EditProfilePageProps {
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
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  updateUser(
    updates: Partial<{
      fullName: string;
      gender: string;
      yearOfJoining: number;
      image: string;
      email: string;
      password: string;
      phoneNumber: string;
    }>
  ): void;
  setUser: React.Dispatch<
    React.SetStateAction<{
      fullName: string;
      gender: string;
      yearOfJoining: number;
      image: string;
      email: string;
      password: string;
      phoneNumber: string;
      //   phoneNumber: {
      //     prefix: string;
      //     number: string;
      //   };
    }>
  >;
}

export default function EditProfilePage({
  user,
  setUser,
  setIsEditing,
  updateUser,
}: EditProfilePageProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [fullName, setFullName] = useState(user.fullName);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  const updateField = (field: string, value: string) => {
    setUser((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const IconComponent = getIconByString('IC_ArrowLeft');

  function handleSubmitNewUser() {
    updateUser({ email, fullName, phoneNumber });
  }

  return (
    <View className="flex h-full w-full items-start justify-around p-4">
      <View>
        <Button className="bg-transparent" onPress={() => setIsEditing(false)}>
          {IconComponent && <IconComponent />}
        </Button>
      </View>
      <View className="w-full">
        <View className="self-center">
          <Image source={{ uri: user.image }} className="h-[150px] w-[150px] rounded-full" />
          <Entypo
            name="edit"
            size={15}
            className="absolute bottom-1 right-1 rounded-full border border-black bg-white p-3 text-primary-500"
          />
        </View>
        {/* Name field */}
        <View className="flex w-full gap-2 border-b border-gray-200 p-2">
          <Text className="text-gray-500">Your name</Text>
          <Input className=" w-full rounded-lg border-gray-500">
            <InputField
              value={fullName}
              onChangeText={(text) => setFullName(text)}
              placeholder="e.g John Doe ..."
              placeholderTextColor="gray"
              className="text-base font-bold text-black"
            />
          </Input>
        </View>
        {/* Email field */}
        <View className="flex w-full gap-2 border-b border-gray-200 p-2">
          <Text className="text-gray-500">Email address</Text>
          <Input className=" w-full rounded-lg border-gray-500">
            <InputField
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="e.g john.doe@email.com ..."
              placeholderTextColor="gray"
              className="text-base font-bold text-black"
            />
          </Input>
        </View>
        {/* Password field */}
        {/* <View className="flex w-full gap-2 border-b border-gray-200 p-2">
            <Text className="text-gray-500">Your password</Text>
            <Input className=" flex w-full justify-between rounded-lg border-gray-500">
              <InputField
                type={isPasswordVisible ? 'text' : 'password'}
                value={user.password}
                onChangeText={(text) => updateField('password', text)}
                placeholderTextColor="gray"
                className="text-base font-bold text-black"
              />
              <PasswordVisibilityChangeButton
                isPasswordVisible={isPasswordVisible}
                setIsPasswordVisible={setIsPasswordVisible}
              />
            </Input>
          </View> */}
        {/* Phone field */}
        <View className="flex w-full gap-2 border-b border-gray-200 p-2">
          <Text className="text-gray-500">Phone number</Text>
          {/* <CountryPhoneInput phoneNumber={user.phoneNumber.number} updateField={updateField} /> */}
          <CountryPhoneInput phoneNumber={phoneNumber} updateField={setPhoneNumber} />
        </View>
        <Button className="w-[95%] rounded-2xl bg-[#0066FF]">
          <ButtonText onPress={handleSubmitNewUser} className="self-center">
            Save
          </ButtonText>
        </Button>
      </View>
    </View>
  );
}
