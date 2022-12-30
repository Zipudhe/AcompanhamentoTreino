import React, { FC } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

interface IInputNumber {
  label: string,
  placeholder: string,
  inputHandler: (input: string) => void,
  value: string
}

export const InputNumber: FC<IInputNumber> = ({ label, placeholder, inputHandler, value }) => {

  return (
    <View  style={inputStyle.container} >
      <Text style={inputStyle.label} > { label } </Text>
      <TextInput defaultValue={value} style={inputStyle.input} onChangeText={inputHandler} placeholder={placeholder} keyboardType='numeric' />
    </View>
  )
}

const inputStyle = StyleSheet.create({
  container: {
    height: 60,
    width: "80%",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    alignSelf: "flex-start"
  },
  input: {
    width: "100%",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 8,
    backgroundColor: "#fff"
  }
})