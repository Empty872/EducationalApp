import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import Answer from "../components/Answer";

export default function CreateContentQuestionScreen({route}) {
    const {topicClass} = route.params
    const [question, setQuestion] = useState('Вопрос')
    const [answer, setAnswer] = useState('')
    const [description, setDescription] = useState('')
    const [answers, setAnswers] = useState([])
    const addAnswerHandler = () => {
        setAnswers([...answers, new Answer(answer, description)])
    }
    const addContentHandler = (content) => {
        topicClass.addContent(content);
    }
    const newFullAnswers = []
    for (let i = 0; i < answers.length; i++) {
        // newAnswers.push(answers[i].getBlock())
        newFullAnswers.push(answers[i].getFullBlock())
    }
    const navigation = useNavigation()
    return (<View style={styles.container}>
        <View>
            <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Введите вопрос</Text>
            <TextInput onChangeText={(question) => setQuestion(<Text style={{marginBottom: 43}}>{question}</Text>)}
                       style={styles.input}
                       placeholder='вопрос'/>
        </View>
        <Text>Введите ответы</Text>
        {newFullAnswers}
        <TextInput onChangeText={(answer) => setAnswer(answer)}
                   style={styles.input}
                   placeholder='новый ответ'/>
        <TextInput onChangeText={(description) => setDescription(description)}
                   style={styles.input}
                   placeholder='объяснение ответа/ошибки'/>
        <Pressable onPress={() => {
            addAnswerHandler()
        }} style={[styles.button, {backgroundColor: '#00CFEB90'}]}>
            <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Добавить ответ</Text>
        </Pressable>
        <Pressable onPress={() => {
            addContentHandler(new TestBlock(question, answers))
            navigation.navigate('Topic', {topicClass: topicClass});
        }} style={[styles.button, {backgroundColor: '#00CFEB90'}]}>
            <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Добавить вопрос</Text>
        </Pressable>
    </View>)
}
const TestBlock = (question, answers) => {
    const newAnswers = []
    for (let i = 0; i < answers.length; i++) {
        newAnswers.push(answers[i].getBlock())
    }
    return <View style={{marginBottom: 33}}>
        <Text style={{
            fontWeight: "600", fontSize: 14, lineHeight: 19, marginBottom: 21,
        }}>ПРОВЕРЬ СЕБЯ</Text>
        {question}
        {newAnswers}
    </View>
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