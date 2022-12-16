import {Image, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import {TopPanel} from "../components/Panels";
import {DashedLine} from "../components/TopicClass"
import {useNavigation} from "@react-navigation/native";
import TopicClass from "../components/TopicClass";
import {useSelector} from "react-redux";

export default function LessonScreen({route}) {
    const {lessonClass} = route.params
    const navigation = useNavigation()
    const newTopicsList = []
    const {role} = useSelector(state => state.userReducer);
    const addTopicBlock = () => {
        if (role === "teacher") {
            return <Pressable onPress={() => {
                lessonClass.addTopic(new TopicClass(lessonClass.topicsList.length + 1, []));
                navigation.navigate('Lesson', {lessonClass: lessonClass})
            }} style={{backgroundColor: "#dab", width: 309, height: 93, marginTop: 30, alignSelf: "center"}}/>
        } else {
            return null
        }
    }
    for (let i = 0; i < lessonClass.topicsList.length; i++) {
        const topic = lessonClass.topicsList[i]
        newTopicsList.push(<Pressable onPress={() => {
            if (role === "student") {
                topic.complete()
                lessonClass.checkCompletion()
            }
            navigation.navigate('Topic', {topicClass: topic});

        }}
        >{topic.block}</Pressable>)
        newTopicsList.push(DashedLine(i + 1))
    }
    newTopicsList.pop()
    const window = useWindowDimensions()
    return (<View style={styles.container}>
        <TopPanel/>
        <ScrollView>
            <View style={{marginBottom: 32, marginTop: 40, minHeight: window.height - 289}}>
                {newTopicsList}
                {addTopicBlock()}
            </View>
            <Image style={{alignSelf: "center", marginBottom: 6}} source={require('../images/castle.png')}/>
            <View style={{backgroundColor: "#D9D9D9", marginBottom: 39, height: 23}}>
                <Text style={{
                    alignSelf: "center", fontWeight: "800", fontSize: 14, lineHeight: 19
                }}>Контрольный рубеж</Text>
            </View>
        </ScrollView>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff'
    }
})