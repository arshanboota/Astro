import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { RightChevron } from '../../assets/svg';
import { COLOR, FONT, hp, wp } from '../../enums/StyleGuide';

const KeyValue = (props) => {
    const {item} = props
  return (
    <TouchableOpacity onPress={() => props.onClick()}
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: hp(1.5),
        ...props.style
      }}>
        <View style={{
            flexDirection:"row",
            alignItems:'center'
        }}>
            {props?.icon && props?.icon}
            <Text style={{
                fontFamily: FONT.Satoshi_Medium,
                color: props.keyColor || COLOR._232323,
                fontSize: hp(2.2)
            }}>{props?._key}</Text>
        </View>
        {
            props.isRightIcon &&
            <RightChevron width={wp(2.7)}/>
        }
        {
            props.customIcon && 
            props.customIcon
        }
        {
        props.value && 
        <Text style={{
            fontFamily: FONT.Satoshi_Medium,
            color:COLOR._232323,
            fontSize: hp(2.3)
        }}>
            {props.value}
        </Text>
        }
      </TouchableOpacity>
  );
};

export default KeyValue;
