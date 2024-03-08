import { View, Text, Dimensions, StyleSheet } from 'react-native'

const screen = Dimensions.get('screen')

export default function SelectedServices(props) {

    // Calculate the total cost of a service
    const totalCost = () => {
        let total = 0
        // A service is a dictionary(ies) in the array services
        props.services.forEach(service => {
            for (const price in service) {
                if (price === 'price') {
                    total += parseInt(service[price]);
                }
            }
        })
        return total
    }

    return (
        <View style={styles.servicesContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>{props.title}</Text>
            </View>

            {/* display user selected services  */}
            <View style={styles.servicesListContainer}>
                <View>
                    {
                        props.services.map((service, i) => (
                            <View>
                                <View key={i} style={[styles.selectedServicesDisplay]}>
                                    <Text style={[styles.text, { flex: 2 }]} >{service.title}</Text>
                                    <Text style={[styles.text, { flex: 1 }]} >{service.duration} min</Text>
                                    <Text style={[styles.text, { flex: 1, textAlign: 'right' }]} >${service.price}</Text>
                                </View>
                            </View>
                        ))
                    }

                    {/* Display new elements of a booking */}
                    <View style={[{
                        borderTopColor: 'darkblue', borderTopWidth: 0.2,
                        paddingTop: 10, marginTop: 10
                    }]}>

                        {/* display date */}
                        <View style={[{ width: screen.width * 0.9, paddingVertical: 10 }]}>

                            {props.time ?
                                <View style={{ gap: 20 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Text style={[styles.text, { flex: 1, textAlign: 'left' }]}>Date</Text>
                                        <Text style={[styles.text, { flex: 1, textAlign: 'right' }]}>{props.date}</Text>
                                    </View>

                                    {/* display time */}
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Text style={[styles.text, { flex: 1, textAlign: 'left' }]}>Time</Text>
                                        <Text style={[styles.text, { textAlign: 'right' }]}>{props.time}</Text>
                                    </View>
                                </View>
                                : undefined
                            }

                            {/* display total cost */}
                            <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
                                <Text style={[styles.text, { flex: 1, textAlign: 'right', fontWeight: 'bold' }]}>${totalCost()}</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    services: {
        backgroundColor: 'white',
        height: screen.height
    },
    servicesListContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 20
    },
    headerContainer: {
        marginTop: 10,
        marginBottom: 20,
        paddingBottom: 5,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'orange'
    },

    selectedServicesDisplay: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
    },

    title: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '200',
    },

    text: {
        fontSize: 16,
        fontWeight: '300'
    },
    servicesContainer: {
        marginTop: 30,
        width: screen.width,
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