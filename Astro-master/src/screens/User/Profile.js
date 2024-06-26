import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { COLOR, FONT } from '../../enums/StyleGuide';
import { wp, hp } from '../../enums/StyleGuide';
import {
  BackArrow,
  RightChevron_Black,
  RightChevron_Red,
} from '../../assets/svg';
import TitleLabel from '../../components/widgets/TitleLabel';
import { SCREEN } from '../../enums/AppEnums';
import KeyValue from '../../components/widgets/KeyValue';

const settingsList = [
  {
    id: 1,
    name: 'Personal details',
    route: SCREEN.PERSONALDETAILS
  },
  {
    id: 2,
    name: 'Wallet transactions',
    route: SCREEN.MYWALLET
  },
  {
    id: 3,
    name: 'Language',
    route: SCREEN.LANGUAGES
  },
  {
    id: 4,
    name: 'Help & support',
    route: SCREEN.HELP
  },
  {
    id: 5,
    name: 'Terms & condition',
    route: SCREEN.TERMS
  },
  {
    id: 6,
    name: 'Privacy policy',
    route: SCREEN.POLICY
  },
];

const Profile = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLOR.white }}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TitleLabel
            text={'Profile'}
            textBold={true}
            textColor={COLOR.black}
            style={{ paddingVertical: hp(2.5), fontSize: 19, marginLeft: wp(6) }}
          />
        </View>
      </View>
      {/* CONTEXT */}
      <ScrollView>
        <View style={styles.context}>
          {/* PERSONAL DETAILS */}
          <View style={styles.details}>
            <View style={styles.profile}>
              <Text style={styles.profileText}>SS</Text>
            </View>
            {/* NAME PHONE */}
            <View style={{ marginLeft: 15 }}>
              <Text style={styles.nameText}>Sunil Sharma</Text>
              <Text style={styles.numberText}>+91-8376921962</Text>
            </View>
          </View>
          {/* END */}
          {/* LIST CONTAINER */}
          <View style={styles.listContainer}>
            {settingsList.map((x, index) => (
              <KeyValue
                onClick={() => navigation.navigate(x.route)}
                key={index}
                _key={x.name}
                customIcon={<RightChevron_Black width={wp(2.7)} />}
                style={{
                  ...styles.keyValue,
                  borderBottomWidth: x.name != 'Privacy policy' ? 1 : 0,
                }}
              />
            ))}
          </View>
          {/* END */}
          <KeyValue
            onClick={() => { }}
            _key={'Logout'}
            customIcon={<RightChevron_Red width={wp(2.7)} />}
            style={styles.logout}
            keyColor={COLOR.DC2804}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1 / 2,
    borderColor: COLOR.E3E3E3,
  },
  context: {
    paddingHorizontal: wp(6),
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(3),
  },
  profile: {
    width: hp(9),
    height: hp(9),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(5),
    backgroundColor: COLOR._FFF5D6,
  },
  profileText: {
    color: COLOR.yellow,
    fontFamily: FONT.Satoshi_Medium,
    fontSize: hp(3.2),
  },
  nameText: {
    color: COLOR.black,
    fontFamily: FONT.Satoshi_Medium,
    fontSize: hp(2.4),
  },
  numberText: {
    color: COLOR._545454,
    fontFamily: FONT.Satoshi_Medium,
    fontSize: hp(2),
  },
  listContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: COLOR.EDEDED,
    borderRadius: 15,
    backgroundColor: 'rgba(245, 245, 245, 0.1)',
    paddingHorizontal: '6%',
    marginTop: hp(2),
  },
  keyValue: {
    paddingVertical: hp(2.5),
    marginBottom: 0,
    borderColor: COLOR.E3E3E3,
  },
  logout: {
    paddingVertical: hp(2.5),
    marginBottom: 0,
    borderColor: COLOR.E3E3E3,
    width: wp(88),
    paddingHorizontal: wp(5),
    alignSelf: 'center',
    marginTop: hp(2),
    backgroundColor: 'rgba(253,243,242, 0.3)',
  },
});

export default Profile;
