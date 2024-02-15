import { View, Text } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../Screens/SettingsScreen/Settings';
import HomeScreenNav from './HomeScreenNav';
import ServicesScreen from '../Screens/ServicesScreen/Services';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function NavTab() {
    return (

        <Tab.Navigator screenOptions={{
            headerShown: false, tabBarActiveTintColor: '#0802A3', tabBarStyle: {
                backgroundColor: 'white'
            }
        }}>
            <Tab.Screen options={{
                tabBarLabel: ({ color }) => (
                    <Text style={{ color: 'black', fontSize: 12 }}>Home</Text>
                ),
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="home" size={size} color={color} />
                )
            }} name="home" component={HomeScreenNav} />

            <Tab.Screen options={{
                tabBarLabel: ({ color }) => (
                    <Text style={{ color: 'black', fontSize: 12 }}>Settings</Text>
                ),
                tabBarIcon: ({ color, size }) => (
                    <Fontisto name="player-settings" size={size} color={color} />
                )
            }} name="Settings" component={SettingsScreen} />
            <Tab.Screen options={{
                tabBarLabel: ({ color }) => (
                    <Text style={{ color: 'black', fontSize: 12 }}>Services</Text>
                ),
                tabBarIcon: ({ color, size }) => (
                    <Fontisto name="player-settings" size={size} color={color} />
                )
            }} name="services" component={ServicesScreen} />



        </Tab.Navigator>
    )
}