import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Props } from 'types/NavigationTypes';

import OutlinedCard from '@/components/OutlinedCard';
import { Input, InputField } from '@/components/ui/input';
import { Button, ButtonText } from '@/components/ui/button';
import CountryPhoneInput from '@/components/profile/CountryPhoneInput';
import Entypo from '@expo/vector-icons/Entypo';
import { Image } from '@/components/ui/image';
import ProfileHeader from '@/components/profile/ProfileHeader';
import BasicProfilePage from './BasicProfilePage';
import EditProfilePage from './EditProfilePage';
import BackHeader from '@/components/BackHeader';
import { Box } from '@/components/ui/box';
import { useTheme } from '@/utils/Themes/ThemeProvider';

const dummyUser = {
  fullName: 'Tony Stark',
  gender: 'Male',
  yearOfJoining: 2021,
  image:
    'https://static.wikia.nocookie.net/cartooncharacters/images/2/2e/Ima.jpeg/revision/latest/thumbnail/width/360/height/360?cb=20101125044842',
  email: 'coinspace@mail.com',
  password: 'baba',
  phoneNumber: '1234567890',
  // phoneNumber: {
  //   prefix: '+91',
  //   number: '1234567890',
  // },
};

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(dummyUser);
  const { appliedTheme } = useTheme();
  function updateUser(updates: Partial<typeof user>) {
    setUser((prevUser) => ({ ...prevUser, ...updates }));
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <EditProfilePage
      user={user}
      setUser={setUser}
      setIsEditing={setIsEditing}
      updateUser={updateUser}
      />
    );
  }
  return (
    <Box className={` p-4 bg-background-${appliedTheme} h-full`}>
      <BackHeader title='Edit Profile' />
      <BasicProfilePage user={user} setIsEditing={setIsEditing} />
    </Box>
  );
};

export default ProfileScreen;
