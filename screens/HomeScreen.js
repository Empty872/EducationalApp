import {Image, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import {BottomPanel, TopAndLeftPanel} from "../components/Panels";
import SubjectBlock from "../components/SubjectBlock";
import LessonBlock from "../components/LessonBlock";
import TopicBlock from "../components/TopicBlock"
import {useNavigation} from "@react-navigation/native";

const dashedLine = (className) => {
    return (<View style={{flexDirection: "row", alignItems: "center", marginBottom: 19}}>
        <View style={{
            width: "15%",
            height: 5,
            borderBottomWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.2)",
            borderStyle: "dashed",
            transform: [{rotate: "0.27deg"}]
        }}/>
        <Text style={{
            fontStyle: "normal", fontWeight: "700", fontSize: 13, lineHeight: 18, color: "rgba(0, 0, 0, 0.2)"
        }}>{className}</Text>
        <View style={{
            width: "85%",
            height: 7,
            borderBottomWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.2)",
            borderStyle: "dashed",
            transform: [{rotate: "0.24deg"}]
        }}/></View>)
}


export default function HomeScreen() {
    const window = useWindowDimensions()
    const navigation = useNavigation()
    const MathLessonsList =
        [LessonBlock(require('../images/greenRectangle.png'), "Урок 1", "Что такое дроби?", require('../images/subjectImages/questions.png'), 1, [TopicBlock(1, [
        <Text>Обычный текст</Text>])]),
        LessonBlock(require('../images/blueRectangle.png'), "Урок 2", "Сравнение дробей", require('../images/subjectImages/comprasion.png'), 3, [TopicBlock(1, [
            <Text>Новый текст</Text>, <Text>Больше текста</Text>]), TopicBlock(2, [<Image
            source={require('../images/котик.png')}/>]), TopicBlock(3, [<Image
            source={require('../images/castle.png')}/>, <Text>Последний текст</Text>])]),
        LessonBlock(require('../images/blueRectangle.png'), "Урок 3", "Сложение и вычитание дробей", require('../images/subjectImages/sum.png'), 5),
        LessonBlock(require('../images/blueRectangle.png'), "Урок 4", "Умножение и деление дробей", require('../images/subjectImages/separate.png'), 9)]
    return (<View style={styles.container}>
        <TopAndLeftPanel/>
        <View style={{height: window.height - 100}}>
            <ScrollView>
                <Text style={styles.header}>Возвращайтесь к учебе!</Text>
                {dashedLine("6Б класс")}
                {SubjectBlock(require('../images/math.png'), "Математика", MathLessonsList)}
                {SubjectBlock(require('../images/biology.png'), "Биология")}
                {SubjectBlock(require('../images/biology.png'), "Биология")}
                {SubjectBlock(require('../images/biology.png'), "Биология")}
                {SubjectBlock(require('../images/biology.png'), "Биология")}
                {SubjectBlock(require('../images/biology.png'), "Биология")}
                <Pressable  onPress={()=>navigation.navigate('CreateSubject')} style={{backgroundColor: "#dab", width: 309, height: 93}}/>
            </ScrollView>
        </View>
        {BottomPanel("HomeScreen")}
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff'
    }, header: {
        fontWeight: "700", fontSize: 22, lineHeight: 30, marginTop: 19, left: 17, marginBottom: 8
    }
});