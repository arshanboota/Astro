import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLOR, FONT, hp, width, wp } from '../enums/StyleGuide'
import RoundedButton from './widgets/RoundedButton'
import { ArrowRight } from '../assets/svg'

const HomeCarouselItem = (props) => {
    const { item } = props
    return (
        <TouchableOpacity style={[styles.main]} activeOpacity={0.8}>
            <View style={[styles.imageContainer, { justifyContent: item.id == 6 ? "center" : "flex-end" }]}>
                <Image source={item.cover}
                    style={styles.image}
                />
            </View>
            <View style={styles.contextContainer}>
                <Text style={styles.text}>{item.text}</Text>
                <Text style={styles.text2}>Ask our astrologers for solutions</Text>
                <RoundedButton
                title="Chat now"
                onpress={()=>props.onclose(true)}
                icon={<ArrowRight width={wp(7)} height={wp(6)}/>}
                />
            </View>
        </TouchableOpacity>
    )
}

HomeCarouselItem.defaultProps = {

}

const styles = StyleSheet.create({
    main: {
        width: width * 0.9,
        height: width * 0.7,
        backgroundColor: COLOR.white,
    },
    name: {
        fontFamily: FONT.Satoshi_Medium,
        color: COLOR.service_name,
        fontSize: hp(1.8),
        textAlign: 'center'
    },
    imageContainer: {
        width: width * 0.9,
        height: '45%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 7,
        backgroundColor: COLOR.neutral_grey,
        overflow: 'hidden'
    },

    image: {
        width: '100%',
        height: "100%"

    },
    contextContainer: {
        flex: 1,
        paddingLeft: '5%',
        justifyContent: 'space-evenly',
    },
    text: {
        fontFamily: FONT.Satoshi_Bold,
        fontSize:hp(2.2),
        color: COLOR.black
    },
    text2: {
        fontFamily: FONT.Satoshi_Medium,
        fontSize:hp(2),
        color: COLOR.black
    }

})

export default HomeCarouselItem