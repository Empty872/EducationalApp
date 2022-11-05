import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../firebase-config";
import {getAuth, sendPasswordResetEmail, pass} from "firebase/auth";
import React from "react";

export default function ResetPasswordScreen() {
    const [email, setEmail] = React.useState('')
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(function () {
                alert('Please check your email...')
            }).catch(function (e) {
            console.log(e)
        })
    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}> E-mail</Text>
                <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder='E-mail'/>
            </View>
            <TouchableOpacity onPress={handleResetPassword} style={[styles.button, {backgroundColor: '#6792F090'}]}>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Reset Password</Text>
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