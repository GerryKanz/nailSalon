import { ScrollView, View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';



export default function UserBookingsScreen({ navigation }) {


    return (
        <View style={styles.container}>
            <SafeAreaView  >
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="arrow-back-outline" size={24} color="black" />
                        <Text>Your services</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bookingsBackground}>
                    <View style={styles.headerMessege}>
                        <Text>Thank you for booking with us</Text>
                    </View>
                    <View style={styles.bookings}>
                        <View style={styles.booking}>
                            <Text>Pedicure: Example booking</Text>
                        </View>
                        <View style={styles.booking}>
                            <Text>Pedicure: Example booking1</Text>
                        </View>
                        <View style={styles.booking}>
                            <Text>Pedicure: Example booking2</Text>
                        </View>
                        <View style={styles.booking}>
                            <Text>Pedicure: Example booking3</Text>
                        </View>
                    </View>
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
    headerMessege: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20
    },
    bookingsBackground: {
        backgroundColor: 'white',
        height: 1000
    },
    bookings: {
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    booking: {
        width: 350,
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 10,
        marginBottom: 10,
        flex: 1
    }
})