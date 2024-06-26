import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLOR, hp, wp } from '../../enums/StyleGuide';
import { Modal } from 'react-native-paper';
import TextLabel from '../widgets/TextLabel';
import CustomButton from '../widgets/CustomButton';
import { Cross } from '../../assets/svg';
import HorizantalLine from '../widgets/HorizantalLine';
import TitleLabel from '../widgets/TitleLabel';

const TabData = [
    { title: 'Sort by' },
    { title: 'Skills' },
    { title: 'Language' },
    { title: 'Gender' },
    { title: 'Country' },
];

const SortbyData = [
    { title: 'Popularity', tabNo: 1, },
    { title: 'Price high to low', tabNo: 1, },
    { title: 'Price low to high', tabNo: 1, },
    { title: 'Ratings and reviews', tabNo: 1, },
]
const SkillsData = [
    { title: 'All', tabNo: 2, },
    { title: 'Wealth', tabNo: 2, },
    { title: 'Health', tabNo: 2, },
    { title: 'Education', tabNo: 2, },
    { title: 'Numerology', tabNo: 2, },
    { title: 'Palmistry', tabNo: 2, },
]
const LanguageData = [

    { title: 'All', tabNo: 3, },
    { title: 'Bengali', tabNo: 3, },
    { title: 'English', tabNo: 3, },
    { title: 'Gujrati', tabNo: 3, },
    { title: 'Kannada', tabNo: 3, },
    { title: 'Marathi', tabNo: 3, },
    { title: 'Punjabi', tabNo: 3, },
]
const GenderData = [
    { title: 'All', tabNo: 4, },
    { title: 'Male', tabNo: 4, },
    { title: 'Female', tabNo: 4, },
]
const CountryData = [
    { title: 'All', tabNo: 5, },
    { title: 'India', tabNo: 5, },
    { title: 'Outside India', tabNo: 5, },

]

