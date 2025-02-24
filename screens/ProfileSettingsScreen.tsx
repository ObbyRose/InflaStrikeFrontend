import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Box } from '@/components/ui/box'
import SettingItem from '@/components/SettingItems'
import { Divider } from '@/components/ui/divider'
import { IC_CreditCard, IC_Envelope, IC_Phone } from '@/utils/constants/Icons'
import { Props } from '@/types/NavigationTypes'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import { Button } from '@/components/ui/button'
import { Clipboard } from 'react-native';

const ProfileSettingsScreen: React.FC<Props> = ({ navigation }) => {
    const { appliedTheme } = useTheme();

    return (
        <Box className={`p-4 h-full bg-background-${appliedTheme}`}>
            <Box className='flex gap-2 mb-6 p-4 bg-[#F2F2F7] rounded-2xl'>
                <Text className='text-xl font-bold mt-4'>Profile Token</Text>
                <Text className='text-[#828A99] text-[12px] mb-2'>8219F492-3FF3-401C-A2C9-FEB4C9E736ED</Text>
                <Box className='w-[20%] self-end'>
                    <Button className={`bg-button-${appliedTheme}`} onPress={() => Clipboard.setString('8219F492-3FF3-401C-A2C9-FEB4C9E736ED')}>
                        <Text className='text-white font-semibold text-[12px]'> Copy </Text>
                    </Button>
                </Box>
            </Box>
            <TouchableOpacity onPress={() => navigation.navigate("Payment")} activeOpacity={0.7}>
                <SettingItem title="Payment methods" IconComponent={IC_CreditCard} />
            </TouchableOpacity>
            <Divider className="rounded-lg mb-4 mt-4" />
            
            <TouchableOpacity onPress={() => navigation.navigate("PaymentMethod")} activeOpacity={0.7}>
                <SettingItem title="Phone number" IconComponent={IC_Phone} />
            </TouchableOpacity>
            <Divider className="rounded-lg mb-4 mt-4" />

            <TouchableOpacity onPress={() => navigation.navigate("PhoneView")} activeOpacity={0.7}>
                <SettingItem title="Email" IconComponent={IC_Envelope} />
            </TouchableOpacity>
            <Divider className="rounded-lg mb-4 mt-4" />
        </Box>
    )
}

export default ProfileSettingsScreen