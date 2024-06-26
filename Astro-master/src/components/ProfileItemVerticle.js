import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLOR, FONT, hp, width, wp } from '../enums/StyleGuide'
import { RatingStar } from '../assets/svg'

export default function ProfileItemVerticle(props) {
    const { item, onPress } = props
  return (
    <TouchableOpacity style={[styles.main]} onPress={()=> onPress()} >
            <Image
                source={item.profileImage}
                style={styles.image}
                resizeMode="contain"
            />
            <View style={{justifyContent:'center', marginHorizontal:10 }}>
            <Text style={styles.name}>{item.name}</Text>

            <Text style={{fontFamily: FONT.Satoshi_Regular,fontSize: hp(1.6), marginBottom:5}}>{`Tarot card, Love, Career`}</Text>
            <View style={styles.rowContainer}>
                <RatingStar width={wp(4)} height={wp(4)} />
                <Text style={styles.rating}>{`4.5 (123)`}</Text>
            </View>
            <Text style={styles.name}>{`₹11/min`}</Text>
            </View>
            
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    main: {
        width: width * 0.90,
        marginRight: width * 0.04,
        marginTop:5,
       flexDirection:'row'
    },
    image: {
        width: width * 0.3,
        height: width * 0.3,
        borderRadius: 7
    },
    name: {
        fontFamily: FONT.Satoshi_Medium,
        color: COLOR.black,
        fontSize: hp(2),
        marginVertical: 3
    },
    rowContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    rating :{
        fontFamily: FONT.Satoshi_Regular,
        fontSize: hp(1.6),
    },
})
