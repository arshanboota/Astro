import { StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { COLOR } from '../../enums/StyleGuide';
import { Modal } from 'react-native-paper';
import TextLabel from '../widgets/TextLabel';
import CustomButton from '../widgets/CustomButton';
import HorizantalLine from '../widgets/HorizantalLine';
import CrossCircle from './CrossCircle';
import En from '../../locales/En';
// import StarRating from 'react-native-star-rating';

const RateChat = ({ visible, onclose }) => {
    const [rating, setRating] = useState('0');
    return (
        <Modal animationType="slide" transparent={true} visible={visible}
            onDismiss={() => {
                onclose(false);
            }}
        >
            <View style={{ height: '100%', backgroundColor: COLOR.modal_background_color, }}>
                <View style={styles.body}>
                <CrossCircle  onclose={onclose} />
                    <View style={styles.main}>
                        <HorizantalLine color={COLOR.grey} style={styles.smallBar} />
                        <TextLabel
                            text={En.rateTitle}
                            textBold={true}
                            textColor={COLOR.black}
                            style={styles.messageTitle} />
                        {/* <Rating
                            ratingCount={5}
                            onFinishRating={(vlaue) => setRating(vlaue)}
                            ratingContainerStyle={{ paddingVertical: 100,backgroundColor:'red', marginRight:500, }}
                            starContainerStyle = {{marginHorizontal:50,backgroundColor:'red'}}
                        /> */}
                        {/* <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={3}
                            selectedStar={(rating) => setRating(rating)}
                        /> */}

                        <View style={styles.RatingTxtCon}>
                            <TextLabel
                                text={En.least}
                                textBold={true}
                                textColor={COLOR.neutral_grey_2}
                                style={styles.smallTxt} />
                            <TextLabel
                                text={En.most}
                                textBold={true}
                                textColor={COLOR.neutral_grey_2}
                                style={styles.smallTxt} />
                        </View>
                        {/* {rating != 0 && */}
                        <View style={styles.reviewBox}>
                            <TextInput style={{ fontSize: 16 }} placeholder={En.reviewPlaceHolder} />
                        </View>
                        {/* } */}
                        <CustomButton
                            text={En.continueBtn}
                            backgroundColor={COLOR.yellow}
                            textColor={COLOR.black}
                            icon={false}
                            style={{ width: 350, height: 60, marginBottom: 25, }}
                            onClick={() => console.log('button Pressed')}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default RateChat;

const styles = StyleSheet.create({
    body: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
    },
    main: {
        width: '100%',
        backgroundColor: COLOR.white,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 10,
        paddingBottom:0,
        elevation: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    smallBar: {
        height: 7,
        width: 40,
        marginVertical: 10,
        borderRadius: 5,
    },
    messageTitle: {
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 40,
    },
    smallTxt: {
        fontSize: 14,
        fontWeight: '300',
        marginBottom: 10,
    },
    RatingTxtCon: {
        width: '80%', justifyContent: 'space-between', flexDirection: 'row',
        // backgroundColor:'red',
    },
    reviewBox: {
        height: 150, width: '94%',
        backgroundColor: COLOR.grey,
        marginVertical: 20,
        padding: 10,
        borderRadius: 10,
    },
})