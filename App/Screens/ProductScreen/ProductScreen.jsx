import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Dimensions, Image } from "react-native";
import Header from "../../Components/Header";

const screen = Dimensions.get('screen')

export default Product = ({ route, navigation }) => {

    const params = route.params
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Header name='Product' nav={navigation} />
                <View style={styles.productContainer}>
                    <Image source={params.img} style={styles.productImage} />

                    <View style={styles.productPriceContainer}>
                        <Text style={styles.productPrice}>{params.price}</Text>
                    </View>

                    <View style={styles.productAvailablityContainer}>
                        <Text style={[styles.productAvailability, params.available != 'available' ? { color: 'red' } : null]}>{params.available}</Text>
                    </View>


                    <View style={styles.productDiscriptionContainer}>
                        <View>
                            <Text style={styles.productName}>
                                {params.name}
                            </Text>
                        </View>
                        <Text style={styles.productDiscription}>
                            <Text style={{ fontWeight: 'bold', color: 'orange' }}>Discription:</Text> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod et eum quis eius veritatis magnam, aspernatur sed sint fugit voluptatum quibusdam neque, ipsa culpa harum velit. Natus quos sequi molestias.
                        </Text>

                        <View style={{ width: screen.width, marginTop: 20 }}>
                            <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: '200' }}>All products can only purchased at the store </Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 167, 64, 0.1)',
    },
    productContainer: {
        width: screen.width,
        backgroundColor: '#fff',
        height: screen.height * 0.85,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    productImage: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        marginTop: 50
    },
    productPrice: {
        fontSize: 35,
        padding: 15,
        fontWeight: '200'

    },
    productPriceContainer: {
        position: 'absolute',
        left: 0,
        margin: 20,
        // backgroundColor: 'rgba(255, 167, 64, 0.5)',
        borderRadius: 30
    },
    productAvailability: {
        fontSize: 16,
        color: 'green'
    },
    productAvailablityContainer: {
        position: 'absolute',
        top: 250,
        right: 0,
        margin: 20,
        zIndex: 1
    },
    productName: {
        textAlign: 'center',
        marginBottom: 30,
        fontSize: 25,
        fontWeight: '300'
    },
    productDiscription: {
        lineHeight: 20,
        fontSize: 16,
        fontWeight: '300'
    },
    productDiscriptionContainer: {
        width: screen.width * 0.95,
        height: screen.height * 0.3,
        alignSelf: 'center',
        alignItems: 'center',
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