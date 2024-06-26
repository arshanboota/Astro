import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR, FONT, hp, wp } from '../../enums/StyleGuide'
import { Bell, Wallet } from '../../assets/svg/index'
import { SCREEN } from '../../enums/AppEnums'

const AppHeader = (props) => {
    return (
        <View style={[styles.main, props.mainStyles]}>
            <Text style={[styles.title, props.titleStyles]}>{props.title}</Text>
            {/* INTERACTIVES */}
            <View style={styles.BtnContainer}>
                <TouchableOpacity style={[styles.walletBtn]} onPress={()=> props.navigation.navigate(SCREEN.MYWALLET) } >
                    <Wallet width={hp(2.6)} height={hp(2.6)}/>
                    <Text style={[styles.amout]}>{`₹${props.amount}`}</Text>
                </TouchableOpacity>
                {/* BELL */}
                <TouchableOpacity style={[styles.walletBtn, styles.bellBtn]}>
                    <Bell width={hp(2.6)} height={hp(2.6)}/>
                </TouchableOpacity>


            </View>
        </View>
    )
}

AppHeader.defaultProps = {
    title: "title",
    amount : "2,000"
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        paddingVertical: hp(2.5),
        paddingHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: FONT.Satoshi_Medium,
        color: COLOR.black,
        fontSize: hp(2.75)
    },
    BtnContainer: {
     
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '37%',
        marginTop: 2.5
    },
    walletBtn: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: COLOR.neutral_grey,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 6
    },
    amout :{
        fontFamily: FONT.Satoshi_Medium,
        fontSize:hp(1.6),
        color:COLOR.black,
        marginLeft:5
    },
    bellBtn: {
        paddingHorizontal: 6,
    },
})

export default AppHeader