import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const window = Dimensions.get('window')

export default function headerSection() {
    return (
        <View style={styles.headerContainer}>

            <View style={styles.logo}>

            </View>

            <View style={styles.headerIconsContainer}>
                <View style={styles.icons}>
                    <FontAwesome name="shopping-bag" size={24} color="#FFA740" />
                    <Text style={styles.iconText}>Products</Text>
                </View>

                <View style={styles.icons}>
                    <FontAwesome6 name="newspaper" size={24} color="#FFA740" />
                    <Text style={styles.iconText}>Blogs</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {
        flex: 1,
    },
    headerIconsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-evenly'
    },

    icons: {
        alignItems: 'center',
    },

    iconText: {
        paddingTop: 5,
        fontSize: 12,
        color: 'black'
    }
})      
