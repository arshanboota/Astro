import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLOR, FONT, hp, wp } from '../../enums/StyleGuide'
import CustomButton from '../../components/widgets/CustomButton'
import { Accept, Reject } from '../../assets/svg'

const IncomingCall = (props) => {
    return (
        <SafeAreaView style={styles.mainConatiner}>
            {/* BRANDING CONTAINER */}
            <View style={styles.brandingContainer}>
                <Text style={styles.txt}>Incoming chat request</Text>
                <Image source={require('../../assets/images/brandingYellow.png')}
                    style={styles.branding}
                    resizeMode="contain"
                />
            </View>
            {/* END */}

            {/* CALLER */}
            <View style={styles.caller}>
                <Image source={require('../../assets/images/SearchResults/user_img.png')}
                    style={styles.avatar}
                />
                <Text style={[styles.txt, styles.name]}>Astro Shukla</Text>
            </View>
            {/* END */}

            {/* BOTTOM BUTTONS */}
            <View style={styles.btnContainer}>
                <CustomButton
                    text={'Reject'}
                    backgroundColor={COLOR.danger}
                    textColor={COLOR.white}
                    isNoBorder={true}
                    svgIcon={<Reject width={wp(4)} height={wp(4)} style={{marginRight: 6}}/>}
                    style={{ height: hp(6.2), marginStart: 10, width: wp(45), borderRadius : 10 }}
                    onClick={() => {}}
                />

                <CustomButton
                    text={'Accept'}
                    backgroundColor={COLOR.success}
                    textColor={COLOR.white}
                    isNoBorder={true}
                    svgIcon={<Accept width={wp(4)} height={wp(4)} style={{marginRight: 6}}/>}
                    style={{ height: hp(6.2), marginStart: 10, width: wp(45), borderRadius : 10 }}
                    onClick={() =>{}}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainConatiner: {
        flex: 1,
        backgroundColor: COLOR.black33
    },
    brandingContainer: {
        alignItems: 'center',
        marginTop: hp(8)
    },
    txt: {
        color: COLOR.white,
        fontFamily: FONT.Satoshi_Bold,
        fontSize: hp(2.9)
    },
    branding: {
        width: wp(38),
        marginTop: hp(1)
    },
    caller: {
        alignItems: 'center',
        position: 'absolute',
        alignSelf: "center",
        top: hp(34)
    },
    avatar: {
        width: wp(35),
        height: wp(32)
    },
    name: {
        fontFamily: FONT.Satoshi_Medium,
        marginTop: hp(1)
    },
    btnContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:0,
        backgroundColor: COLOR.black26,
        paddingTop: hp(2.7),
        paddingBottom: hp(0.7)
    }
})

export default IncomingCall