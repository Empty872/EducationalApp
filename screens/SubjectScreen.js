import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {TopPanel} from "../components/Panels";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";


export default function SubjectScreen({route}) {
    const {subjectNumber} = route.params
    const {subjectsList} = useSelector(state => state.userReducer);
    const subjectName = subjectsList[subjectNumber][1]
    const navigation = useNavigation()
    const newLessonsList = []
    for (let i = 0; i < subjectsList[subjectNumber][2].length; ++i) {
        const lesson = subjectsList[subjectNumber][2][i]
        newLessonsList.push(<Pressable style={{width: 309}} onPress={() => navigation.navigate('Lesson', {subjectNumber: subjectNumber, lessonNumber: i
        })}>{lesson[0]}</Pressable>)
    }
    return (<View style={styles.container}>
        <TopPanel/>
        <ScrollView>
            <Text style={styles.header}>{subjectName}</Text>
            {newLessonsList}
            <Pressable onPress={() => navigation.navigate('CreateLesson', {subjectNumber: subjectNumber})}
                       style={{backgroundColor: "#dab", width: 309, height: 93, left: 26}}/>
        </ScrollView>
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 22,
        lineHeight: 30,
        marginTop: 19,
        left: 26,
        marginBottom: 19
    },

});