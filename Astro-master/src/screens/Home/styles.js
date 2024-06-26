import { StyleSheet } from "react-native";
import { COLOR, FONT, hp, width, wp } from "../../enums/StyleGuide";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLOR.white
    },

    listContainer: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: '5%',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginVertical: hp(2)
    },
    carouselconetainer: {
        width: width,
        height: width * 0.9,
    },

    bgcImage: {
        width: width,
        position: 'absolute',
        bottom: 0
    },
    carousel: {
        position: 'absolute',
        bottom: width * 0.12
    },
    activeDot: {
        width: 8,
        height: 8,
        borderRadius: 5,
        backgroundColor: COLOR.white,
        marginHorizontal: -20,
    },
    absoluteBottom: {
        position: 'absolute',
        bottom: - width * 0.04,
        alignSelf: "center"
    },
    imageBackground: {
        width: width,
        height: width * 1.2,
        marginTop: hp(5),
        paddingVertical: hp(3),
        alignItems: 'center',
    },
    textBtn: {
        color: COLOR.white,
        fontSize: hp(2.3)
    },
    idea: {
        fontFamily: FONT.Satoshi_Bold,
        fontSize: hp(3),
        color: COLOR.black
    },
    body: {
        fontFamily: FONT.Satoshi_Medium,
        fontSize: hp(2.5),
        color: COLOR.black,
        maxWidth: width * 0.7,
        textAlign: 'center'
    },
    imageBGContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    referalContainer: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '5%',
        paddingVertical: 10
    },
    referal: {
        fontSize: hp(2.8),
        maxWidth: wp(45)
    },
    reward: {
        fontFamily: FONT.Satoshi_Medium,
        color: "#545454",
        fontSize: hp(1.8)
    },
    footerContainer: {
        alignItems: 'center'
    },
    footer: {
        fontSize: hp(2.2),
        color: "#626262",
        textAlign: 'center',
        maxWidth: wp(80),
        marginTop: hp(2),
        marginBottom: hp(6)
    }
})

export { styles }