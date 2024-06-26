import {View, Text, StatusBar, Modal} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Failure, Success} from '../../assets/svg';
import {COLOR, FONT, hp, wp} from '../../enums/StyleGuide';
import CustomButton from './CustomButton';

const PaymentModal = props => {
  return (
    <>
      {StatusBar.setBarStyle('light-content')}
      {
        props.isVisible &&
        <StatusBar backgroundColor={ props.isSucces ? '#0AA86A' : '#E7442A'} />
      }
      <Modal 
      visible={props.isVisible} 
      style={{flex: 1}}
      onRequestClose={() => props.onclose()}
      >
        <LinearGradient
          colors={
            props.isSucces
              ? ['#0AA86A', '#08935C', '#077A4D']
              : ['#E7442A', '#DF3D22', '#D43218']
          }
          style={{flex: 1, justifyContent: 'center'}}>
          <View style={{alignItems: 'center'}}>
            {props.isSucces ? (
              <Success width={90} height={90} />
            ) : (
              <Failure width={90} height={90} />
            )}
            <Text
              style={{
                color: COLOR.white,
                fontFamily: FONT.Satoshi_Bold,
                fontSize: hp(3.2),
                marginVertical: hp(2),
              }}>
              {props.isSucces ? 'Payment Successful' : 'Payment Failed'}
            </Text>
            <Text
              style={{
                color: COLOR.white,
                fontFamily: FONT.Satoshi_Medium,
                fontSize: hp(2.4),
              }}>
              {props.isSucces
                ? `Your payment of ₹50 is successful`
                : `Your payment of ₹50 is failed`}
            </Text>
          </View>

          {!props.isSucces && (
            <View style={{position:"absolute", alignSelf: "center", bottom: hp(1)}}>
              <CustomButton 
              style={{width: wp(90), height : 50, backgroundColor: "#E06A56", borderColor:"#EDA79B"}}
              text={"Try Again"}
              textStyles={{color: COLOR.white}}
              onClick={() => props.onclose()}
              />
            </View>
          )}
        </LinearGradient>
      </Modal>
    </>
  );
};

export default PaymentModal;
