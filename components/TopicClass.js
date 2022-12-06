import {Image, Text, View} from "react-native";

export default class TopicClass{
    constructor(number, content) {
        this.number = number
        this.block = new TopicBlock(number)
        this.content = content
    }
    addContent(content){
        this.content.push(content)
    }
}
function LeftTopicBlock(number) {
    return (
        <View style={{
            marginBottom: -20, display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: 40,
            marginRight: "auto"
        }}>
            <Image style={{marginBottom: 4}} source={require('../images/blueCircle.png')}/>
            <Text>Тема {number}</Text>
        </View>
    )
}
function RightTopicBlock(number) {
    return (
        <View style={{
            marginBottom: -20, display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginRight: 40,
            marginLeft: "auto"}}>
            <Image style={{marginBottom: 4}} source={require('../images/blueCircle.png')}/>
            <Text>Тема {number}</Text>
        </View>
    )
}
function TopicBlock(number) {
    if (number % 2 === 1) {
        return LeftTopicBlock(number, '')
    } else {
        return RightTopicBlock(number, '')
    }
}
export function DashedLine(number) {
    if (number % 2 === 1) {
        return (
            <Image style={{marginLeft: 135, marginBottom: -63}} source={require('../images/dashedLine_1.png')}/>)
    } else {
        return (<Image style={{marginRight: 135, marginLeft: "auto", marginBottom: -63}}
                       source={require('../images/dashedLine_2.png')}/>)
    }
}