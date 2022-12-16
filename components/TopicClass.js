import {Image, Text, View} from "react-native";

export default class TopicClass {
    constructor(number, content) {
        this.number = number
        this.isCompleted = false
        this.block = new TopicBlock(number, this.isCompleted)
        this.content = content

    }

    addContent(content) {
        this.content.push(content)
    }

    complete() {
        this.isCompleted = true
        this.block = new TopicBlock(this.number, this.isCompleted)
    }
}

function LeftTopicBlock(number, isCompleted) {
    const circleSource = isCompleted ? require('../images/greenCircle.png') : require('../images/blueCircle.png')
    return (
        <View style={{
            marginBottom: -20, display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: 40,
            marginRight: "auto"
        }}>
            <Image style={{marginBottom: 4}} source={circleSource}/>
            <Text>Тема {number}</Text>
        </View>
    )
}

function RightTopicBlock(number, isCompleted) {
    const circleSource = isCompleted ? require('../images/greenCircle.png') : require('../images/blueCircle.png')
    return (
        <View style={{
            marginBottom: -20, display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginRight: 40,
            marginLeft: "auto"
        }}>
            <Image style={{marginBottom: 4}} source={circleSource}/>
            <Text>Тема {number}</Text>
        </View>
    )
}

function TopicBlock(number, isCompleted) {
    if (number % 2 === 1) {
        return LeftTopicBlock(number, isCompleted)
    } else {
        return RightTopicBlock(number, isCompleted)
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