import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR, FONT, hp} from '../../enums/StyleGuide';

const ButtonInput = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        borderWidth: 1,
        borderRadius:5,
        minHeight: 50,
        borderColor: COLOR.EDEDED,
        ...props.style,
      }}>
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={COLOR.lineColor}
        onChangeText={() => {}}
        style={{
          flex: 1,
          paddingLeft:10,
          fontSize: hp(2.2)
        }}
      />
      <TouchableOpacity
        style={{
          height: '100%',
          maxHeight: 60,
          paddingHorizontal: '5%',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: hp(2.2),
            fontFamily: FONT.Satoshi_Bold,
            color: COLOR.black26,
          }}>
          {props.ButtonText}Apply
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonInput;
