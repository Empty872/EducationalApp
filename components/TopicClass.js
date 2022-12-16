import {Image, Text, View} from "react-native";

export default class TopicClass {
    constructor(number, content) {
        this.number = number
        this.isCompleted = false
        this.content = content
        this.block = this.getBlock()

    }

    addContent(content) {
        this.content.push(content)
    }

    complete() {
        this.isCompleted = true
        this.block = this.getBlock()
    }

    getLeftBlock() {
        const circleSource = this.isCompleted ? require('../images/greenCircle.png') : require('../images/blueCircle.png')
        return (
            <View style={{
                marginBottom: -20, display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: 40,
                marginRight: "auto"
            }}>
                <Image style={{marginBottom: 4}} source={circleSource}/>
                <Text>Тема {this.number}</Text>
            </View>
        )
    }

    getRightBlock() {
        const circleSource = this.isCompleted ? require('../images/greenCircle.png') : require('../images/blueCircle.png')
        return (
            <View style={{
                marginBottom: -20, display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: 40,
                marginLeft: "auto"
            }}>
                <Image style={{marginBottom: 4}} source={circleSource}/>
                <Text>Тема {this.number}</Text>
            </View>
        )
    }

    getBlock() {
        if (this.number % 2 === 1) {
            return this.getLeftBlock()
        } else {
            return this.getRightBlock()
        }
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