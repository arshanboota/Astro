import { StyleSheet, View } from 'react-native'
import React from 'react'
import { BackArrow, UnknownIcon } from '../../assets/svg'
import { COLOR, hp, wp } from '../../enums/StyleGuide'
import HorizantalLine from '../../components/widgets/HorizantalLine'
import TitleLabel from '../../components/widgets/TitleLabel'
import CustomButton from '../../components/widgets/CustomButton'
import MatchMakingCard from '../../components/MatchMakingCard'
import { SCREEN } from '../../enums/AppEnums'

const MatchMaking = ({ navigation }) => {
    return (
        <View style={styles.mainScreen}>

            {/* Screen Header */}
            <View style={{ height: '8%', alignItems: 'center', marginTop: 30, flexDirection: 'row', }}>

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

            <View style={styles.MainCenterView}>

                <View style={styles.MatchMakingView}>
                    <MatchMakingCard rotate={'-10deg'}
                    />
                    <MatchMakingCard rotate={'10deg'}
                        svgIcon={<UnknownIcon height={hp(10)} width={wp(10)} />} />
                </View>

            </View>

            <View>

                <CustomButton
                    text={'Match Kundli'}
                    backgroundColor={COLOR.yellow}
                    textColor={COLOR.black}
                    style={styles.matchKundliButton}
                    onClick={() => { navigation.navigate(SCREEN.ADDDETAILS) }}
                />
            </View>

        </View>
    )
}

export default MatchMaking

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
    matchKundliButton: {
        height: 55,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 30,
        marginTop: 20,
    },
    MainCenterView: {
        height: '75%', alignItems: 'center',
        justifyContent: 'center',
    },
    MatchMakingView: {
        height: 350,
        width: 350,
        flexDirection: 'row',
        backgroundColor: COLOR.FFF7E1,
        borderRadius: 200,
        borderWidth: 4,
        borderColor: COLOR.FFE69B,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});