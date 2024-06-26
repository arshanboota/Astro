import { Pressable, StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { COLOR } from '../enums/StyleGuide'
import TextLabel from './widgets/TextLabel'
import CustomButton from './widgets/CustomButton'

const KundlliItem = (prop) => {
    const markedIcon = require("../assets/images/checkbox_marked.png")
    const unMarkedIcon = require("../assets/images/checkbox_outline.png")
    const iconName = prop.isChecked ? markedIcon : unMarkedIcon
    return (
        <View style={styles.kundlliItem}>
            {/* This is the checkmark */}
            <Pressable style={{ height: '10%', marginTop: 20, }}>
                <Image source={iconName}
                    style={styles.icon_view}
                />
            </Pressable>

            {/* This View has text and edit button */}
            <View style={styles.header}>
                <TextLabel
                    text={'Male'}
                    textColor={COLOR.neutral_grey_2}
                    style={{ fontSize: 15 }} />
                <CustomButton
                    text={'Edit'}
                    isNoBorder
                    backgroundColor={COLOR.grey}
                    textColor={COLOR.neutral_grey_2}
                    icon={false}
                    textStyles={{ fontSize: 14 }}
                    style={styles.editButton}
                    onClick={() => { }}
                />
            </View>

            {/* This View has name and place of birth in it */}
            <View style={styles.profileDetailView}>
                <View style={styles.DataView}>
                    <TextLabel
                        text={'Name'}
                        textColor={COLOR.light_grey}
                        style={{ fontSize: 14 }} />
                    <TextLabel
                        text={'Sunil Sharma'}
                        textColor={COLOR.black}
                        style={{ fontSize: 16 }} />
                </View>
                <View style={styles.DataView}>
                    <TextLabel
                        text={'Place of birth'}
                        textColor={COLOR.light_grey}
                        style={{ fontSize: 14 }} />
                    <TextLabel
                        text={'Jaisalmer, Rajasth...'}
                        textColor={COLOR.black}
                        style={{ fontSize: 16 }} />
                </View>
            </View>

            {/* This View has date of birth and time of birth in it */}
            <View style={styles.profileDetailView}>
                <View style={styles.DataView}>
                    <TextLabel
                        text={'Date of birth'}
                        textColor={COLOR.light_grey}
                        style={{ fontSize: 14 }} />
                    <TextLabel
                        text={'1992-12-04'}
                        textColor={COLOR.black}
                        style={{ fontSize: 16 }} />
                </View>
                <View style={styles.DataView}>
                    <TextLabel
                        text={'Time of birth'}
                        textColor={COLOR.light_grey}
                        style={{ fontSize: 14 }} />
                    <TextLabel
                        text={'05:36 AM'}
                        textColor={COLOR.black}
                        style={{ fontSize: 16 }} />
                </View>
            </View>
        </View>


    )
}

export default KundlliItem;

const styles = StyleSheet.create({
    kundlliItem: {
        height: 250,
        maxHeight: 300,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: COLOR.white,
        marginTop:20,
        paddingHorizontal: 15,
        borderRadius: 10,
        elevation: 5,
    },
    icon_view: {
        width: 20,
        height: 20,
    },
    header: {
        height: '20%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        marginTop: 10,
    },
    editButton: {
        height: 40,
        width: 70,
        borderRadius: 10,
    },
    newKundlliButton: {
        height: 55,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 30,
        marginTop: 20,
    },
    profileDetailView: {
        height: '27%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    DataView: {
        height: '100%',
        width: '50%',
        justifyContent: 'space-around',
    },
})