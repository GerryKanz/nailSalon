// import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { TableView, Cell, Section } from 'react-native-tableview-simple'

// const screen = Dimensions.get('screen')



import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Cell, Section, TableView } from 'react-native-tableview-simple'
import Data from './data';
import { useNavigation } from '@react-navigation/native';
import Selected from './selected';

const Stack = createStackNavigator()
const screen = Dimensions.get('screen')



export default function Services(props) {

    const navigation = useNavigation()
    const data = Data()

    const [services, setServices] = useState([])
    const [duration, setDuration] = useState()


    console.log('-----', services.length)

    // if (props.bookingComplete == 'booking complete') {
    //     setServices([])
    // }



    const handleRemoveService = (serviceID) => {
        setServices(services.filter(service => service.id !== serviceID));
    }


    //wrap navigation in useEffect to only navigate when needed variables are populated
    // useEffect(() => {
    //     if (services.length > 0) {
    //         navigation.navigate('seleted_services', {
    //             services: services
    //         });
    //         console.log('state after useEffect: ', services)

    //     }
    // }, [services, navigation]);

    // set variables to be passed to selected services page on navigation 
    const handleAddService = (service) => {
        setServices(prevService => [...prevService, service])
    }

    const handleNav = () => {
        if (services.length > 0) {
            navigation.navigate('seleted_services', {
                services: services
            });
        }
    }



    return (
        <View>
            <View style={{ position: 'absolute', top: -30, right: 10, fontSize: 16 }}>
                <TouchableOpacity onPress={() => handleNav()}>
                    <Text style={{ fontSize: 16, fontWeight: '400' }}>
                        Continue
                    </Text>
                </TouchableOpacity>

            </View>
            <ScrollView>
                <TableView>
                    <View style={styles.container}>

                        {
                            data.items.map((section, i) => (
                                <Section key={i} header={section.title}>
                                    {
                                        section.contents.map((service, i) => (
                                            <Cell
                                                key={i}
                                                // navigates to booking screen
                                                cellContentView={
                                                    <TouchableOpacity onPress={() =>
                                                        handleAddService(service)
                                                    }
                                                        style={styles.menuCells}>
                                                        <View key={service + i} style={styles.menuCellsText}>
                                                            <Text style={{ paddingVertical: 10, fontSize: 16, fontWeight: '400', color: 'black', paddingBottom: 5 }}>{service.title}</Text>
                                                            <Text style={{ paddingBottom: 10, fontWeight: '200', color: 'black', paddingBottom: 5 }}>{service.discription}</Text>

                                                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                                                <Text style={styles.priceTag}>${service.price}</Text>

                                                                <Text style={[styles.priceTag, { textAlign: 'right' }]}>{service.duration} min</Text>

                                                            </View>
                                                            <Selected addService={handleAddService} removeService={handleRemoveService} servicesList={services}
                                                                service={service} serviceId={service.id} />
                                                            {/* {
                                                                <TouchableOpacity onPress={() => handleRemoveService(service.id)}>
                                                                    <Text style={{ fontSize: 25, paddingVertical: 10, paddingRight: 10 }}> - </Text>
                                                                </TouchableOpacity>
                                                            } */}



                                                        </View>
                                                    </TouchableOpacity>
                                                }
                                            />
                                        )
                                        )
                                    }

                                </Section>
                            ))
                        }
                    </View>


                </TableView>

            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: color = '#fff',
        marginBottom: screen.height * 0.4
    },
    selectionsButton: {
        // backgroundColor: 'orange',
        position: 'absolute',
        right: 2,
        // width: device.width * 0.4,
        alignItems: 'center',
        paddingLeft: 4,
        borderColor: 'orange',
        borderWidth: 1,
        borderRadius: 5,
        paddingRight: 4,
        paddingTop: 10,
        paddingBottom: 10,
        zIndex: 1

    },
    sections: {
        backgroundColor: color = 'rgba(255, 167, 64, 100)',
    },
    menuCells: {
        paddingTop: 5,
        width: screen.width * 0.92
    },

    menuCellsText: {
        marginBottom: 5,
        display: 'flex',
        justifyContent: 'space-between'

    },
    priceTag: {
        paddingTop: 10,
        fontWeight: '300',
        fontSize: 16,
        flex: 1
    }
});























// export default function Services() {

//     const handleChildPress = (child) => {
//         // Handle the press event for each child
//         console.log(`Child '${child}' pressed`);
//     };

//     const categories = [
//         { id: 1, name: 'Pedicure', children: ['Child 1', 'Child 2', 'Child 3'] },
//         { id: 2, name: 'Manicure', children: ['Child 4', 'Child 5', 'Child 6'] },
//         { id: 3, name: 'Others', children: ['Child 7', 'Child 8', 'Child 9'] },
//     ];





//     const ServicesCell = (props) => (
//         <Cell onPress={props.action} backgroundColor='transparent' highlightUnderlayColor='#ccc' {...props} contentContainerStyle={styles.servicesContainer}

//             cellContentView={
//                 <View style={styles.container}>
//                     {categories.map(category => (
//                         <View key={category.id} style={styles.categoryContainer}>
//                             <Text style={styles.categoryName}>{category.name}</Text>
//                             {category.children.map(child => (
//                                 <TouchableOpacity
//                                     key={child}
//                                     style={styles.childCell}
//                                     onPress={() => handleChildPress(child)}>
//                                     <View style={styles.testing}>
//                                         <Text>{child}</Text>
//                                         <Text>child 2</Text>
//                                     </View>
//                                     <Text>This is the content and i should style it</Text>
//                                 </TouchableOpacity>
//                             ))}
//                         </View>
//                     ))}
//                 </View>
//             }>
//         </Cell>
//     )






//     return (
//         <View>
//             <Text>
//             </Text>
//             <ScrollView>
//                 <TableView>
//                     <ServicesCell />
//                 </TableView>
//             </ScrollView>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     servicesContainer: {


//     },
//     container: {

//     },

//     header: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     categoryContainer: {
//         marginBottom: 20,
//     },
//     categoryName: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 10
//     },
//     childCell: {
//         // backgroundColor: '#e0e0e0',
//         padding: 10,
//         marginBottom: 5,

//     },
//     testing: {
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-between'
//     }

// })