import { ImageBackground, StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import { COLOR, FONT, hp, wp } from '../../enums/StyleGuide'
import TitleLabel from '../../components/widgets/TitleLabel'
import { BackArrow, Blue01, CompatibilityScore, Green01, Pink01, Purple01, Red01, Yellow01 } from '../../assets/svg'
import HorizantalLine from '../../components/widgets/HorizantalLine'
import TextLabel from '../../components/widgets/TextLabel'
import { ScrollView } from 'react-native-gesture-handler'
import CompatibilityItem from '../../components/CompatibilityItem'
import ManglikReportItem from '../../components/ManglikReportItem'
import CustomButton from '../../components/widgets/CustomButton'
import ListContainer from '../../components/widgets/ListContainer'
import ExpertItem from '../../components/ExpertItem'

const Recomended = [
    { key: 1, name: "Asro Shukla", image: require('../../assets/images/SearchResults/user_img.png'), },
    { key: 2, name: "Asro Shukla", image: require('../../assets/images/SearchResults/user_img_2.png'), },
    { key: 3, name: "Asro Shukla", image: require('../../assets/images/SearchResults/user_img.png'), },
    { key: 4, name: "Asro Shukla", image: require('../../assets/images/SearchResults/user_img_2.png'), },
    { key: 5, name: "Asro Shukla", image: require('../../assets/images/SearchResults/user_img.png'), },
    { key: 6, name: "Asro Shukla", image: require('../../assets/images/SearchResults/user_img_2.png'), },
];


const Compatibility = ({ navigation }) => {
    return (
        <View style={styles.mainScreen}>
            <ScrollView>

                {/* Screen Header */}
                <View style={{ alignItems: 'center', marginTop: 30, flexDirection: 'row' }}>

                    <BackArrow width={wp(7)} height={hp(8)} style={{ marginStart: 20, marginEnd: 12 }}
                        onPress={() => navigation.goBack()}
                    />

                    <TitleLabel
                        text={'Match making'}
                        textBold={true}
                        textColor={COLOR.black}
                        style={{ marginStart: 5, fontSize: 19 }}
                    />
                </View>
                <View style={{ height: 1 }}>
                    <HorizantalLine color={COLOR.horizantal_line} />
                </View>
                {/* Heading and rating of compatibility */}
                <View>
                    <TitleLabel
                        text={'Compatibility score'}
                        textBold={true}
                        textColor={COLOR.black}
                        style={{ marginVertical: 20, fontSize: 24, textAlign: 'center' }}
                    />
                    <View style={styles.scoreRatingView}>
                        <TextLabel
                            text={'13.5/36'}
                            textBold={true}
                            textColor={COLOR.red}
                            style={{ fontSize: 16 }} />
                    </View>
                    <CompatibilityScore style={{ alignSelf: 'center', marginTop: 25, }} />
                </View>

                {/* This is the main center view of the screen */}
                <View>
                    <ImageBackground style={styles.bgImage} source={require('../../assets/images/Horoscope/Horoscope_bg.png')} resizeMode="cover">


                        <CompatibilityItem title={'Compatibility (Varna)'}
                            svgIcon={<Green01 height={hp(10)} width={wp(10)} />}
                            backgroundColor={COLOR.FFF7E1}
                            discription={'Varna refers to the mental health of the two persons involved. it holdšnominal effect in the matters of marriage compatibility.'}
                        />
                        <CompatibilityItem title={'Love (Bhakut)'}
                            svgIcon={<Purple01 height={hp(10)} width={wp(10)} />}
                            backgroundColor={'#EDF7F2'}
                            discription={'Varna refers to the mental health of the two persons involved. it holdšnominal effect in the matters of marriage compatibility.'}
                        />
                        <CompatibilityItem title={'Mental Compatibility (Maitri)'}
                            svgIcon={<Red01 height={hp(10)} width={wp(10)} />}
                            backgroundColor={'#FDF3F2'}
                            discription={'Varna refers to the mental health of the two persons involved. it holdšnominal effect in the matters of marriage compatibility.'}
                        />
                        <CompatibilityItem title={'Health (Nadi)'}
                            svgIcon={<Yellow01 height={hp(10)} width={wp(10)} />}
                            backgroundColor={'#F1ECFD'}
                            discription={'Varna refers to the mental health of the two persons involved. it holdšnominal effect in the matters of marriage compatibility.'}
                        />
                        <CompatibilityItem title={'Dominance (Vashya)'}
                            svgIcon={<Blue01 height={hp(10)} width={wp(10)} />}
                            backgroundColor={'#F1ECFD'}
                            discription={'Varna refers to the mental health of the two persons involved. it holdšnominal effect in the matters of marriage compatibility.'}
                        />
                        <CompatibilityItem title={'Temprament (Gana)'}
                            svgIcon={<Pink01 height={hp(10)} width={wp(10)} />}
                            backgroundColor={'#EDF7F2'}
                            discription={'Varna refers to the mental health of the two persons involved. it holdšnominal effect in the matters of marriage compatibility.'}
                        />
                        <CompatibilityItem title={'Destiny (Tara)'}
                            svgIcon={<Green01 height={hp(10)} width={wp(10)} />}
                            backgroundColor={'#EDF7F2'}
                            discription={'Varna refers to the mental health of the two persons involved. it holdšnominal effect in the matters of marriage compatibility.'}
                        />
                        <CompatibilityItem title={'Physical Compatibility (Yoni)'}
                            svgIcon={<Red01 height={hp(10)} width={wp(10)} />}
                            backgroundColor={'#EDF7F2'}
                            discription={'Varna refers to the mental health of the two persons involved. it holdšnominal effect in the matters of marriage compatibility.'}
                        />

                    </ImageBackground>
                </View>

                {/* This View has manglik report of both persons */}
                <View style={{ marginVertical: 10 }}>
                    <TitleLabel
                        text={'Manglik Report'}
                        textBold={true}
                        textColor={COLOR.black}
                        style={{ marginStart: 20, fontSize: 19, marginVertical: 10 }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <ManglikReportItem name={'Astro Shukla'} Manglik
                            image={require('../../assets/images/SearchResults/user_img.png')}
                        />
                        <View style={{ height: 130, width: 1, backgroundColor: COLOR.horizantal_line, marginTop: 30 }}>

                        </View>
                        <ManglikReportItem name={'Astro Shukla'}
                            image={require('../../assets/images/SearchResults/user_img.png')}
                        />

                    </View>

                </View>

                <View style={{ borderBottomWidth: 10, borderBottomColor: COLOR.grey, marginBottom: 50 }}>
                    <ImageBackground style={styles.bgImage} source={require('../../assets/images/Horoscope/Horoscope_bg.png')} resizeMode="cover">

                        <View style={styles.conclusionView}>
                            <TextLabel
                                text={'AstroConsult conclusion'}
                                textBold={true}
                                textColor={COLOR.black}
                                style={{ fontSize: 17, marginVertical: 8, }} />
                            <TextLabel
                                text={'the overall points of this couple and the process of the mangal dosh is not the thte best combination to proceed ahead with a marriage, but can be positioned in same special circumstances, consult an astrologer tôknw more one person in Manglik and the one is not it is  recommended to consult a learned astrologer beforéproceeding.'}
                                textBold={true}
                                textColor={COLOR.neutral_grey_2}
                                style={{ fontSize: 15 }} />

                        </View>

                        <View style={{ paddingHorizontal: 20, }}>
                            <CustomButton
                                long={true}
                                text={'Chat with our astrologers'}
                                isNoBorder
                                textStyles={{ fontSize: 20 }}
                                backgroundColor={COLOR.grey}
                                textColor={COLOR.black}
                                onClick={() => { }}
                            />
                        </View>

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

        </View>
    )
}

export default Compatibility

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
    scoreRatingView: {
        height: 50,
        width: '28%',
        backgroundColor: COLOR.light_red,
        borderWidth: 1,
        borderColor: COLOR.red,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    conclusionView: {
        width: '90%',
        alignSelf: 'center',
        marginVertical: 20,
        backgroundColor: COLOR.FFF7E1,
        borderRadius: 10,
        paddingHorizontal: 15,
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