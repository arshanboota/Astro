import { StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { MainStackNavigator } from './src/naigation/StackNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor='white' barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <MainStackNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}