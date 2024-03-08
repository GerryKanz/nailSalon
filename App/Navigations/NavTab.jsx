import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../Screens/SettingsScreen/Settings';
import HomeNav from './HomeNav';
import ServicesScreen from '../Screens/ServicesScreen/Services';
import UserBookingsScreen from '../Screens/UserBookingsScreen/userBookings';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SettingsNav from './SettingsNav';
import ServicesNav from './ServicesNav';


const Tab = createBottomTabNavigator();

export default function NavTab() {
    return (

        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#0802A3',
            tabBarStyle: {
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
            }} name="Home" component={HomeNav} />


            <Tab.Screen options={{
                tabBarLabel: ({ color }) => (
                    <Text style={{ color: 'black', fontSize: 12 }}>Services</Text>
                ),
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="opencart" size={22} color={color} />
                )
            }} name="services" component={ServicesNav} />

            <Tab.Screen options={{
                tabBarLabel: ({ color }) => (
                    <Text style={{ color: 'black', fontSize: 12 }}>Appointments</Text>
                ),
                tabBarIcon: ({ color, size }) => (
                    <Fontisto name="preview" size={22} color={color} />
                )
            }} name="userBookingsDisplay" component={UserBookingsScreen} />

            <Tab.Screen options={{
                tabBarLabel: ({ color }) => (
                    <Text style={{ color: 'black', fontSize: 12 }}>Account</Text>
                ),
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account-circle-outline" size={26} color={color} />
                )
            }} name="Settings" component={SettingsNav} />
        </Tab.Navigator>
    )
}