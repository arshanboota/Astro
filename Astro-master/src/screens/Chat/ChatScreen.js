import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLOR, FONT, hp, wp} from '../../enums/StyleGuide';
import CustomButton from '../../components/widgets/CustomButton';
import {Accept, Reject} from '../../assets/svg';
import InboxHeader from '../../components/Headers/InboxHeader';
import SendMsg from '../../assets/svg/icons/SendMsg.svg';
import ChatBubble from '../../components/ChatBubble';
import {FlatList} from 'react-native-gesture-handler';

const ChatScreen = props => {
  return (
    <SafeAreaView style={styles.mainConatiner}>
      <InboxHeader onBack={() => props.navigation.goBack()} />
      <ImageBackground
        source={require('../../assets/images/chatBG.png')}
        style={[styles.mainConatiner]}>
        <FlatList
          data={[{isMine: false}, {isMine: true}]}
          renderItem={({item, index}) => <ChatBubble item={item} />}
        />
      </ImageBackground>
      {/* INPUT */}
      <View style={[styles.inputContainer]}>
        <TextInput placeholder="Type your message" style={styles.input} />
        <TouchableOpacity style={styles.sendBtn}>
          <SendMsg width={wp(6)} height={wp(6)} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  brandingContainer: {
    alignItems: 'center',
    marginTop: hp(8),
  },
  txt: {
    color: COLOR.white,
    fontFamily: FONT.Satoshi_Bold,
    fontSize: hp(2.9),
  },
  imagebackGround: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: COLOR.white,
    paddingVertical: 5,
    alignItems: 'center',
  },
  sendBtn: {
    backgroundColor: COLOR.yellow,
    position: 'absolute',
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    justifyContent: 'center',
    alignItems: 'center',
    right: wp(2),
  },
  input: {
    width: wp(80),
    marginLeft: wp(3.5),
  },
});
