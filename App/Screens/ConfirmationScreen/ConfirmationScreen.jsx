import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native'
import { React, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import dataAPI from '../../DataAPI/dataAPI';
import { useRoute, useNavigation } from '@react-navigation/native';

const screen = Dimensions.get('screen')

export default function ConfirmationScren() {

    //variable declaration
    const [name, setName] = useState()
    const [email, setEmail] = useState();
    const navigation = useNavigation()
    const route = useRoute()
    const time = route.params.time
    const date = route.params.date
    const userServices = route.params.userServices
    const bookingId = email + date + time;

    console.log(userServices[0].duration.toString())

    console.log(Number.isInteger(userServices[0].duration))

    //message is a booking is successful called if there is a success response from the database
    const SuccessMessage = () => Alert.alert(
        'Confirmed',
        'Booking Successful, please check your email for more details',
        [{
            text: 'Home',
            onPress: () => navigation.navigate('home')
        }]

    )

    const handleTimeAndDate = () => {

        const data = { name: name, email: email, selectedDate: date, selectedTime: time, duration: userServices[0].duration, service: userServices[0].title, bookingId: bookingId }

        const enterBooking = (complete) => {
            dataAPI.createBooking(data).then(resp => {
                complete ? SuccessMessage() : undefined
                setName('')
                setEmail('')
            })
        }

        // adjusts time if service duration is greater 60
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

            return (hours + ":" + minutes)
        }

        //execute this part if a booking has a duration of over 30
        console.log("data passed to the for loop", data.duration)
        if (data.duration > 30) {
            for (i = 0; i < data.duration / 30; i++) {

                //adjust time to take the next slot due to overlap
                if (i > 0) {
                    data.selectedTime = adjustTime(data.selectedTime)
                }

                //instructs when to show success message for the user
                let showSuccessMessage = false
                if (i == (data.duration / 30) - 1) {
                    showSuccessMessage = true
                }
                //make a booking
                enterBooking(showSuccessMessage)
            }

            // execute this part if duration is 30
        } else {
            enterBooking(true)
        }

    }

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back-outline" size={24} color="black" />
                <Text>Booking</Text>
            </TouchableOpacity>
            <View style={styles.heading}>

                <Text style={{ textAlign: 'center' }}>Enter your Name and Email to complete booking</Text>

                <View style={styles.inputFields}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setName}
                        placeholder='User Name'
                        value={name}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        placeholder='Email'
                        value={email}
                    />
                    <TouchableOpacity style={{ alignSelf: 'center' }}
                        onPress={() => handleTimeAndDate()}>
                        <Text style={styles.submitAndConfirmButton}>Submit and Confirm your Booking</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    heading: {
        paddingTop: 100,
    },
    backButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        gap: 10,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 5,
        padding: 10,
        width: screen.width / 1.06
    },
    inputFields: {
        marginTop: 50

    },
    submitAndConfirmButton: {
        backgroundColor: color = 'rgba(255, 167, 64, 100)',
        textAlign: 'center',
        marginTop: 50,
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 5,
        padding: 10,
        width: screen.width / 1.06

    }
})