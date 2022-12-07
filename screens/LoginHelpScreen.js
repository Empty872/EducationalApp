import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";

export default function LoginHelpScreen() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.back}
                source={require('../images/icons/backArrow.png')}
            />
            <View style={{ marginVertical: '30%' }}>
                <Text style={styles.question}>
                    1. У меня нет логина и пароля. Где я могу их получить?
                </Text>
                <Text style={styles.answer}>
                    Пароль и логин выдает ваша образовательная организация (школа). Обратитесь к преподавателю или директору
                </Text>
                <Text style={styles.question}>
                    2. Пароль или логин неверны.Что делать?
                </Text>
                <Text style={styles.answer}>
                    Возможно, ваш пароль или логин был изменён вашей образовательной организацией (школой).Обратитесь к преподавателю или директору.
                </Text>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingRight: 30,
        paddingLeft: 30,
        alignItems: "start",
        justifyContent: 'start',
        textDecorationColor: "#fff",
    },
    back: {
        left: -10,
    },
    question: {
        fontSize: 15,
        fontWeight: '700',
        marginBottom: 19
    },
    answer: {
        left: 20,
        fontSize: 15,
        fontWeight: '700',
        color: 'rgba(0, 0, 0, 0.5)',
        marginBottom: 32
    },
})