import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useAuth, useUser } from "@clerk/clerk-expo";

const window = Dimensions.get('window')

//the header section of the homepage
export default function headerSection() {
    const { isLoaded, signOut } = useAuth();
    const { user } = useUser();

    const SignOut = () => {
        if (!isLoaded) {
            return null;
        }
        return (
            <View>
                <Text style={styles.iconText}>Sign Out</Text>
            </View>
        );
    };

    return (
        <View style={styles.headerContainer}>

            <View style={styles.logo}>
                <Image source={require('../../../assets/logo.png')}
                    style={styles.profileImage} />
            </View>

            <View style={styles.profileImgTxtContainer}>
                <Text style={styles.headerText}>Nail Salon Studio</Text>
            </View>

            <View style={styles.headerIconsContainer}>
                <TouchableOpacity style={styles.icons} onPress={() => {
                    signOut()
                }}>
                    <AntDesign name="logout" size={22} color="#FFA740" />
                    <SignOut />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    logo: {

    },
    headerText: {
        fontSize: 24,
        fontWeight: '200',
    },
    headerIconsContainer: {

    },
    profileImage: {
        width: 50,
        height: 50,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: 'orange',
        borderRadius: 40,
    },
    profileImgTxtContainer: {
    },
    profileImageText: {
        fontSize: 12,
        fontWeight: '300',
    },
    icons: {
        alignItems: 'center',
        marginRight: 20,
        gap: 5

    },

    iconText: {
        fontSize: 12,
        fontWeight: '300',
    }
})      
