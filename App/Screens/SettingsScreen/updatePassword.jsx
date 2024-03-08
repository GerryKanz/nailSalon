import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Ionicons } from '@expo/vector-icons';
import Header from '../../Components/Header';

const screen = Dimensions.get('screen')

export default function UpdatePassword({ navigation, route }) {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { user } = useUser()

    const handleUpdatePassword = async () => {
        if (!currentPassword || !newPassword || !confirmPassword) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        if (newPassword !== confirmPassword) {
            Alert.alert('Error', 'Password do not match.');
            return;
        }

        try {
            await user.updatePassword({
                currentPassword,
                newPassword,
            });
            Alert.alert('Success', 'Password updated successfully.');
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <SafeAreaView>

                <Header name='Reset Password' nav={navigation} />

                <View style={styles.bodyContainer}>
                    <View style={styles.inputFields}>
                        <View>
                            <Text>Current password</Text>
                            <View style={styles.Input}>
                                <TextInput
                                    placeholder="Enter Current Password"
                                    secureTextEntry
                                    value={currentPassword}
                                    onChangeText={setCurrentPassword}
                                />
                            </View>
                        </View>

                        <View>
                            <Text>New password</Text>
                            <View style={styles.Input}>
                                <TextInput
                                    placeholder="Enter New Password"
                                    secureTextEntry
                                    value={newPassword}
                                    onChangeText={setNewPassword}
                                />
                            </View>
                        </View>

                        <View>
                            <Text>Confirm new password</Text>
                            <View style={styles.Input}>
                                <TextInput
                                    placeholder="Confirm New Password"
                                    secureTextEntry
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                />
                            </View>
                        </View>

                        <TouchableOpacity style={styles.signUpButton}>
                            <Text style={{ textAlign: 'center' }} onPress={handleUpdatePassword}>Update</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: color = 'rgba(255, 167, 64, 0.1)',
        height: screen.height
    },
    backButton: {
        alignItems: 'center',
        paddingBottom: 10,
    },
    bodyContainer: {
        backgroundColor: color = '#fff',
        height: screen.height
    },
    inputFields: {
        width: screen.width * 0.8,
        alignSelf: 'center',
        display: 'flex',
        marginTop: screen.width * 0.1,
        padding: 15,
        gap: 30
    },
    Input: {
        borderColor: 'orange',
        borderWidth: 1,
        borderRadius: 3,
        padding: 10
    },
    signUpButton: {
        backgroundColor: 'orange',
        borderRadius: 3,
        textAlign: 'center',
        paddingVertical: 10
    }

})

