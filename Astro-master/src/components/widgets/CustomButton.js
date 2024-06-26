import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLOR, TEXT_STYLE } from "../../enums/StyleGuide";

export default function CustomButton(props) {
  

  

  const { long, text, textBold, onClick, isIcon, icon, style, svgIcon, isNoBorder , textStyles} = props;


  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onClick()}
     >
      <View
        style={[styles(props).button_view, style, {  borderWidth: isNoBorder ? null : 1 }]}>

        {icon &&
          <Image source={icon}
            style={styles(props).icon_view}
          /> 
        }

        { svgIcon && <View style={{marginEnd: 5}}>{svgIcon}</View> }



        <Text style={[textBold ? styles(props).text_view_bold : styles(props).text_view, textStyles]}>{text}</Text>

      </View>
    </TouchableOpacity>
  );
}

const styles = (props) =>
  StyleSheet.create({
    button_view: {
      backgroundColor: props.backgroundColor,
      height: 52,
      borderRadius: 30,
      width: "100%",
      maxWidth: '100%',
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 15,
      flexDirection: 'row',
    
      borderColor: COLOR.border_button
    },
    text_view: {
      ...TEXT_STYLE.button_regular,
      color: props.textColor,
    },
    // text_view_bold: {
    //   ...TEXT_STYLE.title_bold,
    //   color: props.textColor,
    // },
    icon_view: {
      width: 24,
      height: 24,
      marginEnd: 20
    },
  });
