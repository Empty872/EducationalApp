import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import LessonClass from "../components/LessonClass";

export default function CreateLessonScreen({route}) {
    const {subjectClass} = route.params
    const [name, setName] = useState('')
    const navigation = useNavigation()
    const lessonNumber = subjectClass.lessonsList.length + 1
    const addLessonHandler = (subject) => {
        subject.addLesson(new LessonClass(require('../images/blueRectangle.png'), "Урок " + lessonNumber, name, require('../images/subjectImages/separate.png'), []));
    }
    return (<View style={styles.container}>
        <View>
            <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Введите название урока</Text>
            <TextInput onChangeText={(text) => setName(text)} style={styles.input} placeholder='Название урока'/>
        </View>
        <Pressable onPress={() => {
            addLessonHandler(subjectClass)
            navigation.navigate('Subject', {subjectClass: subjectClass});
        }} style={[styles.button, {backgroundColor: '#00CFEB90'}]}>
            <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Добавить урок</Text>
        </Pressable>
    </View>)
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
    }, input: {
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
    }, button: {
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