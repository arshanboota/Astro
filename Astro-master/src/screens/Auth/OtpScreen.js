import { View, Keyboard } from 'react-native'
import React, { useState } from 'react'
import InputText from '../../components/widgets/InputText'
import CustomButton from '../../components/widgets/CustomButton'
import TextLabel from '../../components/widgets/TextLabel'
import TitleLabel from '../../components/widgets/TitleLabel'
import En from '../../locales/En'
import { COLOR } from '../../enums/StyleGuide'
import BackgroundImage from '../../components/BackgroundImage'
import { SCREEN } from '../../enums/AppEnums'
import VerticleLine from '../../components/widgets/VerticleLine'

export default function OtpScreen(props) {

  const [userOTP, setUserOTP] = useState("");
  const { navigation } = props

  const otpEvent = () => {
    navigation.navigate(SCREEN.LANGUAGES)
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLOR.white }}>

      <BackgroundImage />

      <View style={{ marginHorizontal: 20, marginTop: 40 }}>

        <TitleLabel
          text={En.headerTopOtp}
          textBold={true}
          textColor={COLOR.black} />


        <TextLabel
          text={En.headerBottomOtp}
          textBold={false}
          textColor={COLOR.neutral_grey_2}
          style={{ marginTop: 15 }} />

        <TextLabel
          text={En.otpNo}
          textBold={true}
          textColor={COLOR.black}
        />


        {/* //Input Login Number */}
        <View style={{ flexDirection: 'row', marginTop: 25, alignContent: 'center', alignItems: 'center' }}>


          <VerticleLine />


          <InputText
            placeholderText={En.otpPlaceHolder}
            returnKeyType="next"
            multiLineText={false}
            keyboardTypeText='phone-pad'
            // secureTextEntry={true}
            style={{ marginStart: 10 }}
            onSubmitEditing={Keyboard.dismiss}
            onChange={(num) => setUserOTP(num)}
          />

        </View>

        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <TextLabel
            text={En.otpResend}
            textBold={false}
            textColor={COLOR.neutral_grey_2}
            style={{ fontSize: 16 }} />

          <TextLabel
            text={En.otpTime}
            textBold={false}
            textColor={COLOR.yellow}
            style={{ fontSize: 16 }} />

        </View>


        {/* //Continue Button */}


        <CustomButton
          long={true}
          text={En.LoginContinue}
          backgroundColor={COLOR.yellow}
          textColor={COLOR.black}
          icon={false}
          style={{ marginTop: 35, marginBottom: -5 }}
          onClick={otpEvent}
        />


      </View>
    </View>
  )
}
