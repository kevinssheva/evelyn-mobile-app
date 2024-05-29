import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View>
      <TouchableOpacity className="px-4 py-2 bg-red-600 rounded-md" onPress={() => alert('Profile')}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile