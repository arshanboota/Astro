import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleLabel from './widgets/TitleLabel'
import TextLabel from './widgets/TextLabel'
import HorizantalLine from './widgets/HorizantalLine'
import { COLOR } from '../enums/StyleGuide'


export default function TransactionItem(props) {
    const { item } = props
    return (
        <View>
            <View style={{  marginVertical: 20 }}>

                <View style={{ flexDirection: 'row' }}>
                    {item.image}


                    <View style={{marginStart: 10}}>
                        <TextLabel
                            text={item.name}
                            textBold={true}
                            textColor={COLOR.black}
                            style={{ marginTop: 2, fontSize: 15 }} />

                        <TextLabel
                            text={item.time}
                            textBold={false}
                            textColor={COLOR.black}
                            style={{ marginTop: 2, fontSize: 10 }} />

                    </View>

                    {/* ///// */}

                    <View style={{marginStart: 10, position:'absolute', end:0}}>
                        <TextLabel
                            text={item.amount}
                            textBold={true}
                            textColor={COLOR.black}
                            style={{ marginTop: 2, fontSize: 16, textAlign: 'center' }} />

                        <TextLabel
                            text={item.status}
                            textBold={true}
                            textColor={COLOR.dark_green}
                            style={{ marginTop: 2, fontSize: 12, textAlign: 'center' }} />

                    </View>

                </View>

            </View>

            <HorizantalLine
                color={COLOR.horizantal_line}
            />
        </View>
    )
}