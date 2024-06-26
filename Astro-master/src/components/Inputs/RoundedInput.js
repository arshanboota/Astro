import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { COLOR, FONT, hp } from '../../enums/StyleGuide'

const RoundedInput = (props) => {
    return (
        <View style={[styles.main, props.containerStyles]}>
            {/* ICON */}
            {props.icon &&
                <TouchableOpacity style={[styles.iconContainer]} onPress={()=>props.onClick()}>
                    {props?.icon}
                </TouchableOpacity>
            }
            <TextInput
                style={[styles.input, props.inputStyles]}
                placeholder={props.placeholder}
                placeholderTextColor={COLOR.neutral_grey_2}
                onFocus={()=>props.onClick()}
            />
        </View>
    )
}

RoundedInput.defaultProps = {
    title: "title",
    amount: "2,000",
    containerStyles: { alignSelf: 'center' },
    placeholder: "Search for ‘Love’"
}

const styles = StyleSheet.create({
    main: {
        width: '90%',
        borderWidth: 3 / 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 100,
        borderColor: COLOR.neutral_grey,
        backgroundColor: COLOR.white,
        marginVertical: 10
    },
    iconContainer: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        height: hp(8),
        maxHeight: 52,
        color: COLOR.black,
        fontFamily: FONT.Satoshi_Medium,
        fontSize: hp(2)
    }
})

export default RoundedInput