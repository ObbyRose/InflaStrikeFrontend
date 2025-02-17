import { View, Text } from 'react-native'
import React from 'react'
import { Props } from 'types/NavigationTypes'

const TransactionsScreen: React.FC<Props> = ({ navigation })=> {
  return (
    <View>
      <Text>TransactionsScreen</Text>
    </View>
  )
}

export default TransactionsScreen