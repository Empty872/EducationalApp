import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Image
                style={{ marginBottom: 55, width: 111, height: 141 }}
                source={require('../images/logo.png')}
            />
            <Text style={styles.title}>
                Кто ты?
            </Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>
                    Я ученик
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>
                    Я учитель
                </Text>
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
    },
    text: {
        fontSize: 22,
        fontWeight: '700',
        color: 'white'
    }
})