import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet, Dimensions, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { Ionicons } from '@expo/vector-icons';
const screen = Dimensions.get('screen')

export default function SignUpScreen(props) {
    //clerk hook
    const { isLoaded, signUp, setActive } = useSignUp();

    //state declaration
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [pendingVerification, setPendingVerification] = useState(false);
    const [code, setCode] = useState("");

    // start the sign up process.
    const onSignUpPress = async () => {
        if (!isLoaded) {
            return;
        }

        try {
            await signUp.create({
                firstName,
                lastName,
                emailAddress,
                password,
            });

            // send the email.
            await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

            // change the UI to our pending section.
            setPendingVerification(true);
        } catch (err) {
            console.error(JSON.stringify(err, null, 2));
        }
    };

    // This verifies the user using email code that is delivered.
    const onPressVerify = async () => {
        if (!isLoaded) {
            return;
        }

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code,
            });

            await setActive({ session: completeSignUp.createdSessionId });
        } catch (err) {
            console.error(JSON.stringify(err, null, 2));
        }
    };

    return (
        <View>
            <KeyboardAvoidingView
                behavior='position'
                keyboardVerticalOffset={100}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>

                        {/* salon logo */}
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

                        {/* sign up input fields */}
                        {!pendingVerification && (

                            <View style={styles.inputFields}>
                                <View style={styles.Input}>
                                    <TextInput
                                        autoCapitalize="none"
                                        value={firstName}
                                        placeholder="First Name..."
                                        onChangeText={(firstName) => setFirstName(firstName)}
                                    />
                                </View>
                                <View style={styles.Input}>
                                    <TextInput
                                        autoCapitalize="none"
                                        value={lastName}
                                        placeholder="Last Name..."
                                        onChangeText={(lastName) => setLastName(lastName)}
                                    />
                                </View>
                                <View style={styles.Input}>
                                    <TextInput
                                        autoCapitalize="none"
                                        value={emailAddress}
                                        placeholder="Email..."
                                        onChangeText={(email) => setEmailAddress(email)}
                                    />
                                </View>

                                <View style={styles.Input}>
                                    <TextInput
                                        value={password}
                                        placeholder="Password..."
                                        placeholderTextColor="#000"
                                        secureTextEntry={true}
                                        onChangeText={(password) => setPassword(password)}
                                    />
                                </View>

                                {/* sign up button */}
                                <TouchableOpacity style={{ backgroundColor: 'orange', borderRadius: 5 }} onPress={onSignUpPress}>
                                    <Text style={styles.buttonText}>Sign up</Text>
                                </TouchableOpacity>

                                {/* sign in if account already exists */}
                                <View style={styles.signInTextContainer}>
                                    <Text>You already have an account?</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.signInText} onPress={() => props.backToSignIn()}>SignIn</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        )}

                        {/* email verification */}
                        {pendingVerification && (
                            <View style={styles.inputFields}>
                                <Text style={styles.checkVerificationText}>Check your email for a verification code</Text>
                                <View style={styles.Input}>
                                    <TextInput
                                        value={code}
                                        placeholder="Code..."
                                        onChangeText={(code) => setCode(code)}
                                    />
                                </View>

                                <TouchableOpacity style={{ backgroundColor: 'orange', borderRadius: 5 }} onPress={onPressVerify}>
                                    <Text style={styles.buttonText}>Verify Email</Text>
                                </TouchableOpacity>

                            </View>
                        )}

                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 300,
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
    },
    checkVerificationText: {
        fontSize: 11,
        fontWeight: '300',
        paddingVertical: 5
    },

    Input: {
        borderColor: 'orange',
        borderWidth: 1,
        borderRadius: 3,
        padding: 10,
        marginBottom: 30
    },
    buttonText: {
        textAlign: 'center',
        paddingVertical: 10
    },
    signInTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    signInText: {
        color: 'blue'
    }


})