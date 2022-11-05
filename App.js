import React, {Component} from "react";
import {Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen"
import EmailLoginScreen from "./screens/EmailLoginScreen"
import ChoosingMethodScreen from "./screens/ChoosingMethodScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import ChangePasswordScreen from "./screens/ChangePasswordScreen";
import {FullNavigationPanel, TopPanel, BottomPanel} from "./Components"

const Stack = createNativeStackNavigator();

export default function App() {
    const user = null
    return (
        // <View style={styles.container}>
        //     <TopPanel/>
        //     <BottomPanel/>
        // </View>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ChoosingMethod">
                <Stack.Screen name="ChangePassword" component={ChangePasswordScreen}/>
                <Stack.Screen name="ChoosingMethod" component={ChoosingMethodScreen}/>
                <Stack.Screen name="LoginByEmail" component={EmailLoginScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="ResetPassword" component={ResetPasswordScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
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