import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR } from '../../enums/StyleGuide';
import { Modal } from 'react-native-paper';
import TextLabel from '../widgets/TextLabel';
import CustomButton from '../widgets/CustomButton';
import HorizantalLine from '../widgets/HorizantalLine';
import CrossCircle from './CrossCircle';
import En from '../../locales/En';

const Balance = ({ visible, onclose }) => {
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
                            text={En.balanceTitle}
                            textBold={true}
                            textColor={COLOR.black}
                            style={styles.titleMessage} />

                        <View style={styles.availableCon}>
                            <TextLabel
                                text={En.avialable}
                                textBold={true}
                                textColor={COLOR.neutral_grey_2}
                                style={{ fontSize: 18 }} />
                            <TextLabel
                                text={En.balanceAmount}
                                textBold={true}
                                textColor={COLOR.red}
                                style={{ fontSize: 18 }} />
                        </View>

                        <View style={styles.reviewBox}>
                            <Text style={styles.message}>{En.balancemessage1}<Text style={styles.amountTxt}>{En.miniBalance}</Text>{En.balancemessage2}</Text>
                        </View>

                        <View style={{ justifyContent: 'space-evenly' }}>
                            <CustomButton
                                text={En.topup}
                                isNoBorder
                                backgroundColor={COLOR.green}
                                textColor={COLOR.white}
                                icon={false}
                                style={{ width: 350, height: 60, }}
                                onClick={() => console.log('Button Pressed')}
                            />
                            <CustomButton
                                text={En.cancel}
                                isNoBorder
                                backgroundColor={COLOR.grey}
                                textColor={COLOR.black}
                                icon={false}
                                style={{ width: 350, height: 60,  marginBottom: 25, }}
                                onClick={() => onclose(false)}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default Balance;

const styles = StyleSheet.create({
    body: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
    },
    main: {
        width: '100%',
        backgroundColor: 'white',
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
    titleMessage: {
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 40,
    },
    availableCon: {
        width: '91%',
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    reviewBox: {
        height: 110, width: '94%',
        backgroundColor: COLOR.grey,
        marginVertical: 20,
        padding: 20,
        borderRadius: 10,
    },
    message: {
        fontSize: 15,
        color: COLOR.neutral_grey_2,
        lineHeight: 22,
    },
    amountTxt: {
        color: 'black', fontWeight: '700',
    },
});