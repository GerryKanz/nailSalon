import React, { useState } from 'react';
import { Alert, Dimensions, } from 'react-native';
import { useAuth, useUser } from "@clerk/clerk-expo";


export default function DeleteAccount() {
    const { user } = useUser()

    // Delete the user's account
    const handleDelete = async () => {
        try {
            await user.delete();
            Alert.alert('Account Deleted', 'Your account has been successfully deleted.');

        } catch (error) {
            Alert.alert('Failed to delete your account. Please try again later.');
            console.error('Failed to delete account:', error);
        }
    };

    handleDelete()
};

