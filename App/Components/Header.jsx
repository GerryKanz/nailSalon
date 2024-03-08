import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const screen = Dimensions.get('screen')

export default function Header(props) {
    return (
        <View>
            <TouchableOpacity onPress={() => props.nav.goBack()} style={styles.backButton}>
                <Ionicons style={styles.icon} name="arrow-back-outline" size={24} color="black" />
                <View>
                    <Text style={styles.text}>{props.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    backButton: {
        alignItems: 'center',
        paddingBottom: 10,
    },
    icon: {
        position: 'absolute',
        left: 0,
        bottom: 8
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16
    }
})
