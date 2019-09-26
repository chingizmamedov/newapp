import React from 'react'
import { View, Text, Dimensions } from 'react-native'

const width = Dimensions.get('window')

const Header = () => {
  return (
    <View style={{
      width: width,
      height: 20
    }}>
    </View>
  )
}

export default Header
