import {Pressable, Text, View} from "react-native";
import React, {useState} from "react";

export default class Answer {
    constructor(answer, description) {
        this.answer = answer;
        this.description = description;
        this.isPressed = false
    }

    getBlock() {
        const [newDescription, setNewDescription] = useState('')
        return (<View style={{marginBottom: 33, alignSelf: "flex-start"}}>
            <View style={{flexDirection: "row", marginBottom: 9}}>
                <Pressable onPress={() => setNewDescription(this.description)}
                           style={{
                               width: 20,
                               height: 20,
                               borderWidth: 2,
                               borderColor: "#B9B9B9",
                               borderRadius: 10,
                               marginRight: 17
                           }}/>
                <Text>{this.answer}</Text>
            </View>
            <Text>{newDescription}</Text>
        </View>)
    }

    getFullBlock() {
        return (<View style={{marginBottom: 33, alignSelf: "flex-start"}}>
            <View style={{flexDirection: "row", marginBottom: 9}}>
                <View
                    style={{
                        width: 20,
                        height: 20,
                        borderWidth: 2,
                        borderColor: "#B9B9B9",
                        borderRadius: 10,
                        marginRight: 17
                    }}/>
                <Text>{this.answer}</Text>
            </View>
            <Text>{this.description}</Text>
        </View>)
    }
}