import { ScrollView, View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import dataAPI from '../../DataAPI/dataAPI';
import Header from '../../Components/Header';
import { useUser } from '@clerk/clerk-expo';
import UserBooking from '../../Components/userBookingComponent';
import { useIsFocused } from '@react-navigation/native';
import DateDisplay from '../../Components/DateDisplay';

const screen = Dimensions.get('screen')

export default function UserBookingsScreen({ navigation }) {
    //hooks and state declarations
    const isFocused = useIsFocused()
    const [bookingHistory, setBookingHistory] = useState([])
    const [filteredBookings, setFilteredBookings] = useState([])
    const [toggle, setToggle] = useState(false)
    const { user } = useUser();

    //call Data API and returns user bookings data
    const getUserBookingData = () => {
        dataAPI.getUserBookings(user.id).then((resp) => {
            setBookingHistory(resp.bookings)

        })
    }

    //cancel booking and set trigger refresh by setting toggle
    const cancelBooking = (id) => {
        dataAPI.updateCanceletion(id).then((resp) => {
            setToggle(prevToggle => !prevToggle)
        })
    }

    let filteredRes = []
    useEffect(() => {
        if (bookingHistory.length > 0) {
            for (let i = 0; i < bookingHistory.length; i++) {
                if (i === bookingHistory.length - 1) {
                    filteredRes.push(bookingHistory[i])
                } else if (bookingHistory[i].bookingId === bookingHistory[i + 1].bookingId) {
                    continue
                } else {
                    filteredRes.push(bookingHistory[i])
                }
            }
        }
        console.log(filteredRes)
        setFilteredBookings(filteredRes)
    }, [bookingHistory])




    //Cause an API call once when isFocused and when toggle changes
    useEffect(() => {
        if (isFocused) {
            getUserBookingData()
        }
    }, [isFocused, toggle])


    return (
        <View style={styles.container}>
            <SafeAreaView >
                <View>
                    <Header name='Booking Appointments' nav={navigation} />
                </View>

                <View style={styles.bookingsBackground}>
                    <ScrollView>
                        <View style={styles.scrollableHeight}>
                            <View style={styles.headerMessege}>
                                <Text style={styles.headerText}>Thank you for booking with us</Text>
                            </View>

                            {
                                filteredBookings.map((booking, index) => (
                                    < View key={index} >
                                        {console.log(booking.bookingId)}
                                        <UserBooking
                                            booking={booking}
                                            service={booking.service}
                                            duration={booking.duration}
                                            date={DateDisplay(booking.date)}
                                            time={booking.time}
                                            cancel={cancelBooking} />
                                    </View>
                                ))
                            }
                        </View>
                    </ScrollView>
                </View>


            </SafeAreaView >
        </View >
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
        marginTop: 30,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 0.5,
        paddingBottom: 10,
        marginBottom: 25,
        alignSelf: 'center',
    },

    headerText: {
        fontSize: 16,
        fontWeight: '100'
    },
    bookingsBackground: {
        backgroundColor: 'white',
        height: 1000
    },
    scrollableHeight: {
        marginBottom: screen.height * 0.5
    }
})