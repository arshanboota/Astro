import { StyleSheet, View } from 'react-native';
import React from 'react';
import { COLOR, hp, wp } from '../../enums/StyleGuide';
import { BackArrow } from '../../assets/svg';
import TitleLabel from '../../components/widgets/TitleLabel';
import HorizantalLine from '../../components/widgets/HorizantalLine';
import CustomButton from '../../components/widgets/CustomButton';
import KundlliItem from '../../components/KundlliItem';
import { ScrollView } from 'react-native-gesture-handler';
import { SCREEN } from '../../enums/AppEnums';

const SelectKundlli = ({ navigation }) => {
    return (
        <View style={styles.mainScreen}>
            {/* Screen Header */}
            <View style={{ alignItems: 'center', marginTop: 30, flexDirection: 'row' }}>

                <BackArrow width={wp(7)} height={hp(8)} style={{ marginStart: 20, marginEnd: 12 }}
                    onPress={() => navigation.goBack()}
                />

                <TitleLabel
                    text={'Match making'}
                    textBold={true}
                    textColor={COLOR.black}
                    style={{ marginStart: 5, fontSize: 19 }}
                />
            </View>
            <View style={{ height: 1 }}>
                <HorizantalLine color={COLOR.horizantal_line} />
            </View>

            <View style={{ height: '75%' }}>
                <ScrollView>
                    <KundlliItem isChecked />
                    <KundlliItem isChecked />
                    <KundlliItem />
                    <KundlliItem isChecked />
                </ScrollView>

            </View>

            <View style={{ height: 1 }}>
                <HorizantalLine color={COLOR.horizantal_line} />
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <CustomButton
                    long={true}
                    text={'Confirm profiles'}
                    backgroundColor={COLOR.yellow}
                    textColor={COLOR.black}
                    icon={false}
                    style={{ marginBottom: -5, width: '100%', marginTop: 15, marginBottom: 15 }}
                    onClick={() => navigation.navigate(SCREEN.COMPATIBILITY)}
                />
            </View>

        </View>
    )
}

export default SelectKundlli;

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
})