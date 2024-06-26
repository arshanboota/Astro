import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleLabel from './widgets/TitleLabel'
import { COLOR } from '../enums/StyleGuide'


export default function SocialRecord(props) {

    const { item } = props

    return (
        <View style={{ flexDirection: 'row', justifyContent:'center'}}>
            {item.image}
            <View>
                <TitleLabel
                    text={'7230'}
                    textBold={true}
                    textColor={COLOR.black}
                    style={{ fontSize: 14 }}
                />
                  <TitleLabel
                    text={'mins'}
                    textBold={true}
                    textColor={COLOR.black}
                    style={{ fontSize: 11 }}
                />
            </View>
        </View>
    )
}
