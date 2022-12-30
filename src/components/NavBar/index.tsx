import React, { FC } from 'react'
import { View, Text } from 'react-native'

import { SearchBar } from "../SearchBar"
import { ProfileButton } from "../ProfileButton"
import { MeuButton } from "../Menu"

import { navStyles } from "./style"

interface INavBar {
  inputHandler: (e: string) => void
}

export const NavBar: FC<INavBar> = ({ inputHandler }) => {

  return (
    <View style={navStyles.navBar} >
      <MeuButton />
      <SearchBar inputHandler={inputHandler} />
      <ProfileButton />
    </View>
  )
}