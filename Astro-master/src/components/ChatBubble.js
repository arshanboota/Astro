import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLOR, FONT, hp, wp} from '../enums/StyleGuide';
import Tick from '../assets/svg/icons/Tick.svg';

const ChatBubble = props => {
  const {isMine } = props?.item
  return (
    <View style={[styles.bubble, isMine ? styles.mineBubble : styles.otherBubble]}>
      <Text style={styles.msg}>What do you mean?</Text>
      <View style={styles.rowContainer}>
        <Text style={styles.status}>10:20 PM</Text>
        <Tick width={hp(1.8)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    width: wp(60),
    padding: wp(3.7),
    borderRadius: hp(3.6),
    marginTop: hp(2)
  },
  msg: {
    color: COLOR.black,
    fontFamily: FONT.Satoshi_Medium,
    fontSize: hp(2),
  },
  status: {
    textAlign: 'right',
    fontFamily: FONT.Satoshi_Medium,
    fontSize: hp(1.5),
    marginRight: wp(0.5)
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: hp(1)
  },

  mineBubble :{
    backgroundColor: "#EBEAEA",
    marginRight : wp(6),
    borderBottomEndRadius: 0,
    alignSelf:'flex-end'
  },

  otherBubble :{
    backgroundColor: COLOR.yellow,
    marginLeft : wp(6),
    borderBottomLeftRadius: 0,
  }
});

export default ChatBubble;
