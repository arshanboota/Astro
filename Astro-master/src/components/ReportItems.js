import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import { COLOR } from '../enums/StyleGuide';
import TextLabel from './widgets/TextLabel';
import CustomButton from './widgets/CustomButton';

const ReportItems = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={item.img} />
            <View style={styles.textCon}>
                <TextLabel
                    text={item.name}
                    textColor={COLOR.black}
                    style={{ fontSize: 16, fontWeight: '600', }} />
                <TextLabel
                    text={item.time}
                    textColor={COLOR.neutral_grey_2}
                    style={{ fontSize: 14, fontFamily: 'sans-serif', }} />
            </View>
            
            <CustomButton
                text={'Unblock'}
                backgroundColor={COLOR.grey}
                textColor={COLOR.black}
                isNoBorder={true}
                style={styles.blockBtn}
                textStyles={{ fontSize: 14 }}
                onClick={() => { console.log('Unblock Button Pressed') }}
            />
        </View>
    );
};

export default ReportItems;

const styles = StyleSheet.create({
    container: {
        height: 90,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: COLOR.light_grey,
    },
    textCon: {
        height: '70%',
        justifyContent: 'space-around',
    },
    img: {
        height: 70, width: 70,
    },
    blockBtn: {
        height: 45,
        width: 100,
        borderRadius: 10,
    },
});
