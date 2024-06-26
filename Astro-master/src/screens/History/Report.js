import { StyleSheet, View } from 'react-native';
import React from 'react';
import { COLOR } from '../../enums/StyleGuide';
import { ScrollView } from 'react-native-gesture-handler';
import ReportItems from '../../components/ReportItems';
import TextLabel from '../../components/widgets/TextLabel';
import En from '../../locales/En';

const ARRAY = [
    { key: '1', name: 'Priyaanka Sharma', time: '2-09-22, 09:37 pm',img:require('../../assets/images/SearchResults/user_img.png') },
    { key: '2', name: 'Priyaanka Sharma', time: '2-09-22, 09:37 pm',img:require('../../assets/images/SearchResults/user_img.png') },
    { key: '3', name: 'Priyaanka Sharma', time: '2-09-22, 09:37 pm',img:require('../../assets/images/SearchResults/user_img.png') },
    { key: '4', name: 'Priyaanka Sharma', time: '2-09-22, 09:37 pm',img:require('../../assets/images/SearchResults/user_img.png') },
    { key: '5', name: 'Priyaanka Sharma', time: '2-09-22, 09:37 pm',img:require('../../assets/images/SearchResults/user_img.png') },
    { key: '6', name: 'Priyaanka Sharma', time: '2-09-22, 09:37 pm',img:require('../../assets/images/SearchResults/user_img.png') },
    { key: '7', name: 'Priyaanka Sharma', time: '2-09-22, 09:37 pm',img:require('../../assets/images/SearchResults/user_img.png') },
]

const Report = () => {
    return (
        <View style={styles.body}>
            <View style={styles.headTxt}>
                <TextLabel
                    text={En.reportText}
                    textBold
                    textColor={COLOR.black}
                    style={{ fontSize: 16, width:230}} />
                <TextLabel
                    text={En.astrologers}
                    textColor={COLOR.neutral_grey_2}
                    style={{ fontSize: 15 }} />
            </View>
            <View style={{ flex: 1, }}>
                <ScrollView>
                    <View style={{ paddingBottom: 50 }}>
                        {ARRAY.map((item, index) => {
                            return (
                                <View key={item.key} style={styles.ListItemCon}>
                                    <ReportItems item={item} />
                                </View>
                            );
                        })}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default Report;

const styles = StyleSheet.create({
    body: {
        flex: 1, backgroundColor: COLOR.white,
    },
    headTxt: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    ListItemCon: {
        width: '90%',
        marginBottom: 20,
        alignSelf: 'center',
    },
});
