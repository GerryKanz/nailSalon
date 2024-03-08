import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useAuth, useUser } from "@clerk/clerk-expo";

const window = Dimensions.get('window')

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

            {/* <View style={{ position: 'absolute', right: 20, top: 8 }}> */}
            <View style={styles.headerIconsContainer}>
                {/* <View style={styles.icons}> */}
                {/* <FontAwesome name="shopping-bag" size={22} color="#FFA740" />
                        <Text style={styles.iconText}>Products</Text> */}
                {/* </View> */}

                {/* <View style={styles.icons}> */}
                {/* <FontAwesome6 name="newspaper" size={22} color="#FFA740" />
                        <Text style={styles.iconText}>Blogs</Text> */}
                {/* </View> */}

                <TouchableOpacity style={styles.icons} onPress={() => {
                    signOut()
                }}>
                    <AntDesign name="logout" size={22} color="#FFA740" />
                    <SignOut />
                </TouchableOpacity>

            </View>
            {/* </View> */}
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
        // flex: 1,

    },
    headerText: {
        fontSize: 24,
        fontWeight: '200',
    },
    headerIconsContainer: {
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-evenly',
        // gap: 12
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
        // alignSelf: 'baseline',
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
        // paddingTop: 5,
        fontSize: 12,
        fontWeight: '300',
    }
})      
