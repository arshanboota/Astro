import { Pressable, StyleSheet, View, Image } from "react-native";
import React from "react";
import { height } from "../../enums/StyleGuide";
import TextLabel from '../../components/widgets/TextLabel'  
import { COLOR } from "../../enums/StyleGuide";

const CheckBox = (props) => {

    const { isChecked, title, style } = props

    const markedIcon = require("../../assets/images/checkbox_marked.png")
    const unMarkedIcon = require("../../assets/images/checkbox_outline.png")

    const iconName = isChecked ? markedIcon : unMarkedIcon

    return (
        <View style={[styles.container, { backgroundColor : isChecked ? COLOR.yellow : COLOR.grey}, style]}>
            <Pressable onPress={props.onPress}>
                <Image source={iconName}
                    style={styles.icon_view}
                />
            </Pressable>

            <TextLabel
                text={title}
                // textBold={true}
                textColor={COLOR.black}
                style={{fontSize: 17, marginStart: 10}}
            />
        </View>
    );
};

export default CheckBox;

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width : '47%',
        height: height * 0.08,
        marginTop: 5,
        borderRadius: 6,
        paddingStart: 25,
        
    },
 
    icon_view: {
        width: 20,
        height: 20,

    },
});