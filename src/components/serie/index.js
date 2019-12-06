import React from 'react'
import { View, Text } from 'react-native'

export default function Serie ({ name, thumbnail }) {
  return (
    <View>
      <Text> {name}</Text>
      <Text> {thumbnail['path']}</Text>
    </View>
  )
}
