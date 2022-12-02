import LessonBlock from "./LessonBlock";
import {Text} from "react-native";

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