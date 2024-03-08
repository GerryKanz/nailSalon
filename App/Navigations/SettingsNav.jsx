import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import UpdatePassword from '../Screens/SettingsScreen/updatePassword';
import SettingsScreen from '../Screens/SettingsScreen/Settings';

const Stack = createStackNavigator()

// navigates from settings screen to its child screens
export default function SettingsNav() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='settings' component={SettingsScreen} />
            <Stack.Screen name='update_password' component={UpdatePassword} />
        </Stack.Navigator >
    )
}