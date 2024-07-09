import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native'
import { React, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import dataAPI from '../../DataAPI/dataAPI';
import { useRoute, useNavigation, CommonActions } from '@react-navigation/native';
import { useUser } from "@clerk/clerk-expo";
import Header from '../../Components/Header';
import UserBooking from '../../Components/userBookingComponent';
import SelectedServices from '../SelectedServicesSreen/SelectedServicesComponent';
import DateDisplayFormat from '../../Components/DateDisplay';

const screen = Dimensions.get('screen')

export default function ConfirmationScren() {
    const { user } = useUser();


    //variable declaration
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const navigation = useNavigation()
    const route = useRoute()
    const time = route.params.time
    const date = route.params.date
    const userServices = route.params.userServices

    //message is a booking is successful called if there is a success response from the database
    const SuccessMessage = () => Alert.alert(
        'Confirmed',
        'Booking Successful, please check your email for more details',
        [{
            text: 'Ok',

            //use dispach to instruct a state reset at the to page
            onPress: () => navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{ name: 'Home' }]

            }))
        }]
    )


    const handleTimeAndDate = () => {

        //create a booking id, using service id, date and time.
        //remove - and : from date and time strings
        const bookingId = (userServices[0].id + date + time).replace(/[-:]/g, '')

        //create a constant variable that stores booking data
        const data = { userId: user.id, selectedDate: date, selectedTime: time, duration: userServices[0].duration, service: userServices[0].title, bookingId: bookingId }

        //call a function in dataAPI and parse the data object to it to instantiate a booking in the database
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
        <View style={styles.container}>
            <SafeAreaView>

                {/* Header Component  */}
                <Header name='Confirm Booking' nav={navigation} />

                {/* Body  */}
                <View style={styles.bodyBackground}>
                    <View>

                        <Text style={{ textAlign: 'center' }}></Text>

                        <View>

                            <SelectedServices services={userServices}
                                date={DateDisplayFormat(date)}
                                time={time}
                                title='Booking summary' />

                            <TouchableOpacity style={{ alignSelf: 'center' }}
                                onPress={() => handleTimeAndDate()}>
                                <Text style={styles.submitAndConfirmButton}>Confirm and Complete Booking</Text>
                            </TouchableOpacity>
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
    bodyBackground: {
        backgroundColor: 'white',
        height: 1000
    },

    submitAndConfirmButton: {
        backgroundColor: color = 'rgba(255, 167, 64, 100)',
        textAlign: 'center',
        marginTop: 50,
        borderWidth: 1,
        borderColor: 'orange',
        padding: 15
    }
})