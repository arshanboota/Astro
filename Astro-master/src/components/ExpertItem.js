import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLOR, FONT, hp, width, wp } from '../enums/StyleGuide'
import { RatingStar } from '../assets/svg'

const ExpertItem = (props) => {
    const { item } = props

    return (
        <TouchableOpacity style={[styles.main]}>
            <Image
                source={item.image}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.rowContainer}>
                <RatingStar width={wp(4)} height={wp(4)} />
                <Text style={styles.rating}>{`4.5 (123)`}</Text>
            </View>
            <Text style={styles.name}>{`₹11/min`}</Text>
        </TouchableOpacity>
    )
}

ExpertItem.defaultProps = {
    onpress: () => { }
}

const styles = StyleSheet.create({
    main: {
        width: width * 0.3,
        marginRight: width * 0.04,
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
        fontSize: hp(1.8),
    },
})

export default ExpertItem