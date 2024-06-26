import { View, ScrollView } from 'react-native'
import React from 'react'
import { COLOR } from '../../enums/StyleGuide'
import { BackArrow } from '../../assets/svg'
import { wp, hp } from '../../enums/StyleGuide'
import TitleLabel from '../../components/widgets/TitleLabel'
import TextLabel from '../../components/widgets/TextLabel'
import HorizantalLine from '../../components/widgets/HorizantalLine'
import CustomButton from '../../components/widgets/CustomButton'
import { GiftIcon, Wallet_yellow } from '../../assets/svg'
import TransactionItem from '../../components/TransactionItem'
import { SCREEN } from '../../enums/AppEnums'

const TRANSACTIONS_DETAILS = [
    {
        id: 1,
        image: <Wallet_yellow width={wp(11)} height={wp(11)} />,
        name: 'Money added',
        time: '12:30 PM',
        status: 'Success',
        amount: '+ ₹20'

    },
    {
        id: 2,
        image: <GiftIcon width={wp(11)} height={wp(11)} />,
        name: 'Referral money',
        time: '12:30 PM',
        status: 'Success',
        amount: '+ ₹20'
    },
    {
        id: 3,
        image: <Wallet_yellow width={wp(11)} height={wp(11)} />,
        name: 'Money deducted',
        time: '12:30 PM',
        status: 'Failed',
        amount: '+ ₹20'
    },
    {
        id: 4,
        image: <Wallet_yellow width={wp(11)} height={wp(11)} />,
        name: 'Money deducted',
        time: '12:30 PM',
        status: 'Failed',
        amount: '+ ₹20'
    },

]

export default function MyWallet(props) {
    return (
        <View style={{ flex: 1, backgroundColor: COLOR.white }}>

            <View style={{ alignItems: 'center', marginTop: 30, flexDirection: 'row' }}>

                <BackArrow width={wp(7)} height={hp(8)} style={{ marginStart: 20, marginEnd: 12 }}
                    onPress={() => props.navigation.goBack()}
                />

                <TitleLabel
                    text={'My Wallet'}
                    textBold={true}
                    textColor={COLOR.black}
                    style={{ marginStart: 5, fontSize: 19 }}
                />

            </View>

            <ScrollView showsVerticalScrollIndicator={false}  >
                <View style={{ flex: 1, marginHorizontal: 20, marginBottom: 20 }}>

                    <View >
                        <HorizantalLine
                            color={COLOR.horizantal_line}
                            style={{ height: 1 }}
                        />

                        <TextLabel
                            text={'Avaliable balance'}
                            textColor={COLOR.black}
                            style={{ marginTop: 30, fontSize: 16, textAlign: 'center' }} />

                        <TitleLabel
                            text={'₹500'}
                            textBold={true}
                            textColor={COLOR.black}
                            style={{ fontSize: 32, textAlign: 'center' }}
                        />

                    </View>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 30 }}>
                        <CustomButton
                            text={'Withdrawal'}
                            backgroundColor={COLOR.grey}
                            textColor={COLOR.black}
                            isNoBorder={true}
                            style={{ height: hp(6), width: wp(45) }}
                            onClick={() => { props.navigation.navigate(SCREEN.CHATINFO) }}
                        />

                        <CustomButton
                            text={'Topup'}
                            backgroundColor={COLOR.dark_green}
                            textColor={COLOR.white}
                            isNoBorder={true}

                            style={{ height: hp(6), marginStart: 10, width: wp(45) }}
                            onClick={() => props.navigation.navigate(SCREEN.TOPUP)}
                        />
                    </View>

                    <TextLabel
                        text={'Transactions'}
                        textColor={COLOR.black}
                        style={{ marginTop: 10, fontSize: 17 }} />

                    <View style={{ marginVertical: 20 }}>

                        {
                            TRANSACTIONS_DETAILS.map((item, index) => (

                                <TransactionItem
                                    item={item} key={index} />
                            ))
                        }

                    </View>

                    <CustomButton
                        long={true}
                        text={'Load More'}
                        backgroundColor={COLOR.grey}
                        textColor={COLOR.black}
                        icon={false}
                        style={{ marginTop: 35, marginBottom: -5, width: '100%' }}
                        onClick={() => { }}
                    />



                </View>
            </ScrollView>
        </View>
    )
}
