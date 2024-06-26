import {View, Image, StyleSheet, Text, Keyboard, TouchableOpacity} from 'react-native';
import React , {useState}from 'react';
import {COLOR, FONT} from '../../enums/StyleGuide';
import {BackArrow, WhatsApp} from '../../assets/svg';
import {wp, hp} from '../../enums/StyleGuide';
import TitleLabel from '../../components/widgets/TitleLabel';
import TextLabel from '../../components/widgets/TextLabel';
import CustomButton from '../../components/widgets/CustomButton';
import InputText from '../../components/widgets/InputText';
import { SCREEN } from '../../enums/AppEnums';

const amounts = [
  {
    id :1,
    amount : "50"
  },
  {
    id :2,
    amount : "100"
  },
  {
    id :3,
    amount : "200"
  },
  {
    id :4,
    amount : "500"
  },

]

export default function TopUp(props) {
  const [amount, setamount] = useState('')
  return (
    <View style={{flex: 1, backgroundColor: COLOR.white}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth: 1/2,
          borderColor: COLOR.E3E3E3
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <BackArrow
            width={wp(7)}
            height={hp(8)}
            style={{marginStart: 20, marginEnd: 12}}
            onPress={()=>props.navigation.goBack()}
          />
          <TitleLabel
            text={'My Wallet'}
            textBold={true}
            textColor={COLOR.black}
            style={{marginStart: 5, fontSize: 19}}
          />
        </View>
        <CustomButton
          text={'share'}
          backgroundColor={COLOR.white}
          textColor={COLOR.black}
          svgIcon={
            <Image
              source={require('../../assets/images/whatsapp.png')}
              style={{width: 17, height: 17}}
              resizeMode="contain"
            />
          }
          onClick={() => {}}
          style={styles.shareBtn}
          isNoBorder={true}
        />
      </View>

      {/* CONTEXT */}
      <View>
        <View>
          <TextLabel
            text={'Avaliable balance'}
            textColor={COLOR._757575ß}
            style={{marginTop: 30, fontSize: 16, textAlign: 'center'}}
          />

          <TitleLabel
            text={'₹500'}
            textBold={true}
            textColor={COLOR.black}
            style={{fontSize: 32, textAlign: 'center'}}
          />
        </View>
        {/* BOX */}
        <View style={styles.context}>
          <Text style={styles.headerText}>Add money to wallet</Text>

          <Text style={[styles.headerText, {fontSize: hp(2),paddingTop: 15}]}>Amount</Text>

          <InputText
            placeholderText={'Enter Amount'}
            returnKeyType="next"
            multiLineText={false}
            keyboardTypeText="phone-pad"
            value={amount}
            onSubmitEditing={Keyboard.dismiss}
            style={{fontFamily : FONT.Satoshi_Medium, fontSize:hp(2.6), borderBottomWidth:1, borderColor: COLOR._757575, width: '100%', paddingBottom : 5}}
            onChange={num => setamount(num)}
          />
          {/* PRE DECLARED AMOUNTS */}
          <View style={{flexDirection: 'row', flexWrap:'wrap', justifyContent:'space-between', marginTop : hp(2.5)}}>
            {
              amounts.map((x, index) => (
                <TouchableOpacity key={index} style={styles.chip} onPress={()=> setamount(x.amount)}>
                  <Text style={styles.chipText}>{`+₹${x.amount}`}</Text>
                </TouchableOpacity>
              ))
            }
          </View>

          {/* BUTTON */}
          <CustomButton 
          text={"Topup"}
          style={{backgroundColor: COLOR.success, marginTop : hp(3),}}
          textStyles={{color : COLOR.white, fontSize:hp(2.3)}}
          onClick={() =>{props.navigation.navigate(SCREEN.PAYMENT_INFO)}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shareBtn: {
    height: hp(5),
    borderWidth: 0,
    marginRight: '10%',
    marginTop: hp(1.5),
  },
  context: {
    borderWidth: 1,
    borderColor: COLOR.EDEDED,
    borderRadius: 15,
    width: wp(90),
    alignSelf: 'center',
    paddingHorizontal: wp(5),
    paddingTop: wp(5),
    marginTop: hp(5),
    backgroundColor:"rgba(245, 245, 245, 0.1)"
  },

  headerText :{
    fontFamily:FONT.Satoshi_Medium,
    color : COLOR.black,
    fontSize:hp(2.7)
  },
  chip :{
    borderWidth:1,
    borderColor: COLOR.placeholder_color,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20
  },
  chipText : {
    fontFamily: FONT.Satoshi_Medium,
    color: COLOR.black,
    fontSize: hp(1.85)
  }
});
