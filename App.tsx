import React, { useState } from 'react';

import { WireFrame } from "./src/components/Wireframe"
import { NavBar } from "./src/components/NavBar"
import { NativeSyntheticEvent, TextInputChangeEventData, Text } from 'react-native';

export default function App() {
  const [search, setSearch] = useState('')

  const inputHandler = (text: string) => {
    setSearch(text)
    return
  }

  return (
    <WireFrame>
      <NavBar inputHandler={inputHandler} />
    </WireFrame>
  );
}
