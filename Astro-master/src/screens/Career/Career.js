import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { COLOR, wp, hp } from '../../enums/StyleGuide'
import { BackArrow, All, Wallet, Health, Education } from '../../assets/svg'
import TitleLabel from '../../components/widgets/TitleLabel'
import HorizantalLine from '../../components/widgets/HorizantalLine'
import CustomButton from '../../components/widgets/CustomButton'
import { EXPERTS } from '../../assets/Data/Dummies'
import ProfileItemVerticle from '../../components/ProfileItemVerticle'
import { styles } from '../Home/styles'
import { SCREEN } from '../../enums/AppEnums'


export default function Career(props) {


    const handleOnPress = () => {
        props.navigation.navigate(SCREEN.ASTROPROFILE)
    }


    return (
        <View style={{ flex: 1, backgroundColor: COLOR.white }}>
            <View style={{ alignItems: 'center', marginTop: 30, flexDirection: 'row' }}>

                <BackArrow width={wp(7)} height={hp(8)} style={{ marginStart: 20, marginEnd: 12 }}
                    onPress={() => props.navigation.goBack()}
                />


                <TitleLabel
                    text={'Career'}
                    textBold={true}
                    textColor={COLOR.black}
                    style={{ marginStart: 5, fontSize: 19 }}
                />

            </View>


            <ScrollView showsVerticalScrollIndicator={false} >

                <View >
                    <HorizantalLine
                        color={COLOR.horizantal_line}
                        style={{ height: 1 }}
                    />
                </View>

                <ScrollView style={{ marginHorizontal: 20, marginTop: 15, flexDirection: 'row' }}
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false} >

                    <CustomButton
                        text={'All'}
                        backgroundColor={COLOR.white}
                        textColor={COLOR.black}
                        isNoBorder={true}
                        svgIcon={<All width={wp(4)} height={wp(4)} />}
                        style={{ height: hp(5.2), backgroundColor: COLOR.neutral_grey, width: wp(30) }}
                        onClick={() => { }}
                    />

                    <CustomButton
                        text={'Career'}
                        backgroundColor={COLOR.yellow}
                        textColor={COLOR.black}
                        isNoBorder={true}
                        svgIcon={<Education width={wp(4)} height={wp(4)} />}
                        style={{ height: hp(5.2), marginStart: 10, width: wp(30) }}
                        onClick={() => { }}
                    />

                    <CustomButton
                        text={'Tarrot'}
                        backgroundColor={COLOR.white}
                        textColor={COLOR.black}
                        isNoBorder={true}
                        svgIcon={<Wallet width={wp(4)} height={wp(4)} />}
                        style={{ height: hp(5.2), marginStart: 10, backgroundColor: COLOR.neutral_grey, width: wp(30) }}
                        onClick={() => { }}
                    />


                    <CustomButton
                        text={'Health'}
                        backgroundColor={COLOR.white}
                        textColor={COLOR.black}
                        isNoBorder={true}
                        svgIcon={<Health width={wp(4)} height={wp(4)} />}
                        style={{ height: hp(5.2), backgroundColor: COLOR.neutral_grey, marginStart: 10, width: wp(30) }}
                        onClick={() => { }}
                    />





                </ScrollView>

                <View>
                    <ScrollView style={{ marginHorizontal: 20 }} showsVerticalScrollIndicator={false}
                    >

                        {
                            EXPERTS.map((item, index) => (
                                <ProfileItemVerticle item={item} key={index} onPress={handleOnPress} />
                            ))
                        }

                    </ScrollView>
                </View>

                <View style={{ marginHorizontal: 20 }}>


                    <CustomButton
                        // long={true}
                        text={'Load More'}
                        backgroundColor={COLOR.neutral_grey}
                        textColor={COLOR.black}
                        icon={false}
                        isNoBorder={true}
                        style={{ marginTop: 20 }}
                        onClick={() => { }}
                    />
                </View>


                {/* REFERAL */}
                <View style={[styles.referalContainer, { backgroundColor: COLOR.neutral_grey, marginTop: 20 }]}>
                    <View>
                        <Text style={[styles.idea, styles.referal]}>Refer and get free call</Text>
                        <Text style={styles.reward}>Invite and get ₹100</Text>
                    </View>
                    <Image
                        source={require("../../assets/images/home/Referal.png")}

                        style={{ width: wp(45), height: wp(45) }}
                        resizeMode="contain"
                    />
                </View>
                {/* END */}

                {/* FOOTER */}
                <View style={[styles.footerContainer, { backgroundColor: COLOR.neutral_grey }]}>
                    <Image
                        source={require("../../assets/images/home/Fish.png")}
                        style={{ width: wp(45), height: wp(40) }}
                        resizeMode="contain"
                    />
                    <Text style={[styles.idea, { fontSize: hp(2.4) }]}>Here’s a tip for the day!</Text>
                    <Text style={[styles.reward, styles.footer]}>Rudraksha beads emit different frequencies and attract different energies as per their Mukhi.</Text>
                </View>
                {/* END */}



            </ScrollView>

        </View>
    )
}
