import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import HorizantalLine from '../../components/widgets/HorizantalLine';
import { COLOR, hp, wp } from '../../enums/StyleGuide';
import { BackArrow, HelpIcon } from '../../assets/svg';
import TitleLabel from '../../components/widgets/TitleLabel';
import TextLabel from '../../components/widgets/TextLabel';
import En from '../../locales/En';
import CustomButton from '../../components/widgets/CustomButton';

const Help = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: COLOR.white }}>
            {/* Screen Header */}
            <View style={{ alignItems: 'center', marginTop: 30, flexDirection: 'row' }}>

                <BackArrow width={wp(7)} height={hp(8)} style={{ marginStart: 20, marginEnd: 12 }}
                    onPress={() => navigation.goBack()}
                />

                <TitleLabel
                    text={'Help & support'}
                    textBold={true}
                    textColor={COLOR.black}
                    style={{ marginStart: 5, fontSize: 19 }}
                />
            </View>
            <View style={{ height: 1 }}>
                <HorizantalLine color={COLOR.horizantal_line} />
            </View>

            <View style={{ height: hp(17), backgroundColor: COLOR._FFF5D6, justifyContent: 'flex-end', paddingLeft: '7%' }}>
                <HelpIcon />
            </View>
            <View style={{ paddingHorizontal: '7%' }}>
                <TitleLabel
                    text={'Write down your queries'}
                    textBold={true}
                    textColor={COLOR.black}
                    style={{ fontSize: 18, marginVertical: hp(3) }}
                />
                <TextInput style={{ height: hp(20), width: '100%', fontSize: 15, padding: hp(2), textAlignVertical: 'top', backgroundColor: COLOR.neutral_grey }}
                    placeholder='I made a transaction 12 days ago'
                    placeholderTextColor={COLOR.neutral_grey_2}
                    multiline={true}
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

                <TitleLabel
                    text={'Just email at '}
                    textBold={true}
                    textColor={COLOR.neutral_grey_2}
                    style={{ fontSize: 18, alignSelf: 'center' }}
                />
                <TitleLabel
                    text={'support@astroconsult'}
                    textBold={true}
                    textColor={COLOR.yellow}
                    style={{ fontSize: 18, alignSelf: 'center' }}
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
    )
}

export default Help;

const styles = StyleSheet.create({
    horizantal_line_view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 35,
        marginHorizontal: 5,
    },
    footerView: {
        height: hp(10), width: '100%',
        elevation: 10,
        paddingHorizontal: '7%',
        position: 'absolute',
        bottom: 0,
        // backgroundColor: 'red'
    },
    submitButton: {
        height: 55,
        alignSelf: 'center',
        borderRadius: 30,
        marginTop: 20,
    },
})