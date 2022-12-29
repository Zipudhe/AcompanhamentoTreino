import React, { FC } from 'react'
import { View, Text, NativeSyntheticEvent } from 'react-native'

import { SearchBar } from "../SearchBar"

import { navStyles } from "./style"

interface INavBar {
  inputHandler: (e: string) => void
}

export const NavBar: FC<INavBar> = ({ inputHandler }) => {

  return (
    <View style={navStyles.navBar} >
      <Text style={{ color: "white" }} > Menu </Text>  
      <SearchBar inputHandler={inputHandler} />
      <Text style={{ color: "white" }} > ProfileImage </Text>  
    </View>
  )
}