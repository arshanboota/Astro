import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import AppHeader from '../../components/Headers/AppHeader';
import { COLOR, FONT, hp, wp } from '../../enums/StyleGuide';
import { ScrollView } from 'react-native-gesture-handler';
import TextLabel from '../../components/widgets/TextLabel';
import StarItems from '../../components/StarItems';
import CustomButton from '../../components/widgets/CustomButton';
import HoroscopeDetails from '../../components/HoroscopeDetails';
import En from '../../locales/En';
import ExpertItem from '../../components/ExpertItem';
import ListContainer from '../../components/widgets/ListContainer';

const StartData = [
    { key: 1, starName: 'Aquarius', date: 'Feb 23- Jan 19' },
    { key: 2, starName: 'Capricon', date: 'Dec 22- Jan 19' },
    { key: 3, starName: 'Sagittarius', date: 'Dec 22- Jan 19' },
    { key: 4, starName: 'Capricon', date: 'Dec 22- Jan 19' },
    { key: 5, starName: 'Aquarius', date: 'Feb 23- Jan 19' },
    { key: 6, starName: 'Sagittarius', date: 'Dec 22- Jan 19' },
];
const Recomended = [
    { key: 1, name: "Asro Shukla", image: require('../../assets/images/SearchResults/user_img.png'), },
    { key: 2, name: "Asro Shukla", image: require('../../assets/images/SearchResults/user_img_2.png'), },
    { key: 3, name: "Asro Shukla", image: require('../../assets/images/SearchResults/user_img.png'), },
    { key: 4, name: "Asro Shukla", image: require('../../assets/images/SearchResults/user_img_2.png'), },
    { key: 5, name: "Asro Shukla", image: require('../../assets/images/SearchResults/user_img.png'), },
    { key: 6, name: "Asro Shukla", image: require('../../assets/images/SearchResults/user_img_2.png'), },
];

