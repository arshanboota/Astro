import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import TextLabel from './widgets/TextLabel';
import { COLOR, hp } from '../enums/StyleGuide';
import { BlackHeart } from '../assets/svg';

const HoroscopeDetails = (props) => {
    return (
        <View style={styles.horoscopeCon}>
            <View style={styles.horoscopeTitleCon}>
                {props.title === "Love" &&
                    <BlackHeart height={hp(4)} width={hp(4)} />
                }
                {props.title === "Career" &&
                    <Image style={{ height: 35, width: 35 }} source={require('../assets/images/Horoscope/Career.png')} />
                }
                {props.title === "Money" &&
                    <Image style={{ height: 35, width: 35 }} source={require('../assets/images/Horoscope/Money.png')} />
                }
                {props.title === "Health" &&
                    <Image style={{ height: 35, width: 35 }} source={require('../assets/images/Horoscope/Health.png')} />
                }
                <TextLabel
                    text={props.title}
                    textColor={COLOR.black}
                    textBold
                    style={{ fontSize: 23, marginLeft: 3, }} />
            </View>
            <TextLabel
                text={props.detail}
                textColor={COLOR.neutral_grey_2}
                style={{ fontSize: 14, lineHeight: 24, }} />
        </View>
    )

}

export default HoroscopeDetails;

const styles = StyleSheet.create({
    horoscopeCon: {
        height: 250,
        width: '90%',
        padding: 20,
        paddingHorizontal: 20,
        backgroundColor: COLOR.white,
        justifyContent: 'space-evenly',
        borderRadius: 20,
        marginTop: 20,
        elevation: 5,
    },
    horoscopeTitleCon: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        // paddingLeft: 10,
    }
})