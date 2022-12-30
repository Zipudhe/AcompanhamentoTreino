import React, { FC, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import { InputNumber } from "../InputNumber"
import { Button } from "../Button"

interface ICard {
  exerciseName: string,
  defaultWeight: string,
  defaultRepetitions: string
}

const icon = require("../../../assets/standing-10.png")


export const Card: FC<ICard> = ({ exerciseName, defaultWeight, defaultRepetitions }) => {

  const [weight, setWeight] = useState(defaultWeight)
  const [repetition, setRepetition] = useState(defaultRepetitions)
  const [viewType, setViewType] = useState('default')

  if(viewType == "history") {
      return (
        <View style={CardStyles.wrapper} >
          <Text> History view </Text>
        </View>
      )
  }

  if(viewType == "update") {
    return (
      <View style={CardStyles.wrapper} >
        <Text> Insert view </Text>
      </View>
    )
}

  return (
    <View style={CardStyles.wrapper} >
      <View style={CardStyles.info} >
        <View style={CardStyles.imgView} >
          <Image style={CardStyles.image} resizeMode="contain"  source={icon} />
        </View>
        <View style={CardStyles.details} >
          <Text style={CardStyles.title} > { exerciseName } </Text>
          <View style={CardStyles.inputsView} >
            <InputNumber 
              label="Peso" 
              placeholder='Digite o peso' 
              inputHandler={setWeight}
              value={weight}
              />
            <InputNumber 
              label="Repeticoes" 
              placeholder='Digite as repeticoes' 
              inputHandler={setRepetition}
              value={repetition}
              />
          </View>
        </View>
      </View>
      <View style={CardStyles.buttonsView} >
        <Button onPress={() => setViewType("history")} style={CardStyles.button} > 
          <Text style={ CardStyles.buttonText } > Histórico </Text>
        </Button>
        <Button onPress={() => setViewType("update")} style={CardStyles.button} > 
          <Text style={ CardStyles.buttonText } > Atualizar </Text>
        </Button>
      </View>
    </View>
  )
}


const CardStyles = StyleSheet.create({
  wrapper: {
    marginTop: 26,
    height: "33%",
    maxHeight: 270,
    width: "80%",
    maxWidth: 400,
    borderRadius: 20,
    backgroundColor: "#D2122E",
    paddingHorizontal: 18,
    paddingBottom: 20,
    paddingTop: 12
  },
  info: {
    height: "70%",
    flexDirection: 'row'
  },
  imgView: {
    width: "40%",
    maxWidth: "40%",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  image: {
    width: 135,
    height: 135,
    backgroundColor: "#EDEDED",
    borderRadius: 20,
  },
  details: {
    width: "50%",
    flex: 1,
    alignItems: 'center'
  },
  inputsView: {
    flex: 1,
    maxHeight: "100%",
    width: "100%",
    alignItems: 'center',
    justifyContent: "space-evenly"
  },
  title: {
    fontSize: 22,
    fontWeight: "bold"
  },
  buttonsView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  button: {
    borderRadius: 20,
    backgroundColor: "#F40B81",
    height: 40,
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold"
  }
})