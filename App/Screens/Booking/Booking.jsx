import { ScrollView, View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Calendar from './Calendar';
import TimeSlots from './TimeSlots';


const screen = Dimensions.get('screen')

export default function BookingScreen({ route, navigation }) {
    const { services } = route.params

    const [date, setDate] = useState()
    const [time, setTime] = useState()

    // this will be called as prop in timeslot component to pass data from child to parent 
    const getTimeCallBack = (timeSelected) => {
        return (
            setTime(timeSelected)
        )
    }

    const getDateCallBack = (dateSelected) => {
        return (
            setDate(dateSelected)
        )
    }

    return (
        <View style={styles.container}>
            <SafeAreaView >
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="arrow-back-outline" size={24} color="black" />
                        <Text>Booking</Text>
                    </TouchableOpacity>

                    <View style={styles.DateAndTimeContainerBackround}>
                        <View style={styles.DateAndTimeContainer}>
                            <ScrollView>
                                {/* <Calendar handleGetDateCallBack={getDateCallBack} /> */}
                                <TimeSlots userServices={services} handleGetTimeCallBack={getTimeCallBack} />
                            </ScrollView>

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
    DateAndTimeContainerBackround: {
        height: screen.height,
        backgroundColor: '#fff'
    },
    DateAndTimeContainer: {
        width: screen.width * 0.98,
        paddingHorizontal: screen.width * 0.02
    },
    backButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        gap: 10,
    },
    Calender: {
        marginTop: 20,
        // backgroundColor: color = 'rgba(255, 167, 64, 0.1)',
    },
    timeContainer: {
        paddingBottom: screen.height * 0.68
    },
    timeOfDay: {
        marginTop: 35,
        paddingBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    timeSlots: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '10',
        justifyContent: 'flex-start',

    },
    timeText: {
        width: 52,
        borderColor: 'orange',
        borderRadius: 3,
        textAlign: 'center',
        borderWidth: 1,
        paddingTop: 4,
        paddingBottom: 4,
    }
})