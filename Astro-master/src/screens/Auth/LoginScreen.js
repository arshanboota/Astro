import { StyleSheet, View, Keyboard } from 'react-native'
import React, { useState } from 'react'
import InputText from '../../components/widgets/InputText'
import CustomButton from '../../components/widgets/CustomButton'
import TextLabel from '../../components/widgets/TextLabel'
import TitleLabel from '../../components/widgets/TitleLabel'
import En from '../../locales/En'
import { COLOR } from '../../enums/StyleGuide'
import HorizantalLine from '../../components/widgets/HorizantalLine'
import BackgroundImage from '../../components/BackgroundImage'
import { SCREEN } from '../../enums/AppEnums'
import VerticleLine from '../../components/widgets/VerticleLine'



export default function LoginScreen(props) {

    const { navigation } = props

    const [userLoginNo, setUserLoginNo] = useState("");

    const loginEvent = () => {
        navigation.navigate(SCREEN.OTP)
    };

    return (
        <View style={{ flex: 1, backgroundColor: COLOR.white }}>

            <BackgroundImage />

            <View style={{ marginHorizontal: 20, marginTop: 40 }}>

                <TitleLabel
                    text={En.headerTop}
                    textBold={true}
                    textColor={COLOR.black} />

                <TextLabel
                    text={En.headerBottom}
                    textBold={false}
                    textColor={COLOR.neutral_grey_2}
                    style={{ marginTop: 15 }} />


                {/* //Input Login Number */}
                <View style={{ flexDirection: 'row', marginTop: 25, alignContent: 'center', alignItems: 'center' }}>

                    <TitleLabel
                        text={En.countryCodeIndia}
                        textBold={true}
                        style={{ marginEnd: 12 }}
                        textColor={COLOR.black} />

                    <VerticleLine />


                    <InputText
                        placeholderText={En.loginPlaceHolder}
                        returnKeyType="next"
                        multiLineText={false}
                        keyboardTypeText='phone-pad'
                        // secureTextEntry={true}
                        onSubmitEditing={Keyboard.dismiss}
                        style={{marginStart: 10}}
                        onChange={(num) => setUserLoginNo(num)}
                    />

                </View>


                {/* //Continue Button */}


                <CustomButton
                    long={true}
                    text={En.LoginContinue}
                    backgroundColor={COLOR.yellow}
                    textColor={COLOR.black}
                    icon={false}
                    style={{ marginTop: 35, marginBottom: -5, width:'100%'}}
                    onClick={loginEvent}
                />


                {/* //Horizantal Line */}
                <View style={styles.horizantal_line_view}>
                    <HorizantalLine />

                    <View style={{ marginHorizontal: 5 }}>

                        <TextLabel
                            text={En.orLogin}
                            textBold={false}
                            textColor={COLOR.black} />

                    </View>

                    <HorizantalLine />
                </View>

                {/* //Social Logins */}

                <CustomButton
                    long={true}
                    text={En.googleLogin}
                    backgroundColor={COLOR.white}
                    textColor={COLOR.black}
                    isIcon={true}
                    icon={require("../../assets/images/google_icon.png")}
                    onClick={loginEvent}
                />

                <CustomButton
                    long={true}
                    text={En.facebookLogin}
                    backgroundColor={COLOR.fb_blue}
                    textColor={COLOR.white}
                    isIcon={true}
                    icon={require("../../assets/images/facebook_icon.png")}
                    onClick={loginEvent}
                />

                <CustomButton
                    long={true}
                    text={En.appleLogin}
                    backgroundColor={COLOR.black}
                    textColor={COLOR.white}
                    isIcon={true}
                    icon={require("../../assets/images/apple_icon.png")}
                    onClick={loginEvent}
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({


    horizantal_line_view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 35,
        marginHorizontal: 5,

    }
})