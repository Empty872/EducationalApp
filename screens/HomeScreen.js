import {Alert, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import App from "../App";
import {createUserWithEmailAndPassword, updatePassword} from "firebase/auth";
import {useNavigation} from "@react-navigation/native";
import {BottomPanel, TopPanel} from "../Components";

export default function HomeScreen() {
    const navigation = useNavigation()
    // if (App.user.email !== null) {
    //     return (
    //         <View style={styles.container}>
    //             <TopPanel/>
    //             <TouchableOpacity onPress={() => {
    //                 navigation.navigate('ChangePassword');
    //             }} style={[styles.button, {backgroundColor: '#6792F090'}]}>
    //                 <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Change Password</Text>
    //             </TouchableOpacity>
    //             <BottomPanel/>
    //         </View>
    //     )
    // } else {
    return (
        <View style={styles.container}>
            <TopPanel/>
            <Text style={{color: '#fff'}}>Home Screen</Text>
            <BottomPanel/>
        </View>
    )
    //}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
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