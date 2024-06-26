import {StyleSheet, TextInput, Keyboard, View} from 'react-native';
import React from 'react';
import {COLOR, TEXT_STYLE, width} from '../../enums/StyleGuide';

const InputText = props => {
  const {
    placeholderText,
    multiLineText,
    keyboardTypeText,
    containerStyles,
    style,
    value
  } = props;

  return (
    <View style={[containerStyles]}>
      <TextInput
        placeholder={placeholderText}
        // multiline={multiLineText}
        value={value && value}
        onChangeText={e => props.onChange(e)}
        keyboardType={keyboardTypeText}
        returnKeyType="next"
        onSubmitEditing={Keyboard.dismiss}
        placeholderTextColor={COLOR.placeholder_color}
        style={[styles.textInputStyle, style]}
        selectionColor={COLOR.yellow}
        // caretHidden={true}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  textInputStyle_border: {
    paddingStart: 13,
    paddingEnd: 13,
    height: 47,
    borderWidth: 1,
    borderColor: '#B6B6B6',
    marginVertical: 8,
    marginHorizontal: 24,
    borderRadius: 6,
  },
  textInputStyle: {
    ...TEXT_STYLE.title_bold,
    borderColor: 'transparent',
    underlineColor: 'transparent',
    width: width * 0.72,
  },
});
