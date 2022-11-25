import {Image, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import {TopPanel} from "../components/Panels";
import TopicBlock, {DashedLine} from "../components/TopicBlock"
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {setSubjectsList} from "../redux/actions";

export default function LessonScreen({route}) {
    const {subjectNumber, lessonNumber} = route.params
    const {subjectsList} = useSelector(state => state.userReducer);
    const navigation = useNavigation()
    const newTopicsList = []
    const dispatch = useDispatch()
    const addTopicHandler=(list)=>{
        list[subjectNumber][2][lessonNumber][1].push([TopicBlock(list[subjectNumber][2][lessonNumber][1].length+1), []])
        return list
    }
    for (let i = 0; i < subjectsList[subjectNumber][2][lessonNumber][1].length; i++) {
        const topic = subjectsList[subjectNumber][2][lessonNumber][1][i]
        newTopicsList.push(<Pressable onPress={() => navigation.navigate('Topic', {subjectNumber:subjectNumber, lessonNumber: lessonNumber, topicNumber: i})}
        >{topic[0]}</Pressable>)
        newTopicsList.push(DashedLine(i+1))
    }
    newTopicsList.pop()
    const window = useWindowDimensions()
    return (<View style={styles.container}>
        <TopPanel/>
        <ScrollView>
            <View style={{marginBottom: 32, marginTop: 40, minHeight: window.height - 289}}>
                {newTopicsList}
                <Pressable onPress={()=>dispatch(setSubjectsList(addTopicHandler(subjectsList)))}
                           style={{backgroundColor: "#dab", width: 309, height: 93, marginTop: 30, alignSelf: "center"}}/>
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