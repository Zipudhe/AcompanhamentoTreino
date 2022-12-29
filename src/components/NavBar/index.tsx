import React, { FC } from 'react'
import { View, Text } from 'react-native'

import { NavStyles } from "./style"

export const NavBar: FC = () => {

  return (
    <View style={NavStyles.navBar} >
      <Text style={{ color: "white" }} > Menu </Text>  
      <Text style={{ color: "white" }} > Search bar </Text>  
      <Text style={{ color: "white" }} > ProfileImage </Text>  
    </View>
  )
}