import { StyleSheet, View } from 'react-native';
import React from 'react';
import { COLOR, hp, wp } from '../../enums/StyleGuide';
import TextLabel from '../../components/widgets/TextLabel';
import CustomButton from '../../components/widgets/CustomButton';
import { SCREEN } from '../../enums/AppEnums';
import HorizantalLine from '../../components/widgets/HorizantalLine';
import { BackArrow } from '../../assets/svg';
import TitleLabel from '../../components/widgets/TitleLabel';

const Kundlli = ({ navigation }) => {
    return (
        <View style={styles.mainScreen}>

            {/* Screen Header */}
            <View style={{ alignItems: 'center', marginTop: 30, flexDirection: 'row', }}>

                <BackArrow width={wp(7)} height={hp(8)} style={{ marginStart: 20, marginEnd: 12 }}
                    onPress={() => navigation.goBack()}
                />

                <TitleLabel
                    text={'Kundlli'}
                    textBold={true}
                    textColor={COLOR.black}
                    style={{ marginStart: 5, fontSize: 19 }}
                />
            </View>
            <View style={{ height: 1 }}>
                <HorizantalLine color={COLOR.horizantal_line} />
            </View>

            {/* kundlliItem View have all the detials of name place,date and time of birth */}
            <View style={styles.kundlliItem}>
                {/* First View having just a text and edit button */}
                <View style={styles.header}>
                    <TextLabel
                        text={'Male'}
                        textColor={COLOR.neutral_grey_2}
                        style={{ fontSize: 15 }} />
                    <CustomButton
                        text={'Edit'}
                        isNoBorder
                        backgroundColor={COLOR.grey}
                        textColor={COLOR.neutral_grey_2}
                        icon={false}
                        textStyles={{ fontSize: 14 }}
                        style={styles.editButton}
                        onClick={() => { }}
                    />
                </View>

                {/* This View has name and place of birth in it */}
                <View style={styles.profileDetailView}>
                    <View style={styles.DataView}>
                        <TextLabel
                            text={'Name'}
                            textColor={COLOR.light_grey}
                            style={{ fontSize: 14 }} />
                        <TextLabel
                            text={'Sunil Sharma'}
                            textColor={COLOR.black}
                            style={{ fontSize: 16 }} />
                    </View>
                    <View style={styles.DataView}>
                        <TextLabel
                            text={'Place of birth'}
                            textColor={COLOR.light_grey}
                            style={{ fontSize: 14 }} />
                        <TextLabel
                            text={'Jaisalmer, Rajasth...'}
                            textColor={COLOR.black}
                            style={{ fontSize: 16 }} />
                    </View>
                </View>

                {/* This View has date of birth and time of birth in it */}
                <View style={styles.profileDetailView}>
                    <View style={styles.DataView}>
                        <TextLabel
                            text={'Date of birth'}
                            textColor={COLOR.light_grey}
                            style={{ fontSize: 14 }} />
                        <TextLabel
                            text={'1992-12-04'}
                            textColor={COLOR.black}
                            style={{ fontSize: 16 }} />
                    </View>
                    <View style={styles.DataView}>
                        <TextLabel
                            text={'Time of birth'}
                            textColor={COLOR.light_grey}
                            style={{ fontSize: 14 }} />
                        <TextLabel
                            text={'05:36 AM'}
                            textColor={COLOR.black}
                            style={{ fontSize: 16 }} />
                    </View>
                </View>
            </View>

            {/* kundlliItem View ends here */}

            {/* Create New Kundli Button */}
            <CustomButton
                text={'Create New Kundli'}
                backgroundColor={COLOR.yellow}
                textColor={COLOR.black}
                icon={false}
                style={styles.newKundlliButton}
                onClick={() => { navigation.navigate(SCREEN.NewKundlli) }}
            />
        </View>
    )
}

export default Kundlli;

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
    kundlliItem: {
        height: 250,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: COLOR.white,
        marginVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 10,
        elevation: 5,
    },
    header: {
        height: '40%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    editButton: {
        height: 40,
        width: 70,
        borderRadius: 10,
    },
    newKundlliButton: {
        height: 55,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 30,
        marginTop: 20,
    },
    profileDetailView: {
        height: '27%',
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    DataView: {
        height: '100%',
        width: '50%',
        justifyContent: 'space-around',
    },
});
