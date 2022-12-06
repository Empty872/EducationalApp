// import LessonBlock from "./LessonBlock";
import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";

export default class LessonClass{
    constructor(number, name, imageUrl, topicsList) {
        this.block = new LessonBlock(number, name, imageUrl, false)
        this.name = <Text>{name}</Text>
        this.topicsList = topicsList
    }
    addTopic(topic){
        this.topicsList.push(topic)
    }
}
function LessonBlock(lessonNumberText, lessonName, imageUrl, isCompleted) {
    const backgroundImage = isCompleted ? require('../images/greenRectangle.png') : require('../images/blueRectangle.png')
    const textColor = isCompleted ? "#000" : "#fff"
    return (
        <ImageBackground style={{
            marginBottom: 16,
            left: 26,
            width: 309,
            minHeight: 93,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }} source={backgroundImage}>
            <View style={{left: 18, maxWidth: "70%"}}>
                <Text style={[styles.blockName, {color: textColor}]}>{lessonNumberText}</Text>
                <Text style={[styles.blockDescription, {color: textColor}]}>{lessonName}</Text>
            </View>
            <Image source={imageUrl} style={{marginTop: 29, marginRight: 34}}/>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    blockName: {
        top: 9,
        fontWeight: "600",
        fontSize: 20,
        lineHeight: 27,
        marginBottom: 10
    },
    blockDescription: {
        fontWeight: "400",
        fontSize: 18,
        lineHeight: 25,
        marginBottom: 8
    }
})