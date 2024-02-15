import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import ServicesCell from './ServicesCell';

export default function ServicesScreen({ route, navigation }) {

    return (
        <View style={styles.container}>

            <SafeAreaView>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back-outline" size={24} color="black" />
                    <Text>Select Services</Text>
                </TouchableOpacity>

                <View style={styles.services}>
                    <ServicesCell />
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