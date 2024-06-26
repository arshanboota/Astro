import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR, FONT, hp, width } from '../../enums/StyleGuide'


const RoundedButton = (props) => {
    return (
        <TouchableOpacity onPress={()=>props.onpress(true)} style={[styles.main, props.style]}>
            <Text style={[styles.title, props.textStyles]}>{props.title}</Text>
            {
                props.icon &&
                props.icon
            }
        </TouchableOpacity>
    )
}

RoundedButton.defaultProps = {
    onpress: () => { }
}

const styles = StyleSheet.create({
    main: {
        width: width * 0.33,
        maxWidth: 150,
        height: hp(6),
        maxHeight: 42,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.yellow,
        borderRadius: 100
    },
    title: {
        fontFamily:FONT.Satoshi_Medium,
        fontSize: hp(1.7),
        color:COLOR.black, marginEnd:5
    }
})

export default RoundedButton