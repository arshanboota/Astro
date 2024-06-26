import { StyleSheet, View } from 'react-native';
import React from 'react';
import { COLOR } from '../enums/StyleGuide';
import TextLabel from './widgets/TextLabel';

const CompatibilityItem = (prop) => {
    return (
        <View style={[styles.mainView, { backgroundColor: prop.backgroundColor, }]}>
            <View style={{ width: '25%', alignItems: 'center' }}>
                {prop.svgIcon && <View style={{ marginEnd: 5 }}>{prop.svgIcon}</View>}
            </View>
            <View style={{ width: '75%', paddingHorizontal: 7, }}>
                <TextLabel
                    text={prop.title}
                    textBold
                    textColor={COLOR.black}
                    style={{ fontSize: 15, marginVertical: 5, }} />
                <TextLabel
                    text={prop.discription}
                    textColor={COLOR.neutral_grey_2}
                    style={{ fontSize: 14, marginVertical: 5, }} />
            </View>
        </View>
    )
}

export default CompatibilityItem

const styles = StyleSheet.create({
    mainView: {
        width: '90%', alignSelf: 'center', borderRadius: 10,
        backgroundColor: '#FFF7E1',
        marginVertical:10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: '#FFE69B',
        elevation: 2,
    },
})