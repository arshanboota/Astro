import {
  View,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar
} from 'react-native';
import React, { useState } from 'react';
import { COLOR, FONT } from '../../enums/StyleGuide';
import { wp, hp } from '../../enums/StyleGuide';
import { BackArrow } from '../../assets/svg';
import TitleLabel from '../../components/widgets/TitleLabel';
import { SCREEN } from '../../enums/AppEnums';
import KeyValue from '../../components/widgets/KeyValue';
import ButtonInput from '../../components/widgets/ButtonInput';
import CustomButton from '../../components/widgets/CustomButton';
import PaymentModal from '../../components/widgets/PaymentModal';

const recommended = [
  {
    id: 1,
    icon: (
      <Image
        source={require('../../assets/images/paymentMethod/googlepay.png')}
        style={{
          minWidth: 30,
          width: hp(4),
          height: hp(4),
          marginRight: wp(4),
        }}
        resizeMode="contain"
      />
    ),
    name: 'Google Pay',
  },
  {
    id: 1,
    icon: (
      <Image
        source={require('../../assets/images/paymentMethod/phonepe.png')}
        style={{
          minWidth: 30,
          width: hp(4),
          height: hp(4),
          marginRight: wp(4),
        }}
        resizeMode="contain"
      />
    ),
    name: 'Phone Pay',
  },
  {
    id: 1,
    icon: (
      <Image
        source={require('../../assets/images/paymentMethod/paytm.png')}
        style={{
          minWidth: 30,
          width: hp(4),
          height: hp(4),
          marginRight: wp(4),
        }}
        resizeMode="contain"
      />
    ),
    name: 'Paytm Pay',
  },
  {
    id: 1,
    icon: (
      <Image
        source={require('../../assets/images/paymentMethod/upi.png')}
        style={{
          minWidth: 30,
          width: hp(4),
          height: hp(4),
          marginRight: wp(4),
        }}
        resizeMode="contain"
      />
    ),
    name: 'Pay via UPI',
  },
  {
    id: 1,
    icon: (
      <Image
        source={require('../../assets/images/paymentMethod/card.png')}
        style={{
          minWidth: 30,
          width: hp(4),
          height: hp(4),
          marginRight: wp(4),
        }}
        resizeMode="contain"
      />
    ),
    name: 'Credit or Debit card',
  },
];

const PaymentInformation = (props) => {
  const [isVisible, setisVisible] = useState(false)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.white }}>
      {/* <StatusBar backgroundColor={props.isVisible && props.isSucces ? '#0AA86A' : '#E7442A'} /> */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth: 1 / 2,
          borderColor: COLOR.E3E3E3,
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <BackArrow
            width={wp(7)}
            height={hp(8)}
            style={{ marginStart: 20, marginEnd: 12 }}
            onPress={() => props.navigation.goBack()}
          />
          <TitleLabel
            text={'Payment Information'}
            textBold={true}
            textColor={COLOR.black}
            style={{ marginStart: 5, fontSize: 19 }}
          />
        </View>
      </View>
      <ScrollView>
        {/* CONTEXT */}
        <View style={styles.context}>
          <Text style={styles.heading}>Payment details</Text>

          {/* PAYMENT DETAILS */}
          <View style={styles.borderBotttom}>
            <KeyValue
              onClick={() => { }}
              _key={'Amount'}
              keyColor={COLOR._545454}
              value={`₹123.43`}
            />
            <KeyValue
              onClick={() => { }}
              _key={'GST (18%)'}
              keyColor={COLOR._545454}
              value={`₹54`}
            />
            <KeyValue
              onClick={() => { }}
              _key={'Total Payable Amount'}
              keyColor={COLOR._545454}
              value={`₹180.43`}
            />
          </View>
          {/* INPUT FIELD */}
          <View style={[styles.borderBotttom, { paddingBottom: hp(3) }]}>
            <ButtonInput placeholder={'Enter Coupon Code'} />
          </View>

          {/* RECOMMENDED */}
          <Text style={styles.heading}>Recommended methods</Text>

          <View style={styles.borderBotttom}>
            {recommended.slice(0, 3).map((x, index) => (
              <KeyValue
                onClick={() => { }}
                key={index}
                _key={x.name}
                isRightIcon={true}
                icon={x.icon}
                style={{ marginVertical: hp(1) }}
              />
            ))}
          </View>

          {/* PAYMENT METHODS */}
          <Text style={styles.heading}>Payment methods</Text>

          <View style={[styles.borderBotttom, { borderBottomWidth: 0 }]}>
            {recommended.map((x, index) => (
              <KeyValue
                onClick={() => { }}
                key={index}
                _key={x.name}
                isRightIcon={true}
                icon={x.icon}
                style={{ marginVertical: hp(1) }}
              />
            ))}
          </View>
        </View>
        {/* BUTTON */}
        <CustomButton
          text={'Topup'}
          style={{
            backgroundColor: COLOR.success,
            marginTop: hp(3),
            width: wp(90),
            alignSelf: 'center',
          }}
          textStyles={{ color: COLOR.white, fontSize: hp(2.3) }}
          onClick={() => {
            // setisVisible(true)
          }}
        />
      </ScrollView>
      <PaymentModal isSucces={false} isVisible={isVisible} onclose={() => setisVisible(false)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  context: {
    flex: 1,
    paddingHorizontal: '6%',
  },

  heading: {
    fontFamily: FONT.Satoshi_Bold,
    color: COLOR.black,
    fontSize: hp(2.4),
    marginTop: hp(3),
  },
  borderBotttom: {
    borderBottomWidth: 1,
    borderColor: COLOR.EDEDED,
    paddingTop: hp(3),
    paddingBottom: hp(1.6),
  },
});

export default PaymentInformation;
