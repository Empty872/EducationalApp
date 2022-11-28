import LessonBlock from "./LessonBlock";
import {Text} from "react-native";

export default class LessonClass{
    constructor(backgroundImageUrl, number, name, imageUrl, topicsList) {
        this.block = new LessonBlock(backgroundImageUrl, number, name, imageUrl)
        this.name = <Text>{name}</Text>
        this.topicsList = topicsList
    }
    addTopic(topic){
        this.topicsList.push(topic)
    }
}