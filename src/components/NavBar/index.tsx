import React, { FC } from 'react'
import { View, Text } from 'react-native'

import { SearchBar } from "../SearchBar"
import { ProfileButton } from "../ProfileButton"

import { navStyles } from "./style"

interface INavBar {
  inputHandler: (e: string) => void
}

export const NavBar: FC<INavBar> = ({ inputHandler }) => {

  return (
    <View style={navStyles.navBar} >
      <Text style={{ color: "white" }} > Menu </Text>  
      <SearchBar inputHandler={inputHandler} />
      <ProfileButton />
    </View>
  )
}