import { ScrollView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Cell, Section, TableView } from 'react-native-tableview-simple'
import { Clerk, useAuth, useUser } from "@clerk/clerk-expo";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import DeleteAccount from './DeleteAccont';
import Header from '../../Components/Header';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system'
import * as MediaLibrary from 'expo-media-library';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';




const screen = Dimensions.get('screen')

export default function SettingsScreen({ route, navigation }) {

    const { isLoaded, signOut } = useAuth();
    const { user } = useUser();
    const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
    const [image, setImage] = useState("");

    const encodeImageToBase64 = async (imageUri) => {
        try {
            const { uri } = await FileSystem.getInfoAsync(imageUri);
            const base64 = await FileSystem.readAsStringAsync(uri, {
                encoding: FileSystem.EncodingType.Base64,
            });

            return base64;
        } catch (error) {
            console.error("Error encoding image to base64:", error);
            return null;
        }
    };

    const onSave = async () => {
        if (!image || !user) return;

        try {
            const imageBase64 = await encodeImageToBase64(image);
            if (!imageBase64) return;
            const response = await user.setProfileImage({
                file: `data:image/png|jpeg;base64,${imageBase64}`,
            });
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    };


    // Delete account 
    const handleDelete = async () => {
        try {
            await user.delete();
            Alert.alert('Succesfully Deleted', 'Thank you for using Nail Salon Studio.',);

        } catch (error) {
            Alert.alert('Failed to delete your account. Please try again later.');
            console.error('Failed to delete account:', error);
        }
    };

    // Get user confirmation beofre proceeding to delete
    const userConfirmation = () =>
        Alert.alert('Delete Account', 'This action can not be undone', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'Delete', onPress: () => handleDelete() },
        ]);

    //Update profile photo
    const handleImageUpload = async () => {

        //Declare a variable options for the image picker
        // const options = ImagePicker.ImagePickerOptions = {
        //     mediaTypes: ImagePicker.MediaTypeOptions.Images = "Images",
        //     allowsEditing: true,
        //     aspect: [4, 3],
        //     quality: 1,
        // }

        //Allow user to choose where they want to upload a photo from
        Alert.alert('Upload Photo', 'Upload photo from', [
            {
                text: 'Gallery',
                onPress: () => uploadFromGallery(),
            },
            { text: 'Camera', onPress: () => uploadFromCamera() },
        ]);

        // Choose a photo from device gallery
        const uploadFromGallery = async () => {
            // await ImagePicker.requestMediaLibraryPermissionsAsync()
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5
            });

            // Check if an image was selected
            if (!result.canceled && result.assets.length > 0 && result.assets[0].uri !== undefined) {
                setImage(result.assets[0].uri)
                await onSave()
            }
        }




        // Use device camera to take a photo
        const uploadFromCamera = async () => {
            await ImagePicker.requestCameraPermissionsAsync()
            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                cameraType: ImagePicker.CameraType.front,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.75,
            })
            // const base64Img = await FileSystem.readAsStringAsync(result?.assets?.[0].uri, { encoding: FileSystem?.EncodingType?.Base64 });
            // //save image uri in image state variable
            // console.log(base64Img)

            // await user?.setProfileImage({ file: base64Img });
            if (result.assets[0].uri = !undefined) {
                setImage(result.assets[0].uri)
            }
        }
    };

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Header name='Manage Account' nav={navigation} />

                <View style={styles.componentsContainer}>
                    <View style={styles.profileLogo}>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { handleImageUpload() }}>


                                <Image source={{ uri: user.imageUrl }}
                                    style={styles.profileImage} />




                                <View>
                                    <Ionicons style={styles.cameraIcon} name="camera-reverse-sharp" size={22} color='rgba(255, 167, 64, 0.8)' />
                                </View>
                            </TouchableOpacity>
                            <View style={styles.profileImgTxtContainer}>
                                <Text style={styles.profileImageText}>{user.firstName}{user.lastName}</Text>
                            </View>

                        </View>
                    </View>
                    <ScrollView>
                        <TableView>
                            <View>
                                <View>
                                    <Section sectionPaddingBottom={20} headerTextStyle={styles.sectionHeaderTextStyle} header='personal Info'>
                                        <Cell
                                            cellStyle='RightDetail'
                                            backgroundColor='#fff'
                                            title='Name'
                                            titleTextStyle={styles.titleTextStyle}
                                            detail={
                                                <Text style={styles.titleTextStyle}>
                                                    {user.firstName} {user.lastName}
                                                </Text>}
                                        />

                                        <Cell
                                            cellStyle='RightDetail'
                                            backgroundColor='#fff'
                                            title='Email'
                                            titleTextStyle={styles.titleTextStyle}
                                            detail={<Text style={styles.titleTextStyle}>{user.primaryEmailAddress.emailAddress}</Text>}
                                        />
                                    </Section>

                                    <Section headerTextStyle={styles.sectionHeaderTextStyle} header='security'>
                                        <Cell

                                            cellStyle="Basic"
                                            backgroundColor='#fff'
                                            title="Update Password"
                                            titleTextStyle={styles.titleTextStyle}
                                            accessory="DisclosureIndicator"
                                            onPress={() => navigation.push('update_password')}
                                        />
                                    </Section>

                                    <Section headerTextStyle={styles.sectionHeaderTextStyle} header='Account'>
                                        <Cell
                                            cellStyle='RightDetail'
                                            backgroundColor='#fff'
                                            title='Sign Out'
                                            titleTextStyle={styles.titleTextStyle}
                                            detail={
                                                <AntDesign name="logout" size={20} color="orange" />
                                            }
                                            onPress={() => signOut()}
                                        />
                                        <Cell
                                            cellStyle='RightDetail'
                                            backgroundColor='#fff'
                                            title='Delete Account'
                                            titleTextStyle={styles.titleTextStyle}
                                            detail={<AntDesign name="delete" size={20} color="red" />}
                                            onPress={() => userConfirmation()}
                                        />
                                    </Section>
                                </View>
                            </View>
                        </TableView>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'rgba(255, 167, 64, 0.1)',
        height: screen.height
    },
    componentsContainer: {
        backgroundColor: '#fff',
        paddingBottom: screen.height * 0.5
    },
    profileLogo: {
        backgroundColor: '#fff',
        alignItems: 'center',
        display: 'flex',
        paddingVertical: 30
    },

    profileImage: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        borderRadius: 50,
        marginBottom: 5
    },
    info: {
        width: screen.width * 0.9,
        height: screen.height * 0.05,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    deleteButton: {
        // borderWidth: 1,
        borderColor: 'orange',
        alignSelf: 'center',
        marginTop: 25
    },
    deleteButtonText: {
        alignItems: 'center',
        padding: 10
    },

    sections: {
        backgroundColor: '#fff',
    },
    cameraIcon: {
        position: 'absolute',
        right: 0,
        bottom: 10,
        right: -15,
    },
    profileImageText: {
        fontWeight: '300',
        fontSize: 20,
        paddingVertical: 10
    },
    titleTextStyle: {
        fontWeight: '300',
        paddingVertical: 5,
        fontSize: 16
    },
    sectionHeaderTextStyle: {
        color: 'darkblue',
        fontWeight: '300'
    }


});