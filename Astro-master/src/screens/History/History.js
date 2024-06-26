
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chat from './Chat';
import Call from './Call';
import Report from './Report';
import AppHeader from '../../components/Headers/AppHeader';
import { COLOR } from '../../enums/StyleGuide';
import { SCREEN } from '../../enums/AppEnums';

const Tab = createMaterialTopTabNavigator();

const History = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headCon}>
                <AppHeader title={"History"} />
            </View>
            <View style={{ height: '90%' }}>
                <Tab.Navigator
                    screenOptions={{
                        tabBarStyle: { elevation: 0 },
                        tabBarLabelStyle: { fontSize: 17, textTransform: 'capitalize', fontWeight: '600' },
                        tabBarIndicatorStyle: { backgroundColor: COLOR.black },
                        tabBarItemStyle: { borderBottomColor: COLOR.white, elevation: 0, borderBottomWidth: 0 },
                    }}>
                    <Tab.Screen name={SCREEN.Call} component={Call} />
                    <Tab.Screen name={SCREEN.Chat} component={Chat} />
                    <Tab.Screen name={SCREEN.Report} component={Report} />
                </Tab.Navigator>
            </View>
        </View>
    );
};

export default History;

const styles = StyleSheet.create({
    headCon: {
        height: '10%',
        width: '100%',
        backgroundColor: COLOR.white,
        borderBottomWidth: 2,
        borderColor: COLOR.grey,
        paddingBottom: 20,
    },
});
