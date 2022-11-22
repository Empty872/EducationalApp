import {Image, StyleSheet, Text, View} from "react-native";
import {TopPanel} from "../components/Panels";
import {LeftTopicBlock, RightTopicBlock, LeftDashedLine, RightDashedLine} from "../components/TopicBlock"

export default function LessonScreen() {
    const count = 5
    const topics = []
    for (let i = 1; i <= count; i++) {
        if (i % 2 === 1) {
            topics.push(LeftTopicBlock(i))
            topics.push(LeftDashedLine())
        } else {
            topics.push(RightTopicBlock(i))
            topics.push(RightDashedLine())
        }
    }
    topics.pop()
    return (
        <View style={styles.container}>
            <TopPanel/>
            <View style={[styles.screen, {paddingTop: 40}]}>
                <View style={{marginBottom: 32}}>
                    {topics}
                </View>
                <Image style={{alignSelf: "center", marginBottom: 6}} source={require('../images/castle.png')}/>
                <View style={{backgroundColor: "#D9D9D9", paddingLeft: 0, paddingRight: 0}}>
                    <Text style={{
                        alignSelf: "center", fontWeight: "800",
                        fontSize: 14,
                        lineHeight: 19
                    }}>Контрольный рубеж</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff'
    },
    screen: {
        top: 50,
    }
})