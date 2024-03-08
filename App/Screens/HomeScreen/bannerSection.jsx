import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Product from '../../Components/productCard'

const screen = Dimensions.get('screen')

export default function headerSection() {
    const navigation = useNavigation()

    const productData = [
        {
            img: require('../../../assets/vecteezy_ai-generated-shiny-container-decorated-nail-polish_35497782.png'),
            name: 'Vinci',
            price: '$25',
            available: 'not available'
        },
        {
            img: require('../../../assets/vecteezy_ai-generated-shiny-container-decorated-nail-polish_35497782.png'),
            name: 'Vinci',
            price: '$25',
            available: 'available'
        },
        {
            img: require('../../../assets/vecteezy_ai-generated-shiny-container-decorated-nail-polish_35497782.png'),
            name: 'Vinci',
            price: '$25',
            available: 'available'
        },
        {
            img: require('../../../assets/vecteezy_ai-generated-shiny-container-decorated-nail-polish_35497782.png'),
            name: 'Vinci',
            price: '$25',
            available: 'available'
        },
        {
            img: require('../../../assets/vecteezy_ai-generated-shiny-container-decorated-nail-polish_35497782.png'),
            name: 'Vinci',
            price: '$25',
            available: 'available'
        },
        {
            img: require('../../../assets/vecteezy_ai-generated-shiny-container-decorated-nail-polish_35497782.png'),
            name: 'Vinci',
            price: '$25',
            available: 'available'
        }
    ]

    return (
        <View>
            <View style={styles.container}>
                {/* <Image source={require('../../../assets/allison-christine-0gTyPRZXnho-unsplash.jpg')}
                    style={styles.bannerImage} /> */}
            </View>

            <View style={styles.flexContainer}>

                {/* <Text style={styles.bannerheader}> Studio </Text> */}
                {/* <Text style={styles.yearText}> S p r i n g   2 0 2 4</Text> */}

                {/* <TouchableOpacity onPress={() => navigation.push('services')} style={styles.galleryButton}>
                <Text style={styles.servicesText}>Services</Text>
            </TouchableOpacity> */}

                {/* <View style={{
                height: screen.height * 0.3, width: screen.width * 0.8, borderColor: 'orange', backgroundColor: 'white', borderTopRightRadius: 20, borderTopLeftRadius: 20,
                marginTop: 10, alignSelf: 'center'
            }}>

                <Image source={require('../../../assets/allison-christine-0gTyPRZXnho-unsplash.jpg')}
                    style={styles.bannerImage} />

            </View> */}
                <View style={[styles.midsection, { flex: 1.2, display: 'flex', flexDirection: 'row', gap: 5 }]}>

                    <View style={{ marginLeft: 10 }}>
                        <Image source={require('../../../assets/pexels-karolina-grabowska.jpg')}
                            style={{ width: 138, height: 135, marginTop: 10, resizeMode: 'cover', borderRadius: 10 }} />
                    </View>

                    <View style={{ width: screen.width * 0.55 }}>
                        <View>
                            <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: '200' }}>Services</Text>

                            <Text style={{ textAlign: 'center', marginTop: 10, fontWeight: '300' }}>Manicure & Pedicure</Text>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('services', { screen: 'fromHome' })} style={{
                            position: 'absolute', alignSelf: 'center', bottom: 0,
                            borderRadius: 10, marginBottom: 10,
                            backgroundColor: 'orange',
                        }}>
                            <View>
                                <Text style={styles.buttonText}>Services and Booking</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.topCard, styles.midsection, { flex: 1.6 }]}>
                    <Text style={styles.bannerheader}>Trending 2024</Text>

                    <View style={{ position: 'absolute', top: 80, width: screen.width }}>
                        <Text style={{ fontSize: 18, fontWeight: '200', textAlign: 'center' }}>Whats new this spring? </Text>

                    </View>

                    <Image source={require('../../../assets/vecteezy_petalos-de-flores-que-caen_13666354.png')}
                        style={[styles.bannerImage]} />

                    <TouchableOpacity onPress={() => navigation.navigate('gallery')} style={styles.galleryButton}>
                        <Text style={styles.buttonText}>
                            Gallery
                        </Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.productSection}>
                    <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: '200', marginTop: 5 }}>Product Catalogue</Text>
                    <Text style={styles.text}>All products can only be purchased at the shop</Text>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={[{ marginHorizontal: 10, display: 'flex', flexDirection: 'row', marginTop: 10, gap: 10 }]}>
                            {
                                productData.map((product, i) => (
                                    <TouchableOpacity key={i} activeOpacity={1} onPress={() => navigation.push('product', { name: product.name, img: product.img, price: product.price, available: product.available })}>
                                        <Product
                                            img={product.img}
                                            name={product.name}
                                            price={product.price}
                                            available={product.available} />
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View >


    )
}

const styles = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: screen.height * 0.8
    },
    buttonText: {
        padding: 10,
        fontSize: 18,
        fontWeight: '200'
    },

    topCard: {
        // height: screen.height * 0.3,
        // borderColor: 'orange',
        // backgroundColor: 'white',
        // borderTopRightRadius: 20,
        // borderTopLeftRadius: 20,
        // borderRadius: 20
    },
    midsection: {
        backgroundColor: '#fff',
        width: screen.width,
        marginTop: 5,
        borderRadius: 10,
        alignSelf: 'center'
    },

    productSection: {
        backgroundColor: '#fff',
        // width: screen.width * 0.96,
        marginTop: 5,
        borderRadius: 10,
        flex: 2.2
    },

    // card: {
    //     backgroundColor: '#fff',
    //     width: screen.width * 0.5,
    //     borderRadius: 10,
    //     paddingTop: 20,
    //     marginVertical: 15,
    //     marginLeft: 10,
    //     shadowColor: '#000',
    //     shadowOffset: {
    //         width: 0,
    //         height: 2,
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 3.84,
    //     elevation: 5
    // },
    title: {
        fontSize: 20,
        fontWeight: '300',
        marginBottom: 10,
        textAlign: 'center',
        borderBottomColor: 'orange',
        borderBottomWidth: 1
    },
    content: {
        fontSize: 16,
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',

    },

    bannerImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },

    cardImage: {
        width: screen.width * 0.48,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        height: 125,
        alignSelf: 'center'

    },

    bannerheader: {
        fontSize: 35,
        fontWeight: '100',
        width: '100%',
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
        left: 0,
        bottom: 0,
        // backgroundColor: 'orange',
        borderColor: 'orange',
        borderWidth: 1,
        alignItems: 'center',
        width: 80,
        borderRadius: 10,
        margin: 20
    },
    servicesText: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
        paddingTop: 10,
    },
    text: {
        padding: 5,
        textAlign: 'center',
        fontWeight: '300'
    }
})
