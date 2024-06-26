import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/widgets/CustomButton'
import TextLabel from '../../components/widgets/TextLabel'
import TitleLabel from '../../components/widgets/TitleLabel'
import En from '../../locales/En'
import { COLOR } from '../../enums/StyleGuide'
import BackgroundImage from '../../components/BackgroundImage'
import { SCREEN } from '../../enums/AppEnums'
import CheckBox from '../../components/widgets/CheckBox'
import { resetAndGo } from '../../utils/MyUtils'

export default function LanguagesScreen(props) {

  const { navigation } = props
  const [english, setEnglish] = useState(false);
  const [hindi, setHindi] = useState(false);
  const [hindiSec, setHindiSec] = useState(false);
  const [hindiThi, setHindiThi] = useState(false);

  const otpEvent = () => {

    resetAndGo(navigation, "TABS")
  };
  return (
    <View style={{ flex: 1, backgroundColor: COLOR.white }}>

      <BackgroundImage />

      <View style={{ marginHorizontal: 20, marginTop: 40 }}>

        <TitleLabel
          text={En.headerTopLang}
          textBold={true}
          textColor={COLOR.black} />


        <TextLabel
          text={En.headerBottomLang}
          textBold={false}
          textColor={COLOR.neutral_grey_2}
          style={{ marginTop: 15 }} />

        {/* //Radio Buttons */}

        <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'space-between' }}>

          <CheckBox
            onPress={() => setEnglish(!english)}
            title={En.engLanguage}
            isChecked={english}

          />

          <CheckBox
            onPress={() => setHindi(!hindi)}
            title={En.hindiTextSecond}
            isChecked={hindi}

          />
        </View>


        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>

          <CheckBox
            onPress={() => setHindiSec(!hindiSec)}
            title={En.hindiTextThird}
            isChecked={hindiSec}

          />

          <CheckBox
            onPress={() => setHindiThi(!hindiThi)}
            title={En.hindiTextFourth}
            isChecked={hindiThi}

          />
        </View>

        {/* //Continue Button */}




        <CustomButton
          long={true}
          text={En.LoginContinue}
          backgroundColor={COLOR.yellow}
          textColor={COLOR.black}
          icon={false}
          style={{ marginTop: 40, marginBottom: -5 }}
          onClick={otpEvent}
        />


      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
