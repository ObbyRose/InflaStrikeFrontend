import { View, Text } from 'react-native'
import React from 'react'
import { Props } from 'types/NavigationTypes'

const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>SettingsScreen</Text>
    </View>
  )
}

export default SettingsScreen