import {ImageBackground, StyleSheet, Text} from "react-native";

export default class SubjectClass {
    constructor(imageUrl, name, lessonsList) {
        this.block = new SubjectBlock(imageUrl, name)
        this.name = <Text>{name}</Text>
        this.lessonsList = lessonsList
    }

    addLesson(lesson) {
        this.lessonsList.push(lesson)
    }
}

function SubjectBlock(imageUrl, name) {
    return (
        <ImageBackground style={{marginBottom: 13, left: 17, width: 309, height: 93}} source={imageUrl}>
            <Text style={styles.subjectBlockName}>{name}</Text></ImageBackground>
    )
}

const styles = StyleSheet.create({
    subjectBlockName: {
        color: "#fff", top: 20, left: 25, fontWeight: "700", fontSize: 20, lineHeight: 27,
    }
})