const Horoscope = ({navigation}) => {
    const [showBackground, setShowBackground] = useState('Today');
    const ToggleBtn = (prop) => {
        return (
            <CustomButton
                text={prop.text}
                isNoBorder
                backgroundColor={showBackground === prop.text ? COLOR.yellow : null}
                textColor={showBackground === prop.text ? COLOR.black : COLOR.neutral_grey_2}
                icon={false}
                textStyles={{ fontSize: 14, fontWeight: '600' }}
                style={styles.weakInnerCon}
                onClick={() => { setShowBackground(prop.text) }}
            />
        )
    }
    return (
        <View style={styles.body}>
            <ScrollView>
                <AppHeader title={"Horoscope"} navigation={navigation} />
                <View style={styles.itemCon}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                        {
                            StartData.map((item, index) => {
                                return (
                                    <StarItems item={item} />
                                )
                            })
                        }
                    </ScrollView>
                </View>
                <View style={styles.secondCon}>
                    <ImageBackground style={styles.bgImage} source={require('../../assets/images//Horoscope/Horoscope_bg.png')} resizeMode="cover">

                        <View style={styles.weakView}>
                            <ToggleBtn text={'Yesterday'} />
                            <ToggleBtn text={'Today'} />
                            <ToggleBtn text={'Tomorrow'} />
                        </View>
                        <View style={styles.luckCon}>
                            <View style={styles.luckTextCon}>
                                <TextLabel
                                    text={'Lucky Items for you'}
                                    textBold
                                    textColor={COLOR.black}
                                    style={{ fontSize: 16 }} />
                            </View>
                            <View style={styles.luckInnerView}>
                                <View style={styles.sessionCon}>
                                    <TextLabel
                                        text={'Colours'}
                                        textColor={COLOR.black}
                                        style={{ fontSize: 13 }} />
                                    <TextLabel
                                        text={'Brown ,Blue'}
                                        textColor={COLOR.black}

                                        style={{ fontSize: 14, fontWeight: 'bold' }} />
                                </View>
                                <View style={styles.sessionCon}>
                                    <TextLabel
                                        text={'Numbers'}
                                        textColor={COLOR.black}
                                        style={{ fontSize: 13 }} />
                                    <TextLabel
                                        text={'1,8'}
                                        textColor={COLOR.black}
                                        style={{ fontSize: 14, fontWeight: 'bold' }} />
                                </View>
                                <View style={styles.sessionCon}>
                                    <TextLabel
                                        text={'Alphabets'}
                                        textColor={COLOR.black}
                                        style={{ fontSize: 13 }} />
                                    <TextLabel
                                        text={'H,S'}
                                        textColor={COLOR.black}
                                        style={{ fontSize: 14, fontWeight: 'bold' }} />
                                </View>
                            </View>
                        </View>
                        <TextLabel
                            text={'What horoscope says about you'}
                            textColor={COLOR.black}
                            textBold
                            style={{ fontSize: 18, marginTop: 20 }} />
                        <HoroscopeDetails title={'Love'} detail={En.loremIpsum} />
                        <HoroscopeDetails title={'Career'} detail={En.loremIpsum} />
                        <HoroscopeDetails title={'Money'} detail={En.loremIpsum} />
                        <HoroscopeDetails title={'Health'} detail={En.loremIpsum} />
                    </ImageBackground>
                </View>

                <ListContainer style={{ marginTop: 0 }} noBar textstyle={{ fontSize: hp(2.7), }}
                    onClick={() => { }}
                    title={"Recomended experts"}>
                    {
                        Recomended.map((item, index) => (
                            <ExpertItem item={item} key={index} />
                        ))
                    }
                </ListContainer>

                <View style={styles.footerContainer}>
                    <Image
                        source={require("../../assets/images/home/Fish.png")}
                        style={{ width: wp(45), height: wp(40), }}
                        resizeMode="contain"
                    />
                    <Text style={[styles.idea, { fontSize: hp(2.4) }]}>Here’s a tip for the day!</Text>
                    <Text style={[styles.reward, styles.footer]}>Rudraksha beads emit different frequencies and attract different energies as per their Mukhi.</Text>
                </View>

            </ScrollView>

        </View >
    )
}

export default Horoscope;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
    itemCon: {
        height: 170,
        width: '100%',
        // backgroundColor: 'skyblue',
        flexDirection: 'row',
    },
    secondCon: {
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomWidth: 10,
        borderBottomColor: COLOR.grey,
        marginBottom: 50,
    },
    bgImage: {
        flex: 1,
        height: 1460,
        alignItems: 'center',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },
    weakView: {
        height: 60,
        width: '90%',
        flexDirection: 'row',
        backgroundColor: COLOR.white,
        borderRadius: 50,
        marginTop: 30,
        justifyContent: 'space-evenly',
        paddingTop: 10,
    },
    weakInnerCon: {
        height: '80%',
        paddingHorizontal: 25,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    luckCon: {
        height: 180,
        width: '90%',
        backgroundColor: COLOR.white,
        justifyContent: 'space-evenly',
        borderRadius: 20,
        marginTop: 30,
        elevation: 5,
    },
    luckTextCon: {
        height: 50,
        width: '90%',
        // backgroundColor:'red',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderColor: COLOR.grey,
    },
    luckInnerView: {
        height: 80,
        width: '100%',
        // backgroundColor:'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sessionCon: {
        height: 80,
        width: '33%',
        paddingLeft: 20,
        justifyContent: 'space-around',
    },
    footerContainer: {
        height: 380,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR.neutral_grey,
    },
    footer: {
        fontSize: hp(2.2),
        color: "#626262",
        textAlign: 'center',
        maxWidth: wp(80),
        marginTop: hp(2),
        marginBottom: hp(6)
    },
    idea: {
        fontFamily: FONT.Satoshi_Bold,
        fontSize: hp(3),
        color: COLOR.black,
    },
    reward: {
        fontFamily: FONT.Satoshi_Medium,
        color: "#545454",
        fontSize: hp(1.8)
    },
});
