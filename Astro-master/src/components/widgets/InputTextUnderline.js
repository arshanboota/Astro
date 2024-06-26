import { StyleSheet, Text, View, TextInput, Keyboard } from 'react-native'
import React from 'react'
import { COLOR, TEXT_STYLE, width, height } from '../../enums/StyleGuide'
import TextLabel from './TextLabel'

export default function InputTextUnderline(props) {
    const
        {
            titleText,
            placeholderText,
            multiLineText,
            keyboardTypeText,

            style
        } = props

    return (
        <View>
            <TextLabel
                text={titleText}
                textBold={true}
                textColor={COLOR.black}
                style={{ marginTop: 10, fontSize: 15, }} />

            <TextInput
                placeholder={placeholderText}
                // multiline={multiLineText}
                onChangeText={(e) => props.onChange(e)}
                keyboardType={keyboardTypeText}
                returnKeyType="next"
                onSubmitEditing={Keyboard.dismiss}
                placeholderTextColor={COLOR.lineColor}
                style={[styles.textInputStyle, style,]}
                selectionColor={COLOR.yellow}
                cursorColor= {COLOR.yellow}
            // caretHidden={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInputStyle: {
        ...TEXT_STYLE.title_bold,
        borderColor: "transparent",
        underlineColor: 'red',
        width: '100%',
        paddingStart: -2,
        borderBottomWidth: 1,
        borderBottomColor: COLOR.horizantal_line,

    },
})