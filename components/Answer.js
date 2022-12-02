import {Pressable, Text, View} from "react-native";
import React from "react";

export default class Answer {
    constructor(answer, description) {
        this.answer = answer;
        this.description = description;
        this.isPressed = false
    }

    getBlock() {
        if (this.isPressed) {
            return (<View style={{marginBottom: 33, alignSelf: "flex-start"}}>
                <View style={{flexDirection: "row", marginBottom: 9}}>
                    <Pressable
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
        } else {
            return (<View style={{marginBottom: 33, alignSelf: "flex-start"}}>
                <View style={{flexDirection: "row", marginBottom: 9}}>
                    <Pressable onPress={() => this.isPressed = true}
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
            </View>)
        }
    }
}