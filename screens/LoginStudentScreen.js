import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {setRole} from "../redux/actions";

export default function LoginStudentScreen() {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Вход для учеников
            </Text>
            <Text style={styles.descr}>
                Логин
            </Text>
            <TextInput style={[styles.input, {marginBottom: 18}]}/>
            <Text style={styles.descr}>
                Пароль
            </Text>
            <TextInput style={[styles.input, {marginBottom: 31}]}/>
            <Pressable onPress={() => {
                dispatch(setRole("student"));
                navigation.navigate('Home')
            }} style={styles.button}>
                <Text style={{fontSize: 22, fontWeight: '700', color: 'white'}}>
                    Далее
                </Text>
            </Pressable>
            <Pressable onPress={() => {
                navigation.goBack();
                navigation.navigate('LoginTeacher')
            }} style={{marginBottom: 40}}>
                <Text style={{fontSize: 15, fontWeight: '700', color: 'black'}}>
                    Войти как учитель
                </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('LoginHelp')}>
                <Text style={{fontSize: 15, fontWeight: '700', color: '#8000FF'}}>
                    Помогите мне!
                </Text>
            </Pressable>
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
    title: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 18,
    },
    descr: {
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 7,
        left: 10,
        alignSelf: 'flex-start',
    },
    button: {
        width: '95%',
        height: 75,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 10,
        marginBottom: 18,
        backgroundColor: '#8000FF',
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        width: '95%',
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        padding: 10,
    },
})