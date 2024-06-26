import { Keyboard, ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import HorizantalLine from '../../components/widgets/HorizantalLine';
import TitleLabel from '../../components/widgets/TitleLabel';
import { BackArrow } from '../../assets/svg';
import { COLOR, hp, wp } from '../../enums/StyleGuide';
import InputTextUnderline from '../../components/widgets/InputTextUnderline';
import CustomButton from '../../components/widgets/CustomButton';
import CheckBox from '../../components/widgets/CheckBox';
import TextLabel from '../../components/widgets/TextLabel';

const PersonalDetails = ({ navigation }) => {
    const [name, setName] = useState('');
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
    return (
        <View style={{ flex: 1, backgroundColor: COLOR.white }}>
            <ScrollView>

                {/* Screen Header */}
                <View style={{ alignItems: 'center', marginTop: 30, flexDirection: 'row' }}>

                    <BackArrow width={wp(7)} height={hp(8)} style={{ marginStart: 20, marginEnd: 12 }}
                        onPress={() => navigation.goBack()}
                    />

                    <TitleLabel
                        text={'Personal information'}
                        textBold={true}
                        textColor={COLOR.black}
                        style={{ marginStart: 5, fontSize: 19 }}
                    />
                </View>
                <View style={{ height: 1 }}>
                    <HorizantalLine color={COLOR.horizantal_line} />
                </View>

                <View style={{ alignItems: 'center' }}>
                    <View style={{ height: hp(13), width: hp(13), marginVertical: hp(2), borderRadius: hp(10), backgroundColor: COLOR._FFF5D6, justifyContent: 'center', alignItems: 'center' }}>
                        <TitleLabel
                            text={'S'}
                            textBold={true}
                            textColor={COLOR.yellow}
                            style={{ fontSize: 35 }}
                        />
                    </View>
                    <TitleLabel
                        text={'+91-8376921962'}
                        textColor={COLOR.black}
                        style={{ fontSize: 17, marginVertical: hp(2) }}
                    />
                </View>

                <View style={{ marginBottom: hp(5), paddingHorizontal: '7%' }}>





                    <View style={{ flexDirection: 'row', marginTop: 10, height: hp(6), alignItems: 'center' }}>

                        <TextLabel
                            text={'Gender'}
                            textBold={true}
                            textColor={COLOR.placeholder_color}
                            style={{ fontSize: 15 }} />

                        <CheckBox
                            onPress={() => setMale(!male)}
                            title={'Male'}
                            isChecked={male}
                            style={{ width: '35%', height: hp(4), backgroundColor: null }}
                        />

                        <CheckBox
                            onPress={() => setFemale(!female)}
                            title={'Female'}
                            isChecked={female}
                            style={{ width: '35%', height: hp(4), backgroundColor: null }}
                        />
                    </View>

                    <View style={{ marginVertical: 10 }}>

                        <InputTextUnderline
                            titleText={'Name'}
                            placeholderText={'Sunil Sharma'}
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
                            titleText={'Date of birth'}
                            placeholderText={'01-Januray-1990'}
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
                            placeholderText={'3:38 PM'}
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
                            placeholderText={'Jai Devi Okayy, Himachal Prades...'}
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
                            titleText={'Current address'}
                            placeholderText={'Jai Devi Okayy, Himachal Prades...'}
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
                            titleText={'City, State, Country'}
                            placeholderText={'Okay, Himachal Pradesh, India'}
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
                            titleText={'Pincode'}
                            placeholderText={'110017'}
                            returnKeyType="next"
                            multiLineText={false}
                            keyboardTypeText='default'
                            // secureTextEntry={true}
                            onSubmitEditing={Keyboard.dismiss}
                            onChange={(name) => setName(name)}
                            style={{ fontSize: 19 }}
                        />
                    </View>
                    <View style={styles.footerView}>
                        <CustomButton
                            text={'Submit'}
                            backgroundColor={COLOR.yellow}
                            textColor={COLOR.black}
                            isNoBorder
                            icon={false}
                            style={styles.submitButton}
                            onClick={() => { }}
                        />
                    </View>
                </View>


            </ScrollView >
        </View >
    )
}

export default PersonalDetails;

const styles = StyleSheet.create({
    footerView: {
        marginVertical: hp(2),
        elevation: 10,
    },
})