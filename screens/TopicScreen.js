import {Pressable, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {TopPanel} from "../components/Panels";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {setSubjectsList} from "../redux/actions";

export default function TopicScreen({route}) {
    const {subjectsList} = useSelector(state => state.userReducer);
    const {subjectNumber, lessonNumber, topicNumber} = route.params
    const content = subjectsList[subjectNumber][2][lessonNumber][1][topicNumber][1]
    const neededContent =[]
    for (let i=0; i<content.length; ++i)
    {neededContent.push(content[i])}
    const [newContent, setNewContent] = useState('')
    const addContentHandler=(list)=>{
        list[subjectNumber][2][lessonNumber][1][topicNumber][1].push(<Text>{newContent}</Text>)
        return list
    }
    const dispatch = useDispatch()
    return (<View style={styles.container}>
        <TopPanel/>
        <View>
            <View style={{height: "9.62%"}}>
                <Text style={{
                    marginTop: '4%', left: "8.3%", fontWeight: '700',
                    fontSize: 20,
                    lineHeight: 27
                }}>Тема {topicNumber+1}</Text>
            </View>
            <View style={{height: "84.245%", width: "87.5%", left: "6.25%"}}>
                <View style={{
                    width: "98.412%",
                    height: "98.819%",
                    marginLeft: 5,
                    marginBottom: 6,
                    backgroundColor: "rgba(218, 218, 218, 1)",
                    borderRadius: 20,
                    position: "absolute"
                }}/>
                <ScrollView style={{
                    width: "98.412%",
                    height: "98.819%",
                    marginTop: 6,
                    marginRight: 5,
                    backgroundColor: "rgba(232, 232, 232, 1)",
                    borderRadius: 20,
                    position: "absolute",
                    paddingLeft: 29,
                    paddingRight: 29,
                    paddingTop: 24

                }}>
                    {neededContent}
                    <View style ={{backgroundColor: '#dab'}}>
                        <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Введите текст</Text>
                        <TextInput onChangeText={(text) => setNewContent(text)} style={styles.input} placeholder='текст'/>
                    </View>
                    <Pressable onPress={()=>dispatch(setSubjectsList(addContentHandler(subjectsList)))}
                               style={[styles.button, {backgroundColor: '#00CFEB90'}]}>
                        <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Создать урок</Text></Pressable>
                </ScrollView>
            </View>
        </View>
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff'
    },
    text: {
        marginBottom: 31, fontWeight: "600", fontSize: 14,
        lineHeight: 19
    },
    input: {
        width: 250,
        minHeight: 40,
        color: '#000',
        borderColor: '#000',
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
        marginBottom: 50
    }
});