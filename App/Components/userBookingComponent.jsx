import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const screen = Dimensions.get('screen')

export default userBoking = (props) => {

    //function to cancel user booking
    const cancelBooking = () => {
        props.cancel(props.booking.bookingId)
    }


    return (
        <View style={styles.booking}>
            <View style={styles.foldedConer}>
            </View>
            <View style={{ position: 'absolute', left: -5, top: -5, width: 30, height: 30, backgroundColor: '#fff' }}>
            </View>

            <View style={styles.service}>
                <View>
                    <Text style={styles.titleText}>Date</Text>
                </View>

                <View style={styles.date}>
                    <Text>{props.date}</Text>
                </View>
            </View>

            <View style={styles.service}>
                <View>
                    <Text style={styles.titleText}>Time</Text>
                </View>

                <View style={styles.date}>
                    <Text>{props.time}</Text>
                </View>
            </View>

            <View style={styles.service}>
                <View>
                    <Text style={styles.titleText}>Service</Text>
                </View>
                <View>
                    <Text style={styles.serviceName}>{props.service}</Text>
                </View>
            </View>

            <View style={[styles.service]}>
                <View>
                    <Text style={styles.titleText}>Duration</Text>
                </View>
                <View>
                    <Text style={styles.duration}>{props.duration} minutes</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.cancelBooking} onPress={() => cancelBooking()}>
                <Text style={styles.buttonText}>
                    Cancel
                </Text>
            </TouchableOpacity>



        </View>
    )
}
const styles = StyleSheet.create({
    bookings: {
        height: 200,
    },
    booking: {
        backgroundColor: '#fff',
        width: screen.width * 0.98,
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 0.5,
        paddingBottom: 0,
        borderColor: 'orange',
        borderRadius: 10,
        marginBottom: 15
    },

    bookingDate: {
    },

    service: {
        width: screen.width * 0.82,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 10,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 0.2,
    },

    titleText: {
        fontWeight: 'bold'
    },

    serviceName: {



    },
    durationTitleText: {

    },

    duration: {


    },
    foldedConer: {
        position: 'absolute',
        backgroundColor: 'orange',
        height: 28,
        width: 28,
        left: -0.5,
        top: -0.5,
        borderTopLeftRadius: 30,
        borderColor: 'orange',
        borderWidth: 0.5,
        zIndex: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 10
    },
    cancelBooking: {
        borderWidth: 1,
        borderColor: 'orange',
        backgroundColor: 'orange',
        padding: 10,
        marginRight: screen.width * 0.1,
        marginVertical: 10,
        borderRadius: 5,
        alignSelf: 'flex-end'
    }

})