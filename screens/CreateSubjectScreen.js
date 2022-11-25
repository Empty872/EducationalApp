import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import React, {useState} from "react";
import SubjectBlock from "../components/SubjectBlock";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {setSubjectsList} from "../redux/actions";

export default function CreateSubjectScreen() {
    const [name, setName] = useState('')
    const navigation = useNavigation()
    const {subjectsList} = useSelector(state => state.userReducer);
    const dispatch=useDispatch()
    return (<View style={styles.container}>
            <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Введите название предмета</Text>
                <TextInput onChangeText={(text) => setName(text)} style={styles.input} placeholder='Название предмета'/>
            </View>
            <Pressable onPress={()=>{navigation.goBack(); dispatch(setSubjectsList([...subjectsList, [SubjectBlock(require('../images/math.png'), name), name, [[]]]]))}} style={[styles.button, {backgroundColor: '#00CFEB90'}]}>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Создать предмет</Text>
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