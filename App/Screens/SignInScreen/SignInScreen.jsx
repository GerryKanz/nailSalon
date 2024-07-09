import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet, Dimensions, Image, Alert, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";

const screen = Dimensions.get('screen')

export default function SignInScreen(props) {
    const { signIn, setActive, isLoaded } = useSignIn();

    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const onSignInPress = async () => {
        if (!isLoaded) {
            return;
        }

        try {
            const completeSignIn = await signIn.create({
                identifier: emailAddress,
                password,
            });

            // Indicates if the user is signed in
            await setActive({ session: completeSignIn.createdSessionId });
        } catch (err) {
            Alert.alert('Wrong Email or Password', 'Please try again')
        }
    };
    return (
        <View>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={50}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <View >
                            <Image
                                source={require('./../../../assets/logo.png')}
                                style={styles.image}
                            />
                        </View>

                        <View style={styles.welcome}>
                            <Text style={styles.welcomeText}> Welcome</Text>
                            <Text style={styles.welcomeText}> Nail Salon Studio </Text>
                        </View>

                        <KeyboardAvoidingView>

                            <View style={styles.inputFields}>
                                <View style={styles.Input}>
                                    <TextInput
                                        autoCapitalize="none"
                                        value={emailAddress}
                                        placeholder="Email..."
                                        onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
                                    />
                                </View>

                                <View style={styles.Input}>
                                    <TextInput
                                        value={password}
                                        placeholder="Password..."
                                        secureTextEntry={true}
                                        onChangeText={(password) => setPassword(password)}
                                    />
                                </View>

                                <TouchableOpacity style={{ backgroundColor: 'orange', borderRadius: 5 }} onPress={onSignInPress}>
                                    <Text style={styles.signInButton}>Sign in</Text>
                                </TouchableOpacity>


                                <View style={styles.signUpTextContainer}>
                                    <Text>You dont have an account?</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.signUpText} onPress={() => props.signUp()}>SignUp</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color = 'rgba(255, 167, 64, 0.1)',
    },
    backButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        gap: 10,
    },
    welcome: {
        marginTop: screen.height * 0.02,
        display: 'flex',
        gap: 10,
        alignItems: 'center'
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: '200'
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 80,
        borderWidth: 0.2,
        borderColor: 'orange',
        alignSelf: 'center',
        marginTop: screen.height * 0.08
    },
    inputFields: {
        width: screen.width * 0.8,
        alignSelf: 'center',
        display: 'flex',
        marginTop: screen.width * 0.1,
        padding: 15,
        gap: 30
    },
    signUpTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    signUpText: {
        color: 'blue'
    },
    Input: {
        borderColor: 'orange',
        borderWidth: 1,
        borderRadius: 3,
        padding: 10
    },
    signInButton: {
        borderColor: 'orange',
        borderWidth: 1,
        borderRadius: 3,
        textAlign: 'center',
        paddingVertical: 10
    }

})