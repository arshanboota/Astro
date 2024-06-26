import { StyleSheet, View } from 'react-native'
import React from 'react'
import { COLOR } from '../../enums/StyleGuide';
import { Modal } from 'react-native-paper';
import TextLabel from '../widgets/TextLabel';
import CustomButton from '../widgets/CustomButton';
import HorizantalLine from '../widgets/HorizantalLine';
import CrossCircle from './CrossCircle';
import En from '../../locales/En';

const EndChat = ({ visible, onclose }) => {
    return (
        <Modal animationType="slide" visible={visible}
            onDismiss={() => {
                onclose(false);
            }}
            transparent={true}
        >
            <View style={{ height: '100%', backgroundColor: COLOR.modal_background_color, }}>
                <View style={styles.body}>
                    <CrossCircle  onclose={onclose} />
                    <View style={styles.main}>
                        <HorizantalLine color={COLOR.grey} style={styles.smallBar} />
                        <TextLabel
                            text={En.endTitle}
                            textBold={true}
                            textColor={COLOR.neutral_grey_2}
                            style={styles.warnMessage} />
                        <TextLabel
                            text={En.subTitle}
                            textColor={COLOR.black}
                            style={styles.message} />
                        <View style={{ justifyContent: 'space-evenly' }}>
                            <CustomButton
                                text={En.endButtonTxt}
                                backgroundColor={COLOR.red}
                                textColor={COLOR.white}
                                icon={false}
                                style={{ width: 350, height: 60, }}
                                onClick={() => onclose(false)}
                            />
                            <CustomButton
                                text={En.continuechatBtn}
                                backgroundColor={COLOR.grey}
                                textColor={COLOR.black}
                                icon={false}
                                style={{ width: 350, height: 60,  marginBottom: 25, }}
                                onClick={() => console.log('Button Pressed')}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default EndChat;

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
    warnMessage: {
        fontSize: 24,
        color: COLOR.black,
        fontWeight: '500',
        textAlign: 'center',
        lineHeight: 40,
    },
    message: {
        fontSize: 15,
        marginVertical: 15,
    }
})