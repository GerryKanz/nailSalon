import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import CalendarPicker from "react-native-calendar-picker";
import TimeSlotsData from './timeSlotsData';
import { useNavigation } from '@react-navigation/native';
import dataAPI from '../../DataAPI/dataAPI';

const screen = Dimensions.get('screen')
const timeSlotsData = TimeSlotsData()

export default function TimeSlots(props) {
    // const userServices = props.userServices

    // Declaring react hooks
    const navigation = useNavigation()
    const [selectedDate, setDate] = useState(new Date())
    const [selectedTime, setTime] = useState()
    const [booked, setBooked] = useState([])
    const [availableSlots, setAvailableSlots] = useState({})

    console.log("from props.userServices", props.userServices)

    // Gets an array of booked times or unavailable timeslots
    const getTimeSlotsData = () => {
        dataAPI.getBookingsByDate(selectedDate.toISOString().split('T')[0]).then(bookedSlots => {

            let availableBookings = {}
            Object.keys(timeSlotsData).forEach(timeOfDay => {

                availableBookings[timeOfDay] = timeSlotsData[timeOfDay].filter(booking => {
                    // Check if any value of the booking is included in bookedSlots.bookings
                    return !bookedSlots.bookings.some(booked => Object.values(booked).includes(booking))
                })
            })
            console.log('available bookings', availableBookings)
            setAvailableSlots(availableBookings)
        })
    }
    console.log('available bookings', availableSlots)

    //check if there is enough time for a slot to be bookable
    const adjustTime = (bookedTime) => {

        // Split the time string into hours and minutes
        let [hours, minutes] = bookedTime.split(":").map(Number);

        // Increment the minutes by 30
        minutes += 30;

        // Adjust the hours and minutes if the time overlaps into the next hour
        if (minutes >= 60) {
            minutes -= 60;
            hours++;
        }
        // add zeros at the end of each adjusted time 
        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');

        const result = `${hours}:${minutes}`
        return (result)


    }

    useEffect(() => {

        getTimeSlotsData()

        // navigate to confirmation screen 
        if (selectedDate != undefined & selectedTime != undefined) {
            navigation.navigate('confirmation', { time: selectedTime, date: selectedDate.toISOString().split('T')[0], userServices: props.userServices });
            console.log('state after useEffect: ', selectedDate)
        }
    }, [selectedDate, selectedTime, navigation]);

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

                            {/* checks if a slot is in booked slots array, if it is, then its booked, it will not be displayed */}
                            {availableSlots[timeOfDay].map((time, j) => (

                                props.userServices[0].duration > 30 && availableSlots[timeOfDay].includes(adjustTime(time)) ?

                                    (< TouchableOpacity onPress={() => { setTime(time) }}>
                                        <Text key={j} style={styles.timeText}>
                                            {time}
                                        </Text>
                                    </TouchableOpacity>) :


                                    props.userServices[0].duration < 60 ?
                                        (< TouchableOpacity onPress={() => { setTime(time) }}>
                                            <Text key={j} style={styles.timeText}>
                                                {time}
                                            </Text>
                                        </TouchableOpacity>) : undefined
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









