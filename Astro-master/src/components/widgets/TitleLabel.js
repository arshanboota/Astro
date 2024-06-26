import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FONT, TEXT_STYLE } from '../../enums/StyleGuide';

export default function TitleLabel(props) {
    const { text,textBold, style} = props;
  return (
    <View>
    <Text style={ [textBold ? styles(props).title_view_bold : styles(props).title_view_regular, style]}>{text}</Text>
    </View>
  )
}

const styles =  (props) => StyleSheet.create({
    title_view_regular: {
        ...TEXT_STYLE.title_regular,
        color: props.textColor,
      
      },
      title_view_bold: {
        ...TEXT_STYLE.title_bold,
        color: props.textColor,
      
      },
})