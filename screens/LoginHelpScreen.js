import {StyleSheet, Text, Image, View, Pressable} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";

export default function LoginHelpScreen() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.goBack()} style={{left: 10, top: 5, marginBottom: 50}}>
                <Image
                    source={require('../images/icons/backArrow.png')}
                />
            </Pressable>
            <View>
                <Text style={styles.question}>
                    1. У меня нет логина и пароля. Где я могу их получить?
                </Text>
                <Text style={styles.answer}>
                    Пароль и логин выдает ваша образовательная организация (школа). Обратитесь к преподавателю или
                    директору
                </Text>
                <Text style={styles.question}>
                    2. Пароль или логин неверны.Что делать?
                </Text>
                <Text style={styles.answer}>
                    Возможно, ваш пароль или логин был изменён вашей образовательной организацией (школой).Обратитесь к
                    преподавателю или директору.
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "flex-start",
        justifyContent: 'flex-start',
        textDecorationColor: "#fff",
    },
    question: {
        marginLeft: 19,
        marginRight: 19,
        fontSize: 15,
        fontWeight: '700',
        marginBottom: 19
    },
    answer: {
        marginLeft: 32,
        marginRight: 19,
        fontSize: 15,
        fontWeight: '700',
        color: 'rgba(0, 0, 0, 0.5)',
        marginBottom: 32
    },
})