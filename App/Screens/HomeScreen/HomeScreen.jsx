import { SafeAreaView, ScrollView, StyleSheet, View, Dimensions } from 'react-native';
import HeaderSection from './headerSection'
import BannerSection from './bannerSection'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const screen = Dimensions.get('screen')

export default function HomeScreen({ route, navigation }) {

    const bottomTabHeight = useBottomTabBarHeight()

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
                </View>
            </SafeAreaView>
        </View>


    )
}

const styles = StyleSheet.create({
    homeScreen: {
        backgroundColor: 'rgba(255, 167, 64, 0.1)',
    },
    container: {
        display: 'flex',
        height: screen.height
    },

    BannerSection: {
        flex: 11
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