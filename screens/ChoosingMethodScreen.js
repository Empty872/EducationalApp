import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import React from "react";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../firebase-config";
import {getAuth, signInAnonymously} from "firebase/auth";
import App from "../App";

export default function ChoosingMethodScreen() {
    const navigation = useNavigation()
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const handleSignIn = () => {
        signInAnonymously(auth)
            .then((userCredential) => {
                console.log('Signed in!')
                App.user = userCredential.user
                console.log(App.user.email)
                navigation.navigate('Home');
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <View style={styles.container}>
            <Text>Choose a method of Registration or Login</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate('LoginByEmail')
            }}
                              style={[styles.button, {backgroundColor: '#00CFEB90'}]}>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>By Email</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                handleSignIn()
            }}
                              style={[styles.button, {backgroundColor: '#00CFEB90'}]}>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Anonymously</Text>
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
})