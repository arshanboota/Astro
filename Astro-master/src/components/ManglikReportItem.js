import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { COLOR } from '../enums/StyleGuide'
import TextLabel from './widgets/TextLabel'

const ManglikReportItem = (prop) => {
    return (
        <View style={styles.body}>
            <Image style={styles.imgaeStyle} source={prop.image} />
            <TextLabel
                text={prop.name}
                textBold={true}
                textColor={COLOR.black}
                style={{ fontSize: 16 }} />
            <TextLabel
                text={prop.Manglik ? 'Manglik' : 'Non Manglik'}
                textBold={true}
                textColor={prop.Manglik ? COLOR.red : COLOR.green}
                style={{ fontSize: 14 }} />
        </View>
    )
}

export default ManglikReportItem

const styles = StyleSheet.create({
    body: {
        width: '49%',
        alignItems:'center',
    },
    imgaeStyle: {
        height: 130,
        width: 130,
        // borderColor: COLOR.red,
        // borderWidth: 2,
    }
})