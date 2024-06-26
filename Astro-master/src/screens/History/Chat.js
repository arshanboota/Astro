import { StyleSheet, View } from 'react-native';
import React from 'react';
import { COLOR } from '../../enums/StyleGuide';
import { ScrollView } from 'react-native-gesture-handler';
import ChatItems from '../../components/ChatItems';

const ARRAY = [
    {
        key: '1', title: '#123TRANSACTIONID', name: 'Priyaanka Sharma', time: '2-09-22, 09:37 pm', status: true,
        rating: '4.85 (123)', sessionType: 'FREE SESSION', duration: '30 seconds', charges: '₹100 Deducted',
        img:require('../../assets/images/SearchResults/user_img.png')
    },
    {
        key: '2', title: '#123TRANSACTIONID', name: 'Priyaanka Sharma', time: '10-11-23, 01:30 pm',
        rating: '4.85 (123)', sessionType: 'FREE SESSION', duration: '60 seconds', charges: '₹90 Deducted',
        img:require('../../assets/images/SearchResults/user_img.png')
    },
    {
        key: '3', title: '#123TRANSACTIONID', name: 'Priyaanka Sharma', time: '10-11-23, 01:30 pm', status: true,
        rating: '4.85 (123)', sessionType: 'FREE SESSION', duration: '60 seconds', charges: '₹90 Deducted',
        img:require('../../assets/images/SearchResults/user_img.png')
    },
    {
        key: '4', title: '#123TRANSACTIONID', name: 'Priyaanka Sharma', time: '10-11-23, 01:30 pm', status: true,
        rating: '4.85 (123)', sessionType: 'FREE SESSION', duration: '60 seconds', charges: '₹90 Deducted',
        img:require('../../assets/images/SearchResults/user_img.png')
    },
];

const Chat = () => {
    return (
        <View style={styles.body}>
            <ScrollView style={styles.main}>

                <View style={{ paddingBottom: 50 }}>
                    {ARRAY.map((item, index) => {
                        return (
                            <View key={item.key} style={styles.chatItemCon}>
                                <ChatItems item={item} />
                            </View>
                        );
                    })}
                </View>

            </ScrollView>
        </View>
    );
};

export default Chat;

const styles = StyleSheet.create({
    body: {
        flex: 1, backgroundColor: COLOR.white,
    },
    headCon: {
        width: '100%',
        backgroundColor: COLOR.white,
        borderBottomWidth: 1,
        borderColor: COLOR.neutral_grey_2,
        paddingBottom: 20,
    },
    main: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 200,
    },
    chatItemCon: {
        width: '90%',
        marginTop:5,
        marginBottom: 20,
        alignSelf: 'center',
    },
});
