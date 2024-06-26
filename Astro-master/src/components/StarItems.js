import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Capricon, Aquarius, Sagittarius } from '../assets/svg';
import { COLOR, hp } from '../enums/StyleGuide';
import TextLabel from './widgets/TextLabel';

const StarItems = ({ item }) => {
    return (
        <View style={styles.item}>
            {item.starName === "Capricon" &&
                <Capricon height={hp(11)} width={hp(11)} />
            }
            {item.starName === "Aquarius" &&
                <Aquarius height={hp(11)} width={hp(11)} />
            }
            {item.starName === "Sagittarius" &&
                <Sagittarius height={hp(11)} width={hp(11)} />
            }
            <View style={styles.textCon}>
                <TextLabel
                    text={item.starName}
                    textBold
                    textColor={COLOR.black}
                    style={{ fontSize: 14 }} />
                <TextLabel
                    text={item.date}
                    textColor={COLOR.neutral_grey_2}
                    style={{ fontSize: 12 }} />
            </View>
        </View>
    );
};

export default StarItems;

const styles = StyleSheet.create({
    item: {
        height: '100%',
        width: 130,
        // backgroundColor: 'powderblue',
        // marginRight: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    textCon: {
        alignItems: 'center',
        // backgroundColor:'red',
    }
})