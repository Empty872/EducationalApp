import {ImageBackground, StyleSheet, Text} from "react-native";

export default class SubjectClass {
    constructor(imageUrl, name, lessonsList) {
        this.block = this.getBlock(imageUrl, name)
        this.name = <Text>{name}</Text>
        this.lessonsList = lessonsList
        this.isCompleted = false
    }

    addLesson(lesson) {
        this.lessonsList.push(lesson)
    }

    getBlock(imageUrl, name) {
        return (
            <ImageBackground style={{marginBottom: 13, left: 17, width: 309, height: 93}} source={imageUrl}>
                <Text style={styles.subjectBlockName}>{name}</Text></ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    subjectBlockName: {
        color: "#fff", top: 20, left: 25, fontWeight: "700", fontSize: 20, lineHeight: 27,
    }
})