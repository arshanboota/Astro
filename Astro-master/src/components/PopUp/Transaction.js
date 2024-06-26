import { StyleSheet, View } from 'react-native';
import React from 'react';
import { COLOR, wp } from '../../enums/StyleGuide';
import { Modal } from 'react-native-paper';
import TextLabel from '../widgets/TextLabel';
import CustomButton from '../widgets/CustomButton';
import { Failed, Success, Support } from '../../assets/svg';
import HorizantalLine from '../widgets/HorizantalLine';
import CrossCircle from './CrossCircle';
import En from '../../locales/En';

const Transaction = ({ visible, onclose, status }) => {
    return (
        <Modal animationType="slide"
            transparent={true}
            visible={visible}
            onDismiss={() => {
                onclose(false);
            }}

        >
            <View style={{ height: '100%', backgroundColor: COLOR.modal_background_color, }}>

                <View style={styles.body}>
                <CrossCircle  onclose={onclose} />
                    <View style={styles.main}>
                        <HorizantalLine color={COLOR.grey} style={styles.smallBar} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '94%', marginBottom: 20, }}>
                            <TextLabel
                                text={En.transactionTitle}
                                textBold={true}
                                textColor={COLOR.black}
                                style={styles.titleMessage} />

                            {status ?
                                <View style={[styles.statusCon, styles.successView]}>
                                    <TextLabel
                                        text={En.transactionSuccess}
                                        textBold
                                        textColor={COLOR.green}
                                        style={{ fontSize: 14, }} />
                                </View>
                                :
                                <View style={[styles.statusCon, styles.failedView]}>
                                    <TextLabel
                                        text={En.transactionFailed}
                                        textBold
                                        textColor={COLOR.red}
                                        style={{ fontSize: 14, }} />
                                </View>
                            }
                        </View>

                        {status ? <Success /> : <Failed />}

                        <View style={styles.reviewBox}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TextLabel
                                    text={En.transactionIDText}
                                    textColor={COLOR.neutral_grey_2}
                                    style={styles.message} />
                                <TextLabel
                                    text={En.transactionID}
                                    textColor={COLOR.neutral_grey_2}
                                    style={styles.message} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TextLabel
                                    text={En.transactionAmountText}
                                    textColor={COLOR.neutral_grey_2}
                                    style={styles.message} />
                                <TextLabel
                                    text={En.transactionAmount}
                                    textBold={true}
                                    textColor={COLOR.black}
                                    style={styles.message} />
                            </View>
                        </View>
                        <CustomButton
                            text={En.transactionhelp}
                            svgIcon={<Support width={wp(5)} height={wp(5)} />}
                            backgroundColor={COLOR.neutral_grey}
                            textColor={COLOR.service_name}
                            icon={false}
                            isNoBorder
                            style={{ width: 130, height: 50,  marginBottom: 25, }}
                            onClick={() => onclose(false)}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default Transaction;

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
    statusCon: {
        borderRadius: 10,
        opacity: 0.5,
        padding: 8,
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    failedView: {
        borderColor: COLOR.red,
        paddingHorizontal: 15,
        backgroundColor: COLOR.light_red,
    },
    successView: {
        borderColor: COLOR.green,
        paddingHorizontal: 10,
        backgroundColor: COLOR.light_green,
    },
    titleMessage: {
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 40,
    },
    reviewBox: {
        height: 110, width: '94%',
        backgroundColor: COLOR.neutral_grey,
        borderWidth: 0.5,
        borderColor: COLOR.neutral_grey_2,
        marginVertical: 20,
        padding: 20,
        borderRadius: 10,
        justifyContent: 'space-around',
    },
    message: {
        fontSize: 16,
        lineHeight: 20,
    },
});