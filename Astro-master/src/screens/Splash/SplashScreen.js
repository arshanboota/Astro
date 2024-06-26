import { StyleSheet, View, ImageBackground, Image, StatusBar } from 'react-native'
import React, {useEffect} from 'react'
import { width, height, COLOR, hp, wp } from '../../enums/StyleGuide'
import { SCREEN } from '../../enums/AppEnums';

export default function SplashScreen(props) {

    const { navigation } = props

    useEffect(() => {
        setTimeout(() => {
          navigation.replace(SCREEN.LOGIN)
        }, 2000);
      });

    return (

        <View style={{ justifyContent: 'center', flex: 1 }}>
            <StatusBar backgroundColor={"#FFDA04"} barStyle="dark-content"/>
            <ImageBackground
                source={require("../../assets/images/splash_bg.png")}
                style={styles.bg_view} />

            <Image
                source={require("../../assets/images/splash_logo.png")}
                style={{ position: 'absolute', alignSelf: 'center' , height: hp(12), width: wp(75) }} 
                resizeMode={'contain'}/>


        </View>
    )
}

const styles = StyleSheet.create({
    bg_view: {
        width: width,
        height: height,
        alignItems: "center",
        justifyContent: "center",

    },
})