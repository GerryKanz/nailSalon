import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import ServicesCell from './ServicesCell';
import Header from '../../Components/Header';

const screen = Dimensions.get('screen')
export default function ServicesScreen({ route, navigation }) {
    let bookingComplete = ''

    if (route.params) {
        bookingComplete = route.params.bookingComplete
        console.log('booking complete_______', bookingComplete)
    }


    return (
        <View style={styles.container}>

            <SafeAreaView>
                <Header name='Select Services' nav={navigation} />

                <View style={styles.services}>
                    <ServicesCell bookingComplete={bookingComplete} />
                </View>
            </SafeAreaView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color = 'rgba(255, 167, 64, 0.1)',

    },
    backButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        gap: 10,
    },
    services: {
        // margin: 'auto'
    }
})