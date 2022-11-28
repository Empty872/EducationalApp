import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {TopPanel} from "../components/Panels";
import {useNavigation} from "@react-navigation/native";


export default function SubjectScreen({route}) {
    const {subjectClass} = route.params
    const navigation = useNavigation()
    const newLessonsList = []
    for (let i = 0; i < subjectClass.lessonsList.length; ++i) {
        const lessonClass = subjectClass.lessonsList[i]
        newLessonsList.push(<Pressable style={{width: 309}} onPress={() => navigation.navigate('Lesson', {lessonClass: lessonClass
        })}>{lessonClass.block}</Pressable>)
    }
    return (<View style={styles.container}>
        <TopPanel/>
        <ScrollView>
            <Text style={styles.header}>{subjectClass.name}</Text>
            {newLessonsList}
            <Pressable onPress={() => navigation.navigate('CreateLesson', {subjectClass: subjectClass})}
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