const SortAndFilter = ({ visible, onclose }) => {
    // background and setBackground will show the help in changing the color of the tabs
    const [background, setBackground] = useState('Sort by')
    const [selectedData, setselectedData] = useState(SortbyData)
    const [selectedList, setselectedList] = useState(sortbyList)
    const [sortbyList, setSortbyList] = useState([])
    const [skillsList, setSkillsList] = useState([])
    const [laguageList, setlaguageList] = useState([])
    const [genderList, setgenderList] = useState([])
    const [countryList, setcountryList] = useState([])


    const onSelect = (list, item, callback) => {
        // list is first empty and then it will be updated by callback
        // list that we pass to it like sortbyList,skillsList
        let mList   //mList is the updated list
        switch (item.tabNo) {
            case 1:
                list = sortbyList
                callback = setSortbyList
                break;
            case 2:
                list = skillsList
                callback = setSkillsList
                break;
            case 3:
                list = laguageList
                callback = setlaguageList
                break;
            case 4:
                list = genderList
                callback = setgenderList
                break;
            case 5:
                list = countryList
                callback = setcountryList
                break;
            default:
                list = sortbyList
                callback = setSortbyList
                break;
        }

        const exists = list.find((x) => x.title == item.title)
        //  if the titles of list and item are same then that title already exists in the selected list and should be excluded
        if (exists) {
            // by using the same logic that selected item will be deleted from the selected list
            mList = list.filter((x) => x.title != exists.title)
        } else {
            // if titles are not same then item is not selected before and we should add it to the selected items
            // concat will add the item at the last of the list
            mList = list.concat([item])
            // item is the item of the map function
        }
        // callback is the function that we pass and get something in return for example setSortList
        callback(mList)
    }

    // onSelectTab function will help in changing the list of the map fucntion
    const onSelectTab = (_key) => {
        switch (_key) {
            case 'Skills':
                setselectedData(SkillsData)
                break;
            case 'Language':
                setselectedData(LanguageData)
                break;
            case 'Gender':
                setselectedData(GenderData)
                break;
            case 'Country':
                setselectedData(CountryData)
                break;
            case 'Sort by':
                setselectedData(SortbyData)
                break;
            default:
                setselectedData(SortbyData)
                break;
        }
    }

    // iconSelector get the list that is active and item of the list
    // if it exits in the seleted it will return markedIcon image and vice versa
    const iconSelector = (list, item) => {
        const markedIcon = require("../../assets/images//checkbox_marked.png")
        const unMarkedIcon = require("../../assets/images/checkbox_outline.png")
        switch (item.tabNo) {
            case 1:
                list = sortbyList
                break;
            case 2:
                list = skillsList
                break;
            case 3:
                list = laguageList
                break;
            case 4:
                list = genderList
                break;
            case 5:
                list = countryList
                break;
            default:
                list = sortbyList
                break;
        }
        const exists = list.find((x) => x.title == item.title)
        if (exists) {
            return markedIcon
        } else {
            return unMarkedIcon
        }
    }

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

                    <View style={styles.headerView}>
                        <TouchableOpacity onPress={() => { onclose(false) }}>
                            <Cross width={wp(4)} height={hp(3)} style={{ marginStart: 20, marginEnd: 12 }} />
                        </TouchableOpacity>
                        <TitleLabel
                            text={'Sort & Filter'}
                            textBold={true}
                            textColor={COLOR.black}
                            style={{ marginStart: '35%', fontSize: 19 }}
                        />
                    </View>
                    <View style={{ height: 1 }}>
                        <HorizantalLine color={COLOR.horizantal_line} />
                    </View>

                    <View style={styles.mainView}>

                        <View style={{ width: '35%', borderRightWidth: 1, borderColor: COLOR.horizantal_line }}>
                            {TabData.map((item) => (

                                <TouchableOpacity onPress={() => { setBackground(item.title); onSelectTab(item.title) }}>
                                    <View style={[styles.tabView, { backgroundColor: background === item.title ? COLOR.white : COLOR.neutral_grey }]}>
                                        <TitleLabel
                                            text={item.title}
                                            textColor={COLOR.black}
                                            textBold
                                            style={{ fontSize: 16 }}
                                        />
                                    </View>

                                </TouchableOpacity>
                            ))}

                        </View>
                        <View style={{ width: '65%' }}>

                            {selectedData.map((item) => {

                                return (
                                    <View style={{ marginVertical: 15, flexDirection: 'row' }}>

                                        <TouchableOpacity style={{ marginHorizontal: 20 }}
                                            onPress={() => { onSelect(selectedList, item, setselectedList) }}>
                                            <Image source={iconSelector(sortbyList, item)}
                                                style={{ height: 20, width: 20 }}
                                            />
                                        </TouchableOpacity>

                                        <TextLabel
                                            text={item.title}
                                            textColor={COLOR.black}
                                            textBold
                                            style={{ fontSize: 16 }}
                                        />
                                    </View>
                                )
                            })}

                        </View>
                    </View>

                    <View style={styles.buttonView}>
                        <View style={{ width: '40%' }}>
                            <CustomButton
                                text={'Reset'}
                                backgroundColor={COLOR.neutral_grey}
                                textColor={COLOR.black}
                                icon={false}
                                textStyles={{ fontWeight: '600' }}
                                isNoBorder
                                onClick={() => { }}
                            />
                        </View>
                        <View style={{ width: '40%' }}>
                            <CustomButton
                                text={'Apply'}
                                backgroundColor={COLOR.yellow}
                                textColor={COLOR.black}
                                icon={false}
                                textStyles={{ fontWeight: '600' }}
                                isNoBorder
                                onClick={() => { }}
                            />
                        </View>
                    </View>



                </View>
            </View>
        </Modal>
    )
}

export default SortAndFilter

const styles = StyleSheet.create({
    body: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        backgroundColor: COLOR.white,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingBottom: 0,
        paddingTop: 20,
    },
    headerView: {
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center', flexDirection: 'row',
    },
    mainView: {
        marginVertical: 20, flexDirection: 'row',
    },
    tabView: {
        height: 80, width: '100%', justifyContent: 'center', alignItems: 'center',
    },
    buttonView: {
        width: '100%',
        justifyContent: 'space-evenly', flexDirection: 'row',
        paddingTop: 20,
    },
});