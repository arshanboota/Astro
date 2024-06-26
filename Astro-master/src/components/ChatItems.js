import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import { COLOR, wp } from '../enums/StyleGuide';
import Status from './Status';
import TextLabel from './widgets/TextLabel';
import { RatingStar } from '../assets/svg';
import En from '../locales/En';

const ChatItems = ({ item }) => {
    return (
        <View style={styles.body}>

            {/* //CALL ID */}
            <View style={styles.firstCon}>
                <TextLabel
                    text={item.title}
                    textBold
                    textColor={COLOR.neutral_grey_2}
                    style={{ fontSize: 14.5 }} />
                <Status status={item.status} />
            </View>


            <View style={styles.secondCon}>
                <View style={styles.detailCon}>
                    <TextLabel
                        text={item.name}
                        textBold
                        textColor={COLOR.black}
                        style={{ fontSize: 18 }} />
                    <TextLabel
                        text={item.time}
                        textColor={COLOR.neutral_grey_2}
                        style={{ fontSize: 14 }} />

                    <View style={styles.startCon}>
                        <RatingStar width={wp(4)} height={wp(4)} />
                        <TextLabel
                            text={item.rating}
                            textColor={COLOR.neutral_grey_2}
                            style={{ fontSize: 14, marginStart: 5 }} />
                    </View>
                </View>
                <Image style={styles.img} source={item.img} />
            </View>


            <View style={styles.thirdCon}>
                <View style={[styles.sessionCon, { width: '34%' }]}>
                    <TextLabel
                        text={En.sessionText}
                        textColor={COLOR.light_grey}
                        style={{ fontSize: 12 }} />
                    <TextLabel
                        text={item.sessionType}
                        textColor={COLOR.black}
                        style={{ fontSize: 12.5, fontWeight: '600' }} />
                </View>
                
                <View style={[styles.sessionCon, { width: '26%' }]}>
                    <TextLabel
                        text={En.durationText}
                        textColor={COLOR.light_grey}
                        style={{ fontSize:  12 }} />
                    <TextLabel
                        text={item.duration}
                        textColor={COLOR.black}
                        style={{ fontSize: 12.5, fontWeight: '600' }} />
                </View>

                <View style={[styles.sessionCon, { width: '40%' }]}>
                    <TextLabel
                        text={En.chargesText}
                        textColor={COLOR.light_grey}
                        style={{ fontSize:  12 }} />
                    <TextLabel
                        text={item.charges}
                        textColor={COLOR.black}
                        style={{ fontSize: 12.5, fontWeight: '600' }} />
                </View>
            </View>
        </View>
    );
};

export default ChatItems;

const styles = StyleSheet.create({
    body: {
        height: 280,
        width: '100%',
        backgroundColor: COLOR.white,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 10,
        elevation: 5,
    },
    firstCon: {
        height: 70,
        width: '93%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    secondCon: {
        height: 100,
        width: '93%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: COLOR.neutral_grey_2,
        paddingBottom: 10
    },
    detailCon: {
        height: 100,
        width: '60%',
        justifyContent: 'space-evenly',
    },
    startCon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        height: 100, width: 100,
    },
    thirdCon: {
        height: 80,
        width: '93%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sessionCon: {
        height: 80,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
