import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ServicesScreen from '../Screens/ServicesScreen/Services';
import SelectedServicesScreen from '../Screens/SelectedServicesSreen/SelectedServices'
import BookingScreen from '../Screens/Booking/Booking';
import ConfirmationScreen from '../Screens/ConfirmationScreen/ConfirmationScreen';
import UpdatePassword from '../Screens/SettingsScreen/updatePassword';

const Stack = createStackNavigator()

// Child screens of the services screen
export default function ServicesNav() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='services' component={ServicesScreen} />
            <Stack.Screen name='seleted_services' component={SelectedServicesScreen} />
            <Stack.Screen name='booking' component={BookingScreen} />
            <Stack.Screen name='confirmation' component={ConfirmationScreen} />
        </Stack.Navigator >
    )
}