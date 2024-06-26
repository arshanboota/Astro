import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { COLOR } from '../../enums/StyleGuide'

export default function VerticleLine() {
  return (
    <View style={styles.verticleLine} />
  )
}

const styles = StyleSheet.create({
    verticleLine: {
        height: '75%',
        width: 1,
        backgroundColor: COLOR.dark_blue,
    },
})