import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Props } from 'types/NavigationTypes'
import { Box } from '@/components/ui/box'
import OutlinedCard from '@/components/OutlinedCard'
import { Input, InputField } from '@/components/ui/input'
import { Button, ButtonText } from '@/components/ui/button'
import CountryPhoneInput from '@/components/profile/CountryPhoneInput'

const dummyData = {
  fullName: "",
  status: "Unverified",
  phoneNumber: "",
  
}

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const [data, setData] = useState(dummyData);

  const updateField = (field: string, value: string) => {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <Box className='h-full justify-evenly p-5 gap-7'>
      {/* Profile */}
      <OutlinedCard title="Profile" className='gap-4'>
        {/* Full Name */}
        <Box className='gap-2'>
          <Text className="font-semibold text-lg">Full Name</Text>
          <Input className=" border-gray-500 rounded-lg">
            <InputField
              value={data.fullName}
              onChangeText={(text) => updateField("fullName", text)}
              placeholder="e.g John Doe ..."
              placeholderTextColor="gray"
              className="text-black text-base"
            />
          </Input>
        </Box>

        {/* Phone Number */}
        <CountryPhoneInput phoneNumber={data.phoneNumber} updateField={updateField}/>

        {/* Status */}
        <Box className="flex flex-row justify-between space-x-4">
          <Box className="flex-1">
            <Text>
              Status:
              <Text className={`font-semibold ${data.status === "Unverified" ? "text-red-500" : "text-green-600"}`}>
                {"  " + data.status}
              </Text>
            </Text>
          </Box>

          {/* KYC Process Button */}
          <Box className="flex-1">
            <Text className="text-blue-600 underline text-right">Begin my KYC process</Text>
          </Box>
        </Box>
      </OutlinedCard>



      {/* Account */}
      <OutlinedCard title='Account' className='p-8'>
        <Box className='flex-row justify-between'>
          <Button variant='rounded' action='secondary'>
            <ButtonText className='text-black'>Log Out</ButtonText>
          </Button>
          <Button variant='rounded' action='secondary'>
            <ButtonText className='text-black'>Delete Account</ButtonText>
          </Button>
        </Box>

      </OutlinedCard>
    </Box>
  )
}

export default ProfileScreen