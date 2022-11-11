import React from "react";
import {useNavigation} from "@react-navigation/native";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../firebase-config";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updatePassword} from "firebase/auth";
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import App from "../App";

export default function ChangePasswordScreen() {

    const [password, setPassword] = React.useState('')
    const [newPassword, setNewPassword] = React.useState('')
    const navigation = useNavigation();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleUpdatePassword = () => {

        updatePassword(App.user, newPassword)
            .then(() => {
                console.log('Password changed!')
                Alert.alert("Password changed")
            })
            .catch(error => {
                console.log(error)
                Alert.alert(error.message)
            })
    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}> E-mail: {App.user.email}</Text>
            </View>
            <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Old Password</Text>
                <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder='Old Password'
                           secureTextEntry={true}/>
            </View>
            <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>New Password</Text>
                <TextInput onChangeText={(text) => setNewPassword(text)} style={styles.input} placeholder='New Password'
                           secureTextEntry={true}/>
            </View>
            <TouchableOpacity onPress={handleUpdatePassword} style={[styles.button, {backgroundColor: '#00CFEB90'}]}>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Change Password</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#36485f',
        paddingRight: 60,
        paddingLeft: 60,
        alignItems: "center",
        justifyContent: 'center',
        textDecorationColor: "#fff",
    },
    input: {
        width: 250,
        height: 40,
        color: '#fff',
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'ffffff90',
        marginBottom: 20
    },
    button: {
        width: 250,
        height: 40,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: '#00CFEB90',
        alignItems: "center",
        justifyContent: "center",
    }
});