import { Keyboard, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { COLOR, wp, hp } from '../../enums/StyleGuide';
import { BackArrow } from '../../assets/svg';
import TitleLabel from '../../components/widgets/TitleLabel';
import TextLabel from '../../components/widgets/TextLabel';
import HorizantalLine from '../../components/widgets/HorizantalLine';
import InputTextUnderline from '../../components/widgets/InputTextUnderline';
import CheckBox from '../../components/widgets/CheckBox';
import CustomButton from '../../components/widgets/CustomButton';
import { SCREEN } from '../../enums/AppEnums';

const NewKundlli = ({navigation}) => {

    const [name, setName] = useState('')
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
    return (
        <View style={{ flex: 1, backgroundColor: COLOR.white }}>
            <View style={{ alignItems: 'center', marginTop: 30, flexDirection: 'row' }}>
            
                <BackArrow width={wp(7)} height={hp(8)} style={{ marginStart: 20, marginEnd: 12 }}
                onPress={() => navigation.goBack()}
                />
            

                <TitleLabel
                    text={'Kundlli'}
                    textBold={true}
                    textColor={COLOR.black}
                    style={{ marginStart: 5, fontSize: 19 }}
                />

            </View>
            <View >
                <HorizantalLine
                    color={COLOR.horizantal_line}
                    style={{ height: 1 }}
                />
            </View>


            <View style={{ marginHorizontal: 20 }} >


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



            </View>
            {/* Button to add new kundli Start */}
            <CustomButton
                text={'Create New Kundli'}
                backgroundColor={COLOR.yellow}
                textColor={COLOR.black}
                icon={false}
                style={styles.newKundlliButton}
                onClick={() => { navigation.navigate(SCREEN.KundlliDetails) }}
            />
        </View>
    )
}

export default NewKundlli;

const styles = StyleSheet.create({
    newKundlliButton: {
        height: 55,
        width: '90%',
        borderRadius: 30,
        marginTop: 50,
        alignSelf: 'center',
    },
})