import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";

export default class LessonClass {
    constructor(number, name, imageSource, topicsList) {
        this.number = number
        this.imageSource = imageSource
        this.name = name
        this.topicsList = topicsList
        this.isCompleted = false
        this.completedCount = 0
        this.block = this.getBlock()
    }

    addTopic(topic) {
        this.topicsList.push(topic)
    }

    checkCompletion() {
        if (this.completedCount === this.topicsList.length) {
            this.isCompleted = true;
        } else {
            this.isCompleted = true;
        }
        this.block = this.getBlock();

    }

    getBlock() {
        const backgroundImageSource = this.isCompleted ? require('../images/greenRectangle.png') : require('../images/blueRectangle.png')
        const textColor = this.isCompleted ? "#000" : "#fff"
        return (
            <ImageBackground style={{
                marginBottom: 16,
                left: 26,
                width: 309,
                minHeight: 93,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }} source={backgroundImageSource}>
                <View style={{left: 18, maxWidth: "70%"}}>
                    <Text style={[styles.blockName, {color: textColor}]}>{this.number}</Text>
                    <Text style={[styles.blockDescription, {color: textColor}]}>{this.name}</Text>
                </View>
                <Image source={this.imageSource} style={{marginTop: 29, marginRight: 34}}/>
            </ImageBackground>
        )
    }
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