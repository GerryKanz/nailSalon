import { View, Text, SafeAreaView, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const screen = Dimensions.get('screen')

export default function ConfirmationScreen({ route, navigation }) {
    const { services } = route.params;

    return (
        <View style={styles.container}>
            <SafeAreaView>

                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back-outline" size={24} color="black" />
                    <Text>Booking</Text>
                </TouchableOpacity>

                <View style={styles.services}>

                    <View style={styles.headerContainer}>
                        <Text>Your Services</Text>
                    </View>

                    {/* display user selected services  */}
                    <View style={styles.servicesListContainer}>
                        <View>
                            {
                                services.map((service, i) => (<View style={styles.selectedServicesDisplay}>
                                    <Text key={i} style={styles.text} >{service.title}</Text>
                                    <Text style={styles.text} >{service.duration} min</Text>
                                    <Text style={styles.text} >{service.price}</Text>
                                </View>
                                ))
                            }
                        </View>
                    </View>

                    {/* add services or continue button  */}
                    <View style={styles.buttonsContainer}>
                        <Text>Add another service or continue with these selections.</Text>
                        <View style={styles.buttons}>

                            {/* add services button  */}
                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                                <Text style={styles.button}>Add</Text>
                            </TouchableOpacity>

                            {/* continue button, navigates to the booking screen passing user selected services as a route parameter */}
                            <TouchableOpacity onPress={() => navigation.navigate('booking', { services: services })} style={styles.backButton}>
                                <Text style={styles.button}>Continue</Text>
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
    backButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        gap: 10,
    },
    services: {
        backgroundColor: 'white',
        height: screen.height
    },
    servicesListContainer: {
        display: 'flex',
        gap: 20,
        marginTop: 40
    },
    headerContainer: {
        marginTop: 30,
        alignItems: 'center'
    },

    buttonsContainer: {
        marginTop: 100,
        alignItems: 'center',
    },
    buttons: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    },
    button: {
        width: 90,
        padding: 10,
        textAlign: 'center',
        borderColor: 'orange',
        borderWidth: 1,
    },
    selectedServicesDisplay: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20
    },

    text: {
    }

})