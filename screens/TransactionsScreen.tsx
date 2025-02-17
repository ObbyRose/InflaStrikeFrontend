import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Props } from 'types/NavigationTypes'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'

const TransactionsScreen: React.FC<Props> = ({ navigation })=> {
  const [activeButton, setActiveButton] = useState('fiat'); 

  const handlePress = (button: string) => {
    setActiveButton(button);
  };

  return (
    <Box className='bg-white h-full p-5'>
      {/* Top Buttons */}
      <Box className='flex flex-row items-center justify-center h-[100px]'>
        <TouchableOpacity
          className={`px-4 py-2 rounded-l-lg border-[1.5px] border-black ${
            activeButton === 'fiat' ? 'bg-[#94baf0] text-white' : 'bg-white text-gray-700'
          } items-center justify-center`}
          onPress={() => handlePress('fiat')}
          activeOpacity={0.75}
        >
          <Text className={`font-medium ${activeButton === 'fiat' ? 'text-white' : 'text-gray-700'}`}>
            FIAT
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`px-4 py-2 rounded-r-lg border-r-[1.5px] border-b-[1.5px] border-t-[1.5px] border-black ${
            activeButton === 'crypto' ? 'bg-[#94baf0] text-white' : 'bg-white text-gray-700'
          }  items-center justify-center`}
          onPress={() => handlePress('crypto')}
        >
          <Text className={`font-medium ${activeButton === 'crypto' ? 'text-white' : 'text-gray-700'}`}>
            CRYPTO
          </Text>
        </TouchableOpacity>
      </Box>

      {/* Deposit Withdrawal Buttons */}
      <Box className='flex flex-row justify-between'>
        <Button variant='rounded' className='bg-[#009d21]'>
          <Text className='text-white'>+ Deposit</Text>
        </Button>
        <Button variant='rounded' className='bg-[#c92f2d]'>
          <Text className='text-white'>- Withdrawal</Text>
        </Button>

      </Box>
    </Box>
  )
}

export default TransactionsScreen