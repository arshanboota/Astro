import { StyleSheet, View } from 'react-native';
import React from 'react';
import { COLOR } from '../enums/StyleGuide';
import En from '../locales/En';
import TextLabel from './widgets/TextLabel';

const Status = ({ status }) => {
    return (
        <View>
            {status ?
                <View style={[styles.statusCon, styles.successView]}>
                    <TextLabel
                        text={En.transactionSuccess}
                        textBold
                        textColor={COLOR.green}
                        style={{ fontSize: 16 }} />
                </View>
                :
                <View style={[styles.statusCon, styles.failedView]}>
                    <TextLabel
                        text={En.transactionFailed}
                        textBold
                        textColor={COLOR.red}
                        style={{ fontSize: 16 }} />
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    statusCon: {
        paddingVertical: 10,
        borderRadius: 10,
        opacity: 0.5,
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    failedView: {
        borderColor: COLOR.red,
        paddingHorizontal: 20,
        backgroundColor: COLOR.light_red,
    },
    successView: {
        borderColor: COLOR.green,
        paddingHorizontal: 18,
        backgroundColor: COLOR.light_green,
    },
})

export default Status;