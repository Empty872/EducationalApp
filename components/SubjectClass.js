import SubjectBlock from "./SubjectBlock";
import {Text} from "react-native";

export default class SubjectClass{
    constructor(imageUrl, name, lessonsList) {
        this.block = new SubjectBlock(imageUrl, name)
        this.name = <Text>{name}</Text>
        this.lessonsList = lessonsList
    }
    addLesson(lesson){
        this.lessonsList.push(lesson)
    }
}