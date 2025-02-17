import { View, Text } from 'react-native'
import React from 'react'
import { Props } from 'types/NavigationTypes'
import { Box } from '@/components/ui/box'

const TransactionsScreen: React.FC<Props> = ({ navigation })=> {
  return (
    <Box className='bg-white h-full'>

      <Box className='h-[100px] bg-gray-400'>
        
      </Box>
      <Text>TransactionsScreen</Text>
    </Box>
  )
}

export default TransactionsScreen