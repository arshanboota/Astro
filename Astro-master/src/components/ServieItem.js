import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLOR, FONT, hp, wp } from '../enums/StyleGuide'

const ServieItem = (props) => {
    const { item } = props
    return (
        <TouchableOpacity onPress={() => props.onpress()} style={[styles.main]}>
            <View style={[styles.imageContainer, { justifyContent: item.id == 6 ? "center" : "flex-end" }]}>
                <Image source={item.image}
                    style={item.id == 6 ? styles.moreImage : styles.image}
                    resizeMode="contain"
                />
            </View>
            <View style={{ paddingVertical: hp(1.6) }}>
                <Text style={styles.name}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

ServieItem.defaultProps = {

}

const styles = StyleSheet.create({
    main: {
        width: wp(27.5),
        marginBottom: 7
    },
    name: {
        fontFamily: FONT.Satoshi_Medium,
        color: COLOR.service_name,
        fontSize: hp(1.8),
        textAlign: 'center'
    },
    imageContainer: {
        width: wp(27.5),
        height: wp(23.5),
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 7,
        backgroundColor: COLOR.neutral_grey,
        overflow: 'hidden'
    },

    image: {
        width: "85%",
        height: '80%',
        bottom: -2.5
    },
    moreImage: {
        width: "34%",
        height: '10%',
    }
})

export default ServieItem