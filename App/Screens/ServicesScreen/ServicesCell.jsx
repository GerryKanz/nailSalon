// import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { TableView, Cell, Section } from 'react-native-tableview-simple'

// const screen = Dimensions.get('screen')



import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Cell, Section, TableView } from 'react-native-tableview-simple'
import Data from './data';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator()
const device = Dimensions.get('window')



export default function Services({ route }) {

    const [services, setServices] = useState([])

    const navigation = useNavigation()
    const data = Data()

    useEffect(() => {
        if (services.length > 0) {
            navigation.navigate('seleted_services', {
                services: services
            });
            console.log('state after useEffect: ', services)
        }
    }, [services, navigation]);

    const addService = (title) => {
        setServices(prevService => [...prevService, title])
    }

    return (
        <View>
            <ScrollView>
                <TableView>
                    <View style={styles.container}>
                        {
                            data.items.map((section, i) => (
                                <Section key={i} header={section.title}>
                                    {
                                        section.contents.map((cell, i) => (
                                            <Cell
                                                key={i}
                                                // navigates to booking screen
                                                cellContentView={
                                                    <TouchableOpacity onPress={() =>
                                                        addService(cell.title)
                                                    }
                                                        style={styles.menuCells}>
                                                        <View style={styles.menuCellsText}>
                                                            <Text style={{ fontWeight: 'bold', color: 'orange', paddingBottom: 5 }}>{cell.title}</Text>
                                                            <Text>{cell.discription}</Text>

                                                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                <Text style={styles.priceTag}>{cell.price}</Text>
                                                                <Text style={styles.priceTag}>30 min</Text>
                                                            </View>
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
        marginBottom: device.height * 0.4
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
        paddingTop: 5
    },

    menuCellsText: {
        marginLeft: '10%',
        marginBottom: '5%',
        width: device.width / 1.5,
        display: 'flex',
        justifyContent: 'space-between'

    },
    priceTag: {
        paddingTop: 10,
        fontWeight: 'bold'
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