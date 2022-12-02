import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";

export default function CreateContentTextScreen({route}) {
    const {topicClass} = route.params
    const [text, setText] = useState('')
    const navigation = useNavigation()
    const addTextHandler = () => {
        topicClass.addContent(<Text>{text}</Text>);
    }
    return (<View style={styles.container}>
        <View>
            <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Введите информацию</Text>
            <TextInput multiline={true} onChangeText={(text) => setText(text)} placeholder='Информация'/>
        </View>
        <Pressable onPress={() => {
            addTextHandler()
            navigation.navigate('Topic', {topicClass: topicClass});
        }} style={[styles.button, {backgroundColor: '#00CFEB90'}]}>
            <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Добавить информацию</Text>
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