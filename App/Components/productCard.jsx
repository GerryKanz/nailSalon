import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";

const screen = Dimensions.get('screen')
export default Product = (props) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={props.img}
                style={styles.productImg} />

            <View style={styles.infoContainer}>

                <View style={styles.productName}><Text style={styles.text}>{props.name}</Text>
                </View>

                <View style={styles.ProductPricePosition}>
                    <Text style={[styles.text, { textAlign: 'center' }]}>{props.price}</Text>
                </View>
                <View style={styles.productStock}>
                    <Text >In Stock :</Text>
                    <Text style={
                        props.available === 'available' ? { color: 'green' } : { color: 'red' }
                    }>{props.available}</Text>
                </View>
                {/* <Text style={{ fontSize: 11 }}></Text> */}
                <View>
                    <View style={styles.detailsButton}>
                        <TouchableOpacity>
                            <Text style={{ color: 'orange' }}>More</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: screen.width * 0.4,
        backgroundColor: '#fff',
        height: 180,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
        elevation: 5,

    },
    productImg: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,

    },
    productName: {
        // textAlign: 'center'
        margin: 3

    },
    detailsButton: {
        // alignSelf: 'center',
        // alignItems: 'center',
        position: 'absolute',
        right: 0,
        // width: screen.width * 0.2,
        // padding: 5,
        // backgroundColor: 'orange',
        borderRadius: 4,
        margin: 3
    },
    productStock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 3

    },
    ProductPricePosition: {
        position: 'absolute',
        top: -16,
        right: 0,
        marginRight: 3,
        backgroundColor: 'rgba(255, 167, 64, 0.5)',
        // height: 32,
        // width: 32,
        padding: 5,
        borderRadius: 20
    },
    infoContainer: {
        paddingHorizontal: 3
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '300'
    }
})