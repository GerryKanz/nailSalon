import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const screen = Dimensions.get('screen')

export default function headerSection() {
    const navigation = useNavigation()
    return (
        <View>
            <View style={styles.container}>
                <Image source={require('../../../assets/allison-christine-0gTyPRZXnho-unsplash.jpg')}
                    style={styles.bannerImage} />
            </View>
            <Text style={styles.bannerheader}> Trending </Text>
            <Text style={styles.yearText}> W i n t e r   2 0 2 4</Text>
            <TouchableOpacity onPress={() => navigation.push('services')} style={styles.galleryButton}>
                <Text style={styles.servicesText}>Services</Text>
            </TouchableOpacity>


        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    bannerImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'

    },

    bannerheader: {
        position: 'absolute',
        fontSize: 45,
        fontWeight: '100',
        width: '100%',
        top: 50,
        textAlign: 'center',
        // color: 'purple',
    },

    yearText: {
        position: 'absolute',
        transform: [{ rotate: '270deg' }],
        fontSize: 35,
        fontWeight: '200',
        top: screen.height / 4,
        left: -screen.width / 3,
        color: 'black',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        padding: 20,
    },
    galleryButton: {
        position: 'absolute',
        right: 0,
        bottom: screen.height / 6,
        backgroundColor: 'rgba(0,0,0,0.4)',
        width: 100,
        height: 50,
        borderBottomColor: 'white',
        borderStyle: 'solid',
        borderBottomWidth: 1
    },
    servicesText: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
        paddingTop: 10,

    }
})
