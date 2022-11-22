import {StyleSheet, Text, View} from "react-native";
import {BottomPanel, TopAndLeftPanel} from "../components/Panels";
import SubjectBlock from "../components/SubjectBlock";
import LessonBlock from "../components/LessonBlock";

const dashedLine = (className) => {
    return (<View style={{flexDirection: "row", alignItems: "center", marginTop: 17.5, marginBottom: 13}}>
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
    const MathLessonsList = [
        LessonBlock(require('../images/greenRectangle.png'), "Урок 1", "Что такое дроби?", require('../images/subjectImages/questions.png')),
        LessonBlock(require('../images/blueRectangle.png'), "Урок 2", "Сравнение дробей", require('../images/subjectImages/comprasion.png')),
        LessonBlock(require('../images/blueRectangle.png'), "Урок 3", "Сложение и вычитание дробей", require('../images/subjectImages/sum.png')),
        LessonBlock(require('../images/blueRectangle.png'), "Урок 4", "Умножение и деление дробей", require('../images/subjectImages/separate.png'))]
    return (<View style={styles.container}>
        <TopAndLeftPanel/>
        <View style={styles.screen}>
            <Text style={styles.header}>Возвращайтесь к учебе!</Text>
            {dashedLine("6Б класс")}
            {SubjectBlock(require('../images/math.png'), "Математика", MathLessonsList)}
            {SubjectBlock(require('../images/biology.png'), "Биология")}
        </View>
        {BottomPanel("HomeScreen")}
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff'
    }, screen: {
        top: 50,
    }, header: {
        fontWeight: "700", fontSize: 22, lineHeight: 30, top: 19, left: 17, marginBottom: 17.5
    }
});