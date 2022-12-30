import React, { useState } from 'react';

import { WireFrame } from "./src/components/Wireframe"
import { NavBar } from "./src/components/NavBar"
import { Card } from "./src/components/Card"

export default function App() {
  const [search, setSearch] = useState('')

  const inputHandler = (text: string) => {
    setSearch(text)
    return
  }

  return (
    <WireFrame>
      <NavBar inputHandler={inputHandler} />
      <Card exerciseName='Nome do Exercicio' defaultRepetitions={'10'} defaultWeight={'30'} />
      <Card exerciseName='Nome do Exercicio' defaultRepetitions={'10'} defaultWeight={'30'} />
    </WireFrame>
  );
}
