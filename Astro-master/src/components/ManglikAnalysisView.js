import { StyleSheet, View } from 'react-native';
import React from 'react';
import { No, Yes } from '../assets/svg';
import { COLOR, hp, wp } from '../enums/StyleGuide';
import TextLabel from './widgets/TextLabel';

const ManglikAnalysisView = (prop) => {
    return (
        <View style={styles.mainView}>
            <View style={{ width: '25%', alignItems: 'center' }}>
                {prop.svgIcon === 'Yes' ?
                    <Yes width={wp(10)} height={hp(10)} />
                    :
                    <No width={wp(10)} height={hp(10)} />
                }
            </View>
            <View style={{ width: '75%', paddingHorizontal: 7, }}>
                <TextLabel
                    text={prop.name}
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

export default ManglikAnalysisView;

const styles = StyleSheet.create({
    mainView: {
        width: '90%', alignSelf: 'center', borderRadius: 10,
        backgroundColor: '#FFF7E1',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: '#FFE69B',
        elevation: 2,
    },
})