import { StyleSheet, ImageBackground, View } from 'react-native'
import React from 'react'
import { height, width } from '../enums/StyleGuide'

export default function BackgroundImage() {
    return (
      
            <ImageBackground
                source={require("../assets/images/background.png")}
                style={styles.bg_view} />
     

    )
}

const styles = StyleSheet.create({
    bg_view: {
        width: width,
        height: height * 0.50,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 10

    },
})