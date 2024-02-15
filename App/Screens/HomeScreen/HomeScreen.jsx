import { SafeAreaView, ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Cell, Section, TableView } from 'react-native-tableview-simple'
import HeaderSection from './headerSection'
import BannerSection from './bannerSection'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const screen = Dimensions.get('screen')

export default function HomeScreen({ route, navigation }) {

    const bottomTabHeight = useBottomTabBarHeight()

    const BannerCell = (props) => (
        <Cell backgroundColor='transparent' highlightUnderlayColor='#ccc' {...props}

            cellContentView={
                <View>
                    <Text>Hello</Text>
                    <Text>I'm here</Text>
                </View>
            }>

        </Cell>
    )

    return (
        <View style={styles.homeScreen}>
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.headerSection}>
                        <HeaderSection />
                    </View>

                    <View style={[styles.BannerSection, { marginBottom: bottomTabHeight }]}>
                        <BannerSection />
                    </View>

                    {/* <TouchableOpacity onPress={() => navigation.push('services')} style={styles.bookingButton}>
                        <Text style={styles.buttonText}> services</Text> */}
                    {/* <Text style={styles.buttonText}> O n l i n e  B o o k i n g</Text> */}
                    {/* </TouchableOpacity> */}



                </View>
            </SafeAreaView>
        </View>


    )
}

const styles = StyleSheet.create({
    homeScreen: {
        backgroundColor: color = 'rgba(255, 167, 64, 0.1)',
    },
    container: {
        display: 'flex',
        height: screen.height
    },

    BannerSection: {
        flex: 12
    },

    headerSection: {
        flex: 1

    },
    bookingButton: {
        backgroundColor: '#FFA740',
        flex: 4,

    },

    buttonText: {
        fontSize: 35,
        fontWeight: '200',
        textAlign: 'center',
        paddingTop: 10,
        color: 'purple'


    },
})