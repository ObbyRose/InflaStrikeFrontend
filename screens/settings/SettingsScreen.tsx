import React, { useState } from 'react';
import { Box } from '@/components/ui/box';
import { Divider } from '@/components/ui/divider';
import SettingItem from '../../components/SettingItems';
import {
  IC_ArrowLeft,
  IC_Bell_V2,
  IC_Card_V2,
  IC_DisplaySetting,
  IC_Envelope,
  IC_FaceID_V2,
  IC_Help_V2,
  IC_LanguageSetting,
  IC_Logout_V2,
  IC_NotificationSettings,
  IC_Password_V2,
  IC_PIN_V2,
  IC_Privacy_V2,
  IC_Profile,
  IC_Profile_V2,
  IC_ProfileSettings,
  IC_Security,
  IC_Terms_V2,
  IC_ThemeSettings,
  IC_UserPreferencesSettings,
} from '@/utils/constants/Icons';
import { Props } from '@/types/NavigationTypes';
import { ScrollView, TouchableOpacity } from 'react-native';

import BackHeader from '@/components/BackHeader';
import MyLinearGradient from '@/components/gradient/MyLinearGradient';
import { Text } from '@/components/ui/text';
import PurpleSwitch from '@/components/PurpleSwitch';
import CardUpRounded from '@/components/CardUpRounded';
import { useTheme } from '@/utils/Themes/ThemeProvider';

const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  const { appliedTheme, setTheme } = useTheme();
  const [isFaceIDEnabled, setIsFaceIDEnabled] = useState(false);

  return (
    <Box className="h-full">
        <MyLinearGradient type="background" color={appliedTheme === 'dark' ? 'blue' : 'purple'} className='h-[25%]'>
            <BackHeader />
            <Box className="h-[45%] justify-end p-4">
          <Text className={`text-[24px] font-bold text-white`}>Settings</Text>
            </Box>
        </MyLinearGradient>

        {/* <ScrollView className={`relative flex h-full w-full gap-3  bg-transparent`}> */}
              <CardUpRounded className='p-0'>
          <ScrollView bounces={false}>
              {/* Personal setting  */}
              <Box className={`flex gap-2 bg-card-${appliedTheme} mb-2 w-full rounded-t-3xl  p-4`}>
                <Text className={`text-text-${appliedTheme} flex text-[18px] font-bold`}>
                  Personal Setting
                </Text>
                {/* start of set theme */}
                <TouchableOpacity
                  onPress={() => setTheme(appliedTheme === 'dark' ? 'light' : 'dark')}>
                  <SettingItem
                  title="Toggle Theme"
                  IconComponent={IC_ThemeSettings}
                  badge={appliedTheme}
                  />
                </TouchableOpacity>
                <Divider />
                <SettingItem title="Personal Information" IconComponent={IC_Profile_V2} />
                <Divider />
                <TouchableOpacity onPress={() => navigation.navigate('PaymentMethod')}>
                  <SettingItem title="Bank & Cards" IconComponent={IC_Card_V2} />
                </TouchableOpacity>
                <Divider />
                <SettingItem title="Notifications" IconComponent={IC_Bell_V2} />
              </Box>

              {/* Security */}
              <Box className={`flex gap-2 bg-card-${appliedTheme} my-2 w-full p-4`}>
                <Text className={`text-text-${appliedTheme} flex text-[18px] font-bold`}>
                  Security
                </Text>
                <Box className="flex flex-row items-center">
                  <Box className="flex-1 flex-row items-center gap-3">
                    <Box className="rounded-full p-2">
                      <IC_FaceID_V2 className="h-12 w-12" />
                    </Box>
                    <Text className={`text-text-${appliedTheme} text-[17px] font-medium`}>
                      Use face ID to sign in
                    </Text>
                  </Box>
                  <Box className="ml-auto"></Box>
                  <PurpleSwitch
                    value={isFaceIDEnabled}
                    onValueChange={(value) => setIsFaceIDEnabled(value)}
                  />
                </Box>
                <Divider />
                <SettingItem title="Change Password" IconComponent={IC_Password_V2} />
                <Divider />
                <TouchableOpacity onPress={() => navigation.navigate('PinSettings')}>
                  <SettingItem title="Change PIN" IconComponent={IC_PIN_V2} />
                </TouchableOpacity>
              </Box>

              {/* Support */}
              <Box className={`flex gap-2 bg-card-${appliedTheme} my-2 w-full p-4`}>
                <Text className={`text-text-${appliedTheme} flex text-[18px] font-bold`}>
                  Support
                </Text>
                <SettingItem title="Terms & Conditions" IconComponent={IC_Terms_V2} />
                <Divider />

                <SettingItem title="Privacy Policy" IconComponent={IC_Privacy_V2} />
                <Divider />

                <SettingItem title="Help" IconComponent={IC_Help_V2} />
              </Box>

              {/* Logout */}
              <Box className={`flex gap-2 bg-card-${appliedTheme} mt-2 w-full p-4`}>
                <Box className="flex flex-row items-center">
                  <Box className="flex-1 flex-row items-center gap-3">
                    <Box className="rounded-full p-2">
                      <IC_Logout_V2 className="h-12 w-12" />
                    </Box>
                    <Text className={`text-text-${appliedTheme} text-[17px] font-medium`}>
                      Logout
                    </Text>
                  </Box>
                  <Box className="ml-auto"></Box>
                </Box>
              </Box>
          </ScrollView>
          </CardUpRounded>
    </Box>
  );
};

export default SettingsScreen;
