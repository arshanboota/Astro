import { View, ScrollView } from 'react-native'
import React from 'react'
import { COLOR, wp, hp } from '../../enums/StyleGuide'
import HorizantalLine from '../../components/widgets/HorizantalLine'
import { BackArrow, ProfileCall, ProfileMsg, ProfileVideo, RatingStar, ForwardArrow, Call, Message } from '../../assets/svg'
import TitleLabel from '../../components/widgets/TitleLabel'
import { EXPERTS } from '../../assets/Data/Dummies'
import ProfileItemVerticle from '../../components/ProfileItemVerticle'
import SocialRecord from '../../components/SocialRecord'
import TextLabel from '../../components/widgets/TextLabel'
import { ProgressBar } from 'react-native-paper';
import CustomerReviews from '../../components/CustomerReviews'
import CustomButton from '../../components/widgets/CustomButton'
import ListContainer from '../../components/widgets/ListContainer'
import ExpertItem from '../../components/ExpertItem'
import { SCREEN } from '../../enums/AppEnums'



const SOCIALSTUFF = [
    {
        id: 1,
        image: <ProfileCall width={wp(11)} height={wp(11)} />,
        name: 'Audio Call'

    },
    {
        id: 2,
        image: <ProfileVideo width={wp(11)} height={wp(11)} />,
        name: 'Video Call'
    },
    {
        id: 3,
        image: <ProfileMsg width={wp(11)} height={wp(11)} />,
        name: 'Text Message'
    },

]

const CUSTOMERREVIEWS = [
    {
        id: 1,
        name: 'Mayank Dhawan',
        date: 'January 2021',
        description: 'The service was exceptional. The professional arrived on time and was courteous. I will definitely recommend Urban Company to all. Also, if the review is longer than 5 lines, then show  read more'

    },
    {
        id: 2,
        name: 'Mayank Dhawan',
        date: 'January 2021',
        description: 'The service was exceptional. The professional arrived on time and was courteous. I will definitely recommend Urban Company to all. Also, if the review is longer than 5 lines, then show  read more'

    },
    {
        id: 3,
        name: 'Mayank Dhawan',
        date: 'January 2021',
        description: 'The service was exceptional. The professional arrived on time and was courteous. I will definitely recommend Urban Company to all. Also, if the review is longer than 5 lines, then show  read more'

    },

]

