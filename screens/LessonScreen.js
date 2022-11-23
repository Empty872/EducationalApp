import {Image, ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import {TopPanel} from "../components/Panels";
import {DashedLine} from "../components/TopicBlock"

export default function LessonScreen({route}) {
    const {topicsCount, topicsList} = route.params
    const topics = []
    for (let i = 1; i <= topicsCount; i++) {
        topics.push(topicsList[i-1])
        topics.push(DashedLine(i))
    }
    topics.pop()
    const window = useWindowDimensions()
    return (<View style={styles.container}>
        <TopPanel/>
        <ScrollView>
            <View style={{marginBottom: 32, marginTop: 40, minHeight: window.height - 289}}>
                {topics}
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