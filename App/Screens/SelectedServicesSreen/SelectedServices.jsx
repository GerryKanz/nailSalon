import { View, Text, SafeAreaView, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../../Components/Header';
import SelectedServices from './SelectedServicesComponent';

const screen = Dimensions.get('screen')

export default function ConfirmationScreen({ route, navigation }) {

    const { services } = route.params;

    return (
        <View style={styles.container}>
            <SafeAreaView>

                <Header name='Selected Services' nav={navigation} />

                <View style={styles.services}>

                    <SelectedServices services={services} title='Your Services' />

                    {/* add services or continue button  */}
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonHeader}>
                            <Text style={[styles.text, { fontSize: 18, fontWeight: '200' }]}>Edit services or continue.</Text>
                        </View>

                        <View style={styles.buttons}>

                            {/* add services button  */}
                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                                <Text style={[styles.button, styles.text]}>Edit</Text>
                            </TouchableOpacity>

                            {/* continue button, navigates to the booking screen passing user selected services as a route parameter */}
                            <TouchableOpacity onPress={() => navigation.navigate('booking', { services: services })} style={styles.backButton}>
                                <Text style={[styles.button, styles.text]}>Continue</Text>
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
        justifyContent: 'space-between',
        marginTop: 20
    },
    headerContainer: {
        marginTop: 10,
        marginBottom: 20,
        paddingBottom: 5,
        alignItems: 'center',
        borderBottomWidth: 0.2,
        borderBottomColor: 'orange'
    },

    buttonHeader: {
        paddingBottom: 5,
        alignItems: 'center',
        borderBottomWidth: 0.2,
        borderBottomColor: 'orange',
        width: screen.width * 0.9
    },

    buttonsContainer: {
        marginTop: 50,
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttons: {
        marginTop: 20,
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
        marginBottom: 20,
    },

    title: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '200',
    },

    text: {
        fontSize: 16,
        fontWeight: '300'
    },
    servicesContainer: {
        marginTop: 30,
        width: screen.width,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    }


})