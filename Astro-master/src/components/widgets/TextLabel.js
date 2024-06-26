import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TEXT_STYLE } from '../../enums/StyleGuide';

export default function TextLabel(props) {
    const { text,textBold, style} = props;
  return (
    <View>
    <Text style={ [textBold ? styles(props).text_view_bold : styles(props).text_view_regular, style]}>{text}</Text>
    </View>
  )
}

const styles =  (props) => StyleSheet.create({
    text_view_regular: {
        ...TEXT_STYLE.text_regular,
        color: props.textColor,
      },
      text_view_bold: {
        ...TEXT_STYLE.text_bold,
        color: props.textColor,
      },
})