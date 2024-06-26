import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { wp } from '../../enums/StyleGuide';
import { Cross } from '../../assets/svg';

const CrossCircle = ({onclose}) => {
    return (
        <TouchableOpacity onPress={()=>{onclose(false)}}>
            <View style={styles.crossCircle}>
                <Cross width={wp(4)} height={wp(4)} />
            </View>
        </TouchableOpacity>
    )
}

export default CrossCircle;

const styles = StyleSheet.create({
    crossCircle: {
        height: 50, width: 50,
        backgroundColor: 'white',
        borderRadius: 30,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
})