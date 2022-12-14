import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";

export default function LoginScreen() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Image
                style={{marginBottom: 55, width: 111, height: 141, marginTop: "9.0625%"}}
                source={require('../images/logo.png')}
            />
            <Text style={styles.title}>
                Кто ты?
            </Text>
            <Pressable onPress={() => navigation.navigate('LoginStudent')} style={styles.button}>
                <Text style={styles.text}>
                    Я ученик
                </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('LoginTeacher')} style={styles.button}>
                <Text style={styles.text}>
                    Я учитель
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: 'center',
    },
    button: {
        width: 299,
        height: 68,
        borderColor: "rgba(0, 0, 0, 0.3)",
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 18,
        backgroundColor: '#8000FF',
        paddingLeft: 30,
        alignItems: "flex-start",
        justifyContent: "center",
    },
    title: {
        fontSize: 22,
        marginLeft: 56,
        marginBottom: 28,
        alignSelf: "flex-start",
        fontWeight: '600',
    },
    text: {
        fontSize: 22,
        fontWeight: '700',
        color: 'white'
    }
})