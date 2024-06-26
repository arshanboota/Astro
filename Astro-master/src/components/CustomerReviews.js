import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleLabel from './widgets/TitleLabel'
import TextLabel from './widgets/TextLabel'
import HorizantalLine from './widgets/HorizantalLine'
import { COLOR } from '../enums/StyleGuide'

export default function CustomerReviews(props) {
    const { item } = props

    return (
        <View>
            <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
                <TitleLabel
                    text={item.name}
                    textBold={true}
                    textColor={COLOR.black}
                    style={{ fontSize: 14 }}
                />

                <TextLabel
                    text={item.date}
                    textBold={false}
                    textColor={COLOR.neutral_grey_2}
                    style={{ marginTop: 2, fontSize: 10 }} />

                <TextLabel
                    text={item.description}
                    textBold={false}
                    textColor={COLOR.neutral_grey_2}
                    style={{ marginTop: 8, fontSize: 12 }} />
            </View>

            <HorizantalLine
                color={COLOR.horizantal_line}
            />



        </View>
    )
}