export default function AstroProfile(props) {


    const searchResults = () => {
        // props.navigation.navigate(SCREEN.SEARCHRESULTS)
    };
    return (
        <View style={{ flex: 1, backgroundColor: COLOR.white }}>

            <View style={{ alignItems: 'center', marginTop: 30, flexDirection: 'row' }}>

                <BackArrow width={wp(7)} height={hp(8)} style={{ marginStart: 20, marginEnd: 12 }}
                    onPress={() => props.navigation.goBack()}
                />


                <TitleLabel
                    text={'Profile'}
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


                <View style={{ marginStart: 15 }}>
                    {
                        EXPERTS.slice(0, 1).map((item, index) => (
                            <ProfileItemVerticle item={item} key={index} />
                        ))
                    }
                </View>



                <HorizantalLine
                    color={COLOR.horizantal_line}
                />


                <View style={{ flexDirection: 'row', marginVertical: 17, justifyContent: 'space-around' }}>

                    {
                        SOCIALSTUFF.map((item, index) => (

                            <SocialRecord
                                item={item} key={index} />
                        ))
                    }
                </View>

                <HorizantalLine
                    color={COLOR.horizantal_line} />

                <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
                    <TitleLabel
                        text={'About Astro Shuklas'}
                        textBold={true}
                        textColor={COLOR.black}
                        style={{ fontSize: 17 }}
                    />

                    <TextLabel
                        text={'Demonstrate intransitive verb. When people demonstrate, they take part in a march or a meeting to show that they oppose or support something.'}
                        textBold={false}
                        textColor={COLOR.neutral_grey_2}
                        style={{ marginTop: 8 }} />
                </View>

                <HorizantalLine
                    color={COLOR.neutral_grey}
                    style={{ height: 8 }} />

                <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                    <TitleLabel
                        text={'Rating and reviews'}
                        textBold={true}
                        textColor={COLOR.black}
                        style={{ fontSize: 17 }}
                    />


                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
                        <RatingStar width={wp(5)} height={wp(5)} />

                        <TitleLabel
                            text={`4.5`}
                            textBold={true}
                            textColor={COLOR.black}
                            style={{ fontSize: 24, marginStart: 5 }}
                        />
                    </View>

                    <TextLabel
                        text={`12.2k reviews`}
                        textBold={false}
                        textColor={COLOR.neutral_grey_2}
                        style={{ marginTop: -11 }} />


                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, justifyContent: 'space-evenly', marginTop: 10 }}>

                    <RatingStar width={wp(4)} height={wp(4)} />

                    <TitleLabel
                        text={`5`}
                        textBold={true}
                        textColor={COLOR.black}
                        style={{ fontSize: 15, marginStart: 5 }}
                    />


                    <ProgressBar progress={0.8} color={COLOR.black} width={'80%'} style={{ marginHorizontal: 15 }} />

                    <TitleLabel
                        text={`10.1k`}
                        textBold={true}
                        textColor={COLOR.black}
                        style={{ fontSize: 15, marginStart: 5 }}
                    />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, justifyContent: 'space-evenly', marginTop: 10 }}>

                    <RatingStar width={wp(4)} height={wp(4)} />

                    <TitleLabel
                        text={`5`}
                        textBold={true}
                        textColor={COLOR.black}
                        style={{ fontSize: 15, marginStart: 5 }}
                    />


                    <ProgressBar progress={0.8} color={COLOR.black} width={'80%'} style={{ marginHorizontal: 15 }} />

                    <TitleLabel
                        text={`10.1k`}
                        textBold={true}
                        textColor={COLOR.black}
                        style={{ fontSize: 15, marginStart: 5 }}
                    />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, justifyContent: 'space-evenly', marginTop: 10 }}>

                    <RatingStar width={wp(4)} height={wp(4)} />

                    <TitleLabel
                        text={`5`}
                        textBold={true}
                        textColor={COLOR.black}
                        style={{ fontSize: 15, marginStart: 5 }}
                    />


                    <ProgressBar progress={0.8} color={COLOR.black} width={'80%'} style={{ marginHorizontal: 15 }} />

                    <TitleLabel
                        text={`10.1k`}
                        textBold={true}
                        textColor={COLOR.black}
                        style={{ fontSize: 15, marginStart: 5 }}
                    />
                </View>

                <HorizantalLine
                    color={COLOR.neutral_grey}
                    style={{ height: 8, marginTop: 25 }} />

                {/* CUSTOMER REVIEWS */}

                <View style={{ marginVertical: 17 }}>

                    {
                        CUSTOMERREVIEWS.map((item, index) => (

                            <CustomerReviews
                                item={item} key={index} />
                        ))
                    }
                </View>

                <View style={{ marginHorizontal: 20 }}>


                    <CustomButton
                        // long={true}
                        text={'Load More'}
                        backgroundColor={COLOR.neutral_grey}
                        textColor={COLOR.black}
                        icon={false}
                        isNoBorder={true}
                        style={{ marginTop: 5 }}
                        onClick={() => { }}
                    />
                </View>

                <View style={{ flexDirection: 'row', backgroundColor: COLOR.neutral_grey, height: 53, marginTop: 30, alignItems: 'center', paddingHorizontal: 20 }}>

                    <TitleLabel
                        text={'Report and Block'}
                        textBold={true}
                        textColor={COLOR.black}
                        style={{ fontSize: 16 }}
                    />

                    <ForwardArrow width={wp(7.5)} height={wp(7.5)} style={{ position: 'absolute', right: 20 }} />

                </View>

                {/* Top Astrologers */}
                <ListContainer
                    title={"Top Astrologers"}
                    onClick={searchResults}
                    style={{ marginBottom: 15 }}
                >
                    {
                        EXPERTS.map((item, index) => (
                            <ExpertItem item={item} key={index} />
                        ))
                    }
                </ListContainer>
                {/* END */}

                <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
                    <CustomButton
                        text={'Call'}
                        backgroundColor={COLOR.yellow}
                        textColor={COLOR.black}
                        isNoBorder={true}
                        svgIcon={<Call width={wp(4)} height={wp(4)} />}
                        style={{ height: hp(5.2), width: wp(45) }}
                        onClick={() => props.navigation.navigate(SCREEN.INCOMINGCALL)}
                    />

                    <CustomButton
                        text={'Message'}
                        backgroundColor={COLOR.yellow}
                        textColor={COLOR.black}
                        isNoBorder={true}
                        svgIcon={<Message width={wp(4)} height={wp(4)} />}
                        style={{ height: hp(5.2), marginStart: 10, width: wp(45) }}
                        onClick={() => props.navigation.navigate(SCREEN.CHATINFO)}
                    />
                </View>


            </ScrollView>

        </View>
    )
}
