import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavTab from './App/Navigations/NavTab';
import ServicesScreenNav from './App/Navigations/ServicesScreenNav'

const Stack = createStackNavigator()

function Services({ route, navigation }) {

  return (
    <View>
    </View>
  )
}

function Booking({ route, navigation }) {

  return (
    <View>
    </View>
  )
}

// function NavigationTab() {
//   return (
//     <NavTab />
//   )
// }

function ServicesNavTab() {
  return (
    <ServicesScreenNav />
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <NavTab />
    </NavigationContainer>
  );
}
