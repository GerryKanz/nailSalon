import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Dimensions, Image, ScrollView } from "react-native";
import Header from "../../Components/Header";

const screen = Dimensions.get('screen')

export default Gallery = ({ navigation }) => {
    //image data
    const galleryData =
        [
            {
                img: require('../../../assets/pexels-kristina-paukshtite.jpg'),
                discrption: 'New design',
                category: 'Manicure'

            },
            {
                img: require('../../../assets/pexels-designecologist.jpg'),
                discrption: 'Trending',
                category: 'Manicure'
            },
            {
                img: require('../../../assets/pexels-valeria-boltneva.jpg'),
                discrption: 'seasonal',
                category: 'Manicure'
            },
            {
                img: require('../../../assets/pexels-kristina-paukshtite-1839711.jpg'),
                discrption: 'Trending',
                category: 'Manicure'
            },
            {
                img: require('../../../assets/pexels-karolina-grabowska-4963837.jpg'),
                discrption: 'spring 2024',
                category: 'Pedicure'
            },
            {
                img: require('../../../assets/pexels-kristina-paukshtite-3557600.jpg'),
                discrption: 'popular',
                category: 'Manicure'
            }

        ]

    //renders images to the screen
    return (
        <View style={styles.container}>
            <SafeAreaView >
                <Header name='Gallery' nav={navigation} />

                <View style={styles.contentContainer}>
                    <ScrollView >
                        <View style={styles.flexContainer}>
                            {
                                galleryData.map((design, i) => (
                                    <View style={styles.designCard}>
                                        <View style={styles.imageContainer}>
                                            <Image source={design.img} style={styles.image} />

                                            <Text style={{ width: 100, fontSize: 15, fontWeight: '300' }}><Text style={{ fontWeight: 'bold' }}>{design.category}:</Text> {design.discrption}</Text>
                                        </View>
                                    </View>
                                ))
                            }
                        </View>
                    </ScrollView>
                </View>

            </SafeAreaView >
        </View >

    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 167, 64, 0.1)',
    },
    contentContainer: {
        backgroundColor: '#fff',
        // height: screen.height * 0.9
    },
    titleText: {
        // textAlign: 'center',
        position: 'absolute',
        right: 0,
        fontSize: 22,
        fontWeight: '300',
        marginTop: 20,
        padding: 10,
        bottom: 5,
        color: 'orange',
    },
    titleContainer: {
        backgroundColor: '#fff',
        marginBottom: 10,
        marginLeft: 5,
        width: screen.width * 0.98,
        height: screen.height * 0.07,
        alignSelf: 'center',
    },
    designCard: {
        // height: screen.height * 0.25,
        marginTop: 0,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    // imageContainer: {
    //     width: screen.width * 0.5,
    //     height: screen.height * 0.20
    // },
    image: {
        width: 160,
        height: 185,
        resizeMode: 'cover',
        alignSelf: 'center'
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        marginTop: 10,
        marginLeft: 15,
        marginBottom: screen.height * 0.2
    }
})