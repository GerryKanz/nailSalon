import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import CalendarPicker from "react-native-calendar-picker";
import TimeSlotsData from './timeSlotsData';
import { useNavigation } from '@react-navigation/native';
import dataAPI from '../../DataAPI/dataAPI';

const screen = Dimensions.get('screen')
const timeSlotsData = TimeSlotsData()

export default function TimeSlots() {

    // Declaring react hooks
    const navigation = useNavigation()
    const [selectedDate, setDate] = useState(new Date())
    const [selectedTime, setTime] = useState()
    const [booked, setBooked] = useState([])
    const [availableSlots, setAvailableSlots] = useState({})

    // Gets an array of booked times or unavailable timeslots
    const getTimeSlotsData = () => {
        dataAPI.getBookingsByDate(selectedDate.toISOString().split('T')[0]).then(bookedSlots => {

            let availableBookings = {};
            Object.keys(timeSlotsData).forEach(timeOfDay => {
                availableBookings[timeOfDay] = timeSlotsData[timeOfDay].filter(booking => {
                    // Check if any value of the booking is included in bookedSlots.bookings
                    return !bookedSlots.bookings.some(booked => Object.values(booked).includes(booking));
                });
            });

            console.log('available bookings', availableBookings)
            setAvailableSlots(availableBookings)

        })
    }
    console.log('available slots', availableSlots)




    useEffect(() => {

        getTimeSlotsData()

        if (selectedDate != undefined & selectedTime != undefined) {

            navigation.navigate('confirmation', { time: selectedTime, date: selectedDate.toISOString().split('T')[0] });
            console.log('state after useEffect: ', selectedDate)
        }
    }, [selectedDate, selectedTime, navigation]);

    // console.log('These is your official booked array', booked)

    return (
        <View>
            <View style={styles.Calender}>
                <CalendarPicker
                    onDateChange={setDate}
                    todayBackgroundColor='orange'
                    todayTextStyle={{ color: '#fff' }}
                    selectedDayColor='orange'
                />
            </View>

            <View style={styles.timeContainer} >

                {/* Map dictionary values to Text components */}
                {Object.keys(availableSlots).map((timeOfDay, i) => (
                    <View key={'timeofday' + i}>
                        <Text style={[styles.timeOfDay, styles.stickyHeader]}>{timeOfDay}</Text>
                        <View style={styles.timeSlots}>

                            {/* checks if a slot is in booked slots array, if it is, it will not be displayed */}
                            {availableSlots[timeOfDay].map((time, j) => (
                                booked.includes(time) ? null : (
                                    < TouchableOpacity onPress={() => { setTime(time) }}>
                                        <Text key={j} style={styles.timeText}>
                                            {time}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            ))}
                        </View>
                    </View>
                ))}
            </View>
        </View >

    )
}

const styles = StyleSheet.create({
    Calender: {
        marginTop: 20,
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









