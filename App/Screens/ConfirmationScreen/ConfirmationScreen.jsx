import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native'
import { React, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import dataAPI from '../../DataAPI/dataAPI';
import { useRoute, useNavigation } from '@react-navigation/native';

const screen = Dimensions.get('screen')

export default function ConfirmationScren() {
    const [name, setName] = useState()
    const [email, setEmail] = useState();
    const navigation = useNavigation()
    const route = useRoute()
    const time = route.params.time
    const date = route.params.date



    const SuccessMessage = () => Alert.alert(
        'Confirmed',
        'Booking Successful, please check your email for more details',
        [{
            text: 'Home',
            onPress: () => navigation.navigate('home')
        }]

    )

    const handleTimeAndDate = () => {
        const data = { name: name, email: email, selectedDate: date, selectedTime: time }
        dataAPI.createBooking(data).then(resp => {
            SuccessMessage()
            setName('')
            setEmail('')
        })
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