import { StyleSheet, View, Image, Text } from 'react-native';
import React from 'react';
import { BackArrow } from '../../assets/svg';
import TitleLabel from '../../components/widgets/TitleLabel';
import { COLOR, FONT, hp, wp } from '../../enums/StyleGuide';
import HorizantalLine from '../../components/widgets/HorizantalLine';
import CustomButton from '../../components/widgets/CustomButton';
import TextLabel from '../../components/widgets/TextLabel';
import { ScrollView } from 'react-native-gesture-handler';
import ListContainer from '../../components/widgets/ListContainer';
import ExpertItem from '../../components/ExpertItem';
import ManglikAnalysisView from '../../components/ManglikAnalysisView';

const Recomended = [
    { key: 1, name: "Asro Shukla", image: require('../../assets/images/SearchResults/user_img.png'), },
    { key: 2, name: "Asro Shukla", image: require('../../assets/images/SearchResults/user_img_2.png'), },
    { key: 3, name: "Asro Shukla", image: require('../../assets/images/SearchResults/user_img.png'), },
    { key: 4, name: "Asro Shukla", image: require('../../assets/images/SearchResults/user_img_2.png'), },
    { key: 5, name: "Asro Shukla", image: require('../../assets/images/SearchResults/user_img.png'), },
    { key: 6, name: "Asro Shukla", image: require('../../assets/images/SearchResults/user_img_2.png'), },
];

const BasicDetails = [
    { key: 1, data: 'Name', Value: 'Priyaanka Sharma', },
    { key: 2, data: 'Date', Value: '01- Jan- 2000', },
    { key: 3, data: 'Time', Value: '10:52 PM', },
    { key: 4, data: 'Place', Value: 'New Delhi, India', },
    { key: 5, data: 'Latitude', Value: '28.64', },
    { key: 6, data: 'Longitude', Value: '77.24', },
    { key: 7, data: 'TimeZone', Value: 'GMT+5.5', },
    { key: 8, data: 'Sunrise', Value: '7:14:07 AM', },
    { key: 9, data: 'Sunset', Value: '7:14:44 AM', },
    { key: 10, data: 'Ayanmsha', Value: '23.4325', },
];

const PanchangData = [
    { key: 1, data: 'Tithi', Value: 'KrishnaTrayodashi' },
    { key: 2, data: 'Karan', Value: 'Gar' },
    { key: 3, data: 'Yog', Value: 'Siddha' },
    { key: 4, data: 'Nakshtra', Value: 'Magha' },
    { key: 5, data: 'Sunrise', Value: '6:10:23 AM' },
    { key: 6, data: 'Sunset', Value: '6:16:53 PM' },
];

const KundlliDetails = ({ navigation }) => {
    return (
        <View style={styles.mainScreen}>
            <ScrollView>
                {/* HEADER */}
                <View style={{ alignItems: 'center', marginTop: 30, flexDirection: 'row', }}>

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
                <View style={{ height: 1 }}>
                    <HorizantalLine color={COLOR.horizantal_line} />
                </View>
                {/* Two Buttons at the top of the screen */}
                <View style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 20, }}>
                    <CustomButton
                        text={'Basic details'}
                        backgroundColor={COLOR.yellow}
                        textColor={COLOR.black}
                        icon={false}
                        textStyles={{ fontSize: 14, fontWeight: '700' }}
                        style={{ height: 40, paddingHorizontal: 20 }}
                        onClick={() => { }}
                    />
                    <CustomButton
                        text={'Charts'}
                        backgroundColor={COLOR.grey}
                        textColor={COLOR.black}
                        isNoBorder
                        icon={false}
                        textStyles={{ fontSize: 14 }}
                        style={{ height: 40, paddingHorizontal: 20, marginLeft: 20 }}
                        onClick={() => { }}
                    />
                </View>
                {/* Basic detail View */}
                <View style={{ marginTop: 5 }}>
                    {/* Basic detail heading */}
                    <TitleLabel
                        text={'Basic detials'}
                        textBold={true}
                        textColor={COLOR.black}
                        style={{ marginStart: 25, marginBottom: 10, fontSize: 17, }}
                    />
                    <View style={styles.wheatColorView}>
                        <View>
                            {
                                BasicDetails.map((item) => (
                                    <TextLabel
                                        text={item.data}
                                        textColor={COLOR.neutral_grey_2}
                                        style={styles.detailItemText} />
                                ))
                            }
                        </View>
                        <View>
                            {
                                BasicDetails.map((item) => (
                                    <TextLabel
                                        text={item.Value}
                                        textBold
                                        textColor={COLOR.black}
                                        style={styles.detailItemText} />
                                ))
                            }
                        </View>
                    </View>
                </View>
                {/* Maglik View Start */}
                <View style={{ marginTop: 10 }}>
                    {/* Maglik heading */}
                    <TitleLabel
                        text={'Manglik analysis'}
                        textBold={true}
                        textColor={COLOR.black}
                        style={{ marginStart: 25, marginVertical: 15, fontSize: 17 }}
                    />
                    {/* if you give svgIcon='Yes' Yes svg will be diplayed and vice versa  */}
                    {/* Only one condition (Yes or No) will be used at a time  */}
                    <ManglikAnalysisView svgIcon={'Yes'} name={'Priyaanka Sharma'}
                        discription={'Since mars is in the sixth house and in capricorn sign person in Non Manglik'} />
                    <ManglikAnalysisView svgIcon={'No'} name={'Priyaanka Sharma'}
                        discription={'Since mars is in the sixth house and in capricorn sign person in Non Manglik'} />
                </View>
                {/* Panchang View Start */}
                <View style={{ marginTop: 10, marginBottom: 40, }}>
                    {/* Panchang heading */}
                    <TitleLabel
                        text={'Panchang details'}
                        textBold={true}
                        textColor={COLOR.black}
                        style={{ marginStart: 25, marginVertical: 15, fontSize: 17 }}
                    />
                    <View style={styles.wheatColorView}>
                        <View>
                            {
                                PanchangData.map((item) => (
                                    <TextLabel
                                        text={item.data}
                                        textColor={COLOR.neutral_grey_2}
                                        style={styles.detailItemText} />
                                ))
                            }
                        </View>
                        <View>
                            {
                                PanchangData.map((item) => (
                                    <TextLabel
                                        text={item.Value}
                                        textBold
                                        textColor={COLOR.black}
                                        style={styles.detailItemText} />
                                ))
                            }
                        </View>
                    </View>
                </View>

                {/* Recomended experts View Start */}
                <ListContainer style={{ marginTop: 0 }} textstyle={{ fontSize: hp(2.7), }}
                    onClick={() => { }}
                    title={"Recomended experts"}>
                    {
                        Recomended.map((item, index) => (
                            <ExpertItem item={item} key={index} />
                        ))
                    }
                </ListContainer>

                {/* Last footer View */}
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
        </View>
    )
}

export default KundlliDetails;

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1, backgroundColor: COLOR.white,
    },
    wheatColorView: {
        width: '90%', alignSelf: 'center', borderRadius: 10,
        backgroundColor: COLOR.FFF7E1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: COLOR.FFE69B,
        elevation: 2,
    },
    detailItemText: {
        fontSize: 16,
        marginVertical: 10,
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
})