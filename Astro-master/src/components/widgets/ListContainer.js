import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { COLOR, FONT, hp } from '../../enums/StyleGuide';

const ListContainer = ({
    children,
    style,
    title,
    onClick,
    textstyle,
    noBar,
    onpress = () => { }
}) => {

    return (
        <>
            <View
                style={[{marginTop: hp(4)}, style]}>
                    {noBar?null : <View style={styles.bar}></View>}
                <View style={styles.rowContainer}>
                    <Text  style={[styles.title,textstyle]}>{title}</Text>
                    <TouchableOpacity
                        onPress={() => onClick()}
                    >
                        <Text style={styles.seeall}>see all</Text>
                    </TouchableOpacity>

                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingLeft: '5%' }}
                >
                    {children}
                </ScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    bar: {
        width: '100%',
        height: hp(1.3),
        backgroundColor: COLOR.neutral_grey,
        marginBottom: hp(5)
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5%',
        marginBottom: hp(2)
    },
    title: {
        fontFamily: FONT.Satoshi_Bold,
        fontSize: hp(2.2),
        color: COLOR.black,
    },
    seeall: {
        fontFamily: FONT.Satoshi_Medium,
        fontSize: hp(2),
        color: COLOR.yellow,
    }
})

export default ListContainer;
