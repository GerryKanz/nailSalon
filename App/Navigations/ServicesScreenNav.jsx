// import { View, Text } from 'react-native'
// import React from 'react'
// import { NavigationContainer, StackActions } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from '../Screens/HomeScreen/HomeScreen';
// import ServicesScreen from '../Screens/ServicesScreen/Services';
// import BookingScreen from '../Screens/Booking/Booking';
// import NavTab from './NavTab';

// const Stack = createStackNavigator()


// export default function BookingScreenNav() {

//     const BottomTab = () => {
//         return (
//             <NavTab />
//         )
//     }

//     return (
//         <NavigationContainer>
//             <Stack.Navigator screenOptions={{ headerShown: false }}>
//                 <Stack.Screen name='home' component={NavTab} />
//                 <Stack.Screen name='services' component={ServicesScreen} />
//                 <Stack.Screen name='booking' component={BookingScreen} />
//             </Stack.Navigator >
//         </NavigationContainer>


//     )
// }