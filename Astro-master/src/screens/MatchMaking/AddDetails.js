import { StyleSheet, View, ScrollView, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { COLOR, wp, hp } from '../../enums/StyleGuide'
import { BackArrow } from '../../assets/svg'
import TitleLabel from '../../components/widgets/TitleLabel'
import TextLabel from '../../components/widgets/TextLabel'
import HorizantalLine from '../../components/widgets/HorizantalLine'
import InputTextUnderline from '../../components/widgets/InputTextUnderline'
import CheckBox from '../../components/widgets/CheckBox'
import En from '../../locales/En'
import CustomButton from '../../components/widgets/CustomButton'
import { Copy } from '../../assets/svg'
import { SCREEN } from '../../enums/AppEnums'


export default function ChatInfo(props) {

    const [name, setName] = useState('')
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: COLOR.white }}>
            <View style={{ alignItems: 'center', marginTop: 30, flexDirection: 'row' }}>

                <BackArrow width={wp(7)} height={hp(8)} style={{ marginStart: 20, marginEnd: 12 }}
                    onPress={() => props.navigation.goBack()}
                />


                <TitleLabel
                    text={'Match making'}
                    textBold={true}
                    textColor={COLOR.black}
                    style={{ marginStart: 5, fontSize: 19 }}
                />

            </View>
            <View style={{ height: 1 }} >
                <HorizantalLine color={COLOR.horizantal_line} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>


                <View style={{ marginHorizontal: 20, }} >


                    <View style={{ marginVertical: 20 }}>

                        <InputTextUnderline
                            titleText={'Name'}
                            placeholderText={'Enter Name'}
                            returnKeyType="next"
                            multiLineText={false}
                            keyboardTypeText='default'
                            // secureTextEntry={true}
                            onSubmitEditing={Keyboard.dismiss}
                            onChange={(name) => setName(name)}
                            style={{ fontSize: 19 }}
                        />
                    </View>

                    <TextLabel
                        text={'Gender'}
                        textBold={true}
                        textColor={COLOR.black}
                        style={{ marginTop: 10, fontSize: 15 }} />


                    <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>

                        <CheckBox
                            onPress={() => setMale(!male)}
                            title={'Male'}
                            isChecked={male}

                        />

                        <CheckBox
                            onPress={() => setFemale(!female)}
                            title={'Female'}
                            isChecked={female}

                        />
                    </View>


                    <View style={{ marginVertical: 20 }}>

                        <InputTextUnderline
                            titleText={'Date of birth'}
                            placeholderText={'Enter date of birth'}
                            returnKeyType="next"
                            multiLineText={false}
                            keyboardTypeText='default'
                            // secureTextEntry={true}
                            onSubmitEditing={Keyboard.dismiss}
                            onChange={(name) => setName(name)}
                            style={{ fontSize: 19 }}
                        />
                    </View>

                    <View style={{ marginVertical: 10 }}>

                        <InputTextUnderline
                            titleText={'Time of birth'}
                            placeholderText={'Enter time of birth'}
                            returnKeyType="next"
                            multiLineText={false}
                            keyboardTypeText='default'
                            // secureTextEntry={true}
                            onSubmitEditing={Keyboard.dismiss}
                            onChange={(name) => setName(name)}
                            style={{ fontSize: 19 }}
                        />
                    </View>

                    <View style={{ marginVertical: 10 }}>

                        <InputTextUnderline
                            titleText={'Place of birth'}
                            placeholderText={'Place time of birth'}
                            returnKeyType="next"
                            multiLineText={false}
                            keyboardTypeText='default'
                            // secureTextEntry={true}
                            onSubmitEditing={Keyboard.dismiss}
                            onChange={(name) => setName(name)}
                            style={{ fontSize: 19 }}
                        />
                    </View>

                    {/* HORIZANTAL OR */}

                    <View style={styles.horizantal_line_view}>
                        <HorizantalLine
                            color={COLOR.horizantal_line}
                        />

                        <View style={{ marginHorizontal: 5 }}>

                            <TextLabel
                                text={En.orLogin}
                                textBold={false}
                                textColor={COLOR.black} />

                        </View>

                        <HorizantalLine
                            color={COLOR.horizantal_line}
                        />
                    </View>


                    {/* COPY PROFILE BUTTON */}
                    <CustomButton
                        long={true}
                        text={'Copy from kundli'}
                        backgroundColor={COLOR.white}
                        textColor={COLOR.black}
                        isNoBorder={false}
                        svgIcon={<Copy width={wp(6)} height={wp(6)} />}
                        onClick={() => { }}
                    />


                    <HorizantalLine
                        color={COLOR.horizantal_line}
                        style={{ height: 1, marginHorizontal: -20, marginTop: 70 }}
                    />

                    {/* CHAT WITH ASTRO */}

                    <CustomButton
                        long={true}
                        text={'Confirm details'}
                        backgroundColor={COLOR.yellow}
                        textColor={COLOR.black}
                        icon={false}
                        style={{ marginBottom: -5, width: '100%', marginTop: 15, marginBottom: 15 }}
                        onClick={() => props.navigation.navigate(SCREEN.SELECTKUNDLLI)}
                    />

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    horizantal_line_view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    }
})