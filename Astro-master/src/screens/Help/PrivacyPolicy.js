import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import HorizantalLine from '../../components/widgets/HorizantalLine';
import TitleLabel from '../../components/widgets/TitleLabel';
import { BackArrow } from '../../assets/svg';
import { COLOR, hp, wp } from '../../enums/StyleGuide';
import En from '../../locales/En';

const PrivacyPolicy = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: COLOR.white }}>
            <ScrollView>

                {/* Screen Header */}
                <View style={{ alignItems: 'center', marginTop: 30, flexDirection: 'row' }}>

                    <BackArrow width={wp(7)} height={hp(8)} style={{ marginStart: 20, marginEnd: 12 }}
                        onPress={() => navigation.goBack()}
                    />

                    <TitleLabel
                        text={'Personal information'}
                        textBold={true}
                        textColor={COLOR.black}
                        style={{ marginStart: 5, fontSize: 19 }}
                    />
                </View>
                <View style={{ height: 1 }}>
                    <HorizantalLine color={COLOR.horizantal_line} />
                </View>

                <View style={{ marginBottom: hp(5), paddingHorizontal: '6.3%' }}>
                    <TitleLabel
                        text={'Personal information'}
                        textBold={true}
                        textColor={COLOR.black}
                        style={{ fontSize: 17, marginVertical: hp(2) }}
                    />
                    <TitleLabel
                        text={En.PersonalDetails}
                        textColor={COLOR.black}
                        style={{ fontSize: 15 }}
                    />

                </View>
            </ScrollView>
        </View>
    )
}

export default PrivacyPolicy;

const styles = StyleSheet.create({})