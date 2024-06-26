import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { COLOR, hp, wp } from '../enums/StyleGuide'
import { PlusIcon, UnknownIcon } from '../assets/svg'
import CustomButton from './widgets/CustomButton'

const MatchMakingCard = (prop) => {
    return (
        <View style={[styles.matchCardView, { transform: [{ rotate: prop.rotate }], }]}>
            <TouchableOpacity activeOpacity={0.85} onPress={() => { }}>
                <View style={styles.circularImageView}>
                    {prop.Image ?
                        <Image style={styles.circularImage} source={prop.Image} />
                        :
                        <UnknownIcon height={hp(10)} width={wp(10)} />
                    }

                </View>
            </TouchableOpacity>

            <CustomButton
                text={'Add details'}
                backgroundColor={COLOR.FFF7E1}
                textColor={COLOR.black}
                svgIcon={<PlusIcon height={hp(5)} width={wp(5)} />}
                style={styles.addDetailsButton}
                onClick={() => { }}
            />

        </View>
    )
}

export default MatchMakingCard

const styles = StyleSheet.create({
    matchCardView: {
        height: 220,
        width: 170,
        backgroundColor: COLOR.white,
        elevation: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    circularImageView: {
        height: 90,
        width: 90,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: COLOR.neutral_grey_2,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circularImage: {
        height: '100%', width: '100%', borderRadius: 100,
    },
    addDetailsButton: {
        height: 50,
        width: 140,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLOR.FFE69B,
    },
})