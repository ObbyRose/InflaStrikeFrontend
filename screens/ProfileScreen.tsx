import { View, Text } from 'react-native'
import React from 'react'
import { Props } from 'types/NavigationTypes'

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen