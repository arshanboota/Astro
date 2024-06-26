import { View, ScrollView } from 'react-native'
import React from 'react'
import { COLOR, wp, hp } from '../../enums/StyleGuide'
import RoundedInput from '../../components/Inputs/RoundedInput'
import HorizantalLine from '../../components/widgets/HorizantalLine'
import { All, Education, BackArrow, Health, Wallet } from '../../assets/svg'
import CustomButton from '../../components/widgets/CustomButton'
import { SCREEN } from '../../enums/AppEnums'
import { EXPERTS } from '../../assets/Data/Dummies'
import ProfileItemVerticle from '../../components/ProfileItemVerticle'

export default function SearchResults(props) {

    const handleOnPress = () => {
        props.navigation.navigate(SCREEN.ASTROPROFILE)
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLOR.white }}>

            <View style={{ alignItems: 'center', marginTop: 30, flexDirection: 'row' }}>

                <BackArrow width={wp(7)} height={hp(8)} style={{ marginStart: 20, marginEnd: 12 }}
                    onPress={() => props.navigation.goBack()}
                />


                <RoundedInput
                    onClick={() => { }}
                    placeholder='Search astrologers, Love, Career'
                    containerStyles={{ backgroundColor: COLOR.neutral_grey, width: wp(80) }}
                    inputStyles={{ paddingStart: 20, paddingEnd: 20, }}

                />

            </View>

            <View style={{ height: 1 }}>
                <HorizantalLine
                    color={COLOR.horizantal_line} />
            </View>


            <ScrollView>


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
                        text={'Wealth'}
                        backgroundColor={COLOR.white}
                        textColor={COLOR.black}
                        isNoBorder={true}
                        svgIcon={<Wallet width={wp(4)} height={wp(4)} />}
                        style={{ height: hp(5.2), backgroundColor: COLOR.neutral_grey, marginStart: 10, width: wp(30) }}
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




                    <CustomButton
                        text={'Education'}
                        backgroundColor={COLOR.white}
                        textColor={COLOR.black}
                        isNoBorder={true}
                        svgIcon={<Education width={wp(4)} height={wp(4)} />}
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
            </ScrollView>
        </View>
    )
}
