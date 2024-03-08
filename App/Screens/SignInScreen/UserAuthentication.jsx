import { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUp";

const screen = Dimensions.get('screen')

export default function UserAuthentication() {

    const [signIn, setSignIn] = useState(1)

    const signUp = () => {
        setSignIn(0)
    }

    const backToSignIn = () => {
        setSignIn(1)
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>


                <View>
                    {signIn == 1 ? <SignInScreen signUp={signUp} /> : <SignUpScreen backToSignIn={backToSignIn} />}
                </View>

            </SafeAreaView>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: color = 'rgba(255, 167, 64, 0.1)',
        height: screen.height
    }

})
