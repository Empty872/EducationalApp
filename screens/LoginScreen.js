import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";
import { getAuth, signInAnonymously } from "firebase/auth";
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
            <Image style={{ marginBottom: 55, width: 111, height: 141 }} source={require('../images/logo.png')}></Image>
            <Text style={[styles.title]}>Кто ты?</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('LoginByEmail') }} style={[styles.button]} >
                <Text style={{ fontSize: 22, fontWeight: '700', color: 'white' }}> Я ученик </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { handleSignIn() }} style={[styles.button]} >
                <Text style={{ fontSize: 22, fontWeight: '700', color: 'white' }}> Я учитель </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingRight: 60,
        paddingLeft: 60,
        alignItems: "center",
        justifyContent: 'center',
        textDecorationColor: "#fff",
    },
    button: {
        width: 300,
        height: 70,
        borderColor: '#fff',
        borderRadius: 10,
        marginVertical: 18,
        backgroundColor: '#8000FF',
        paddingLeft: 30,
        alignItems: "start",
        justifyContent: "center",
    },
    title: {
        fontSize: 22,
        marginLeft: 20,
        marginBottom: 28,
        alignSelf: "start",
        fontWeight: '600',
    }
})