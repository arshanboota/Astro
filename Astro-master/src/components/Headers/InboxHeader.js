import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native'
import React from 'react'
import { BackArrow } from '../../assets/svg'
import { COLOR, FONT, hp, wp } from '../../enums/StyleGuide'

const InboxHeader = (props) => {
    return (
        <View style={styles.main}>
           <View style={styles.rowContainer}>
             {/* BACK ARROW */}
             <TouchableOpacity onPress={() => props.onBack()}>
                <BackArrow />
            </TouchableOpacity>

            {/* DETAILS CONTAINER */}
            <View style={{ flexDirection: 'row', marginLeft: 8 }}>
                <Image
                    source={require('../../assets/images/SearchResults/user_img.png')}
                    style={styles.avatar}
                    resizeMode="contain"
                />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>Astro Shukla</Text>
                    <Text style={styles.time}>3:10 min</Text>
                </View>

            </View>
           </View>

            {/* RIGHT BUTTON */}
            <TouchableOpacity style={styles.endBtn}>
                <Text style={styles.endBtnTxt}>End Chat</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: '3%',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingTop: hp(2),
        paddingBottom: hp(1),
        borderBottomWidth: 1/2,
        borderColor:"#E3E3E3"
    },

    rowContainer :{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    avatar: {
        width: wp(16.1),
        height: wp(14)
    },
    name  :{
        fontFamily:FONT.Satoshi_Medium,
        color:COLOR.black,
        fontSize: wp(3.7)
    },
    time :{
        fontFamily:FONT.Satoshi_Bold,
        color:COLOR.black,
        fontSize: wp(4.2)
    },
    textContainer :{
        alignSelf:'center',
        paddingLeft:8
    },
    endBtnTxt:{
        color: COLOR.danger,
        fontFamily:FONT.Satoshi_Medium,
        fontSize:hp(2)
    },
    endBtn :{
        paddingHorizontal : 8,
        paddingVertical:5,
        backgroundColor:COLOR.dangerLight,
        borderRadius:5,
    }
})

export default InboxHeader