import {Image, StyleSheet, Text, View, ImageBackground} from "react-native";
import React from "react";
import {BottomPanel, TopAndLeftPanel} from "../Components";
import styled from "styled-components/native";

const block = (imageUrl, name) => {
    return (
        <View style={{marginTop: 13, left: 17}}>
            <ImageBackground style={{height: 93, width: 308}} source={imageUrl}>
                <Text style={styles.blockName}>{name}</Text></ImageBackground>
        </View>
    )
}

const dashedLine = (className) => {
    return (
        <View style={{flexDirection: "row", alignItems: "center", marginTop: 17.5, marginBottom: 19}}>
            <View style={{
                width: "15%",
                height: 5,
                borderBottomWidth: 1,
                borderColor: "rgba(0, 0, 0, 0.2)",
                borderStyle: "dashed",
                transform: [{rotate: "0.27deg"}]
            }}/>
            <Text style={{
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: 13,
                lineHeight: 18,
                color: "rgba(0, 0, 0, 0.2)"
            }}>{className}</Text>
            <View style={{
                width: "90%",
                height: 7,
                borderBottomWidth: 1,
                borderColor: "rgba(0, 0, 0, 0.2)",
                borderStyle: "dashed",
                transform: [{rotate: "0.24deg"}]
            }}/></View>)
}


export default function HomeScreen() {
    return (<View style={styles.container}>
        <TopAndLeftPanel/>
        <View style={styles.screen}>
            <Text style={styles.header}>Возвращайтесь к учебе!</Text>
            {dashedLine("6Б класс")}
            {block(require('../images/math.png'), "Математика")}
            {block(require('../images/biology.png'), "Биология")}
        </View>
        <BottomPanel/>
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    screen: {
        top: 50,

    },
    header: {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 22,
        lineHeight: 30,
        top: 19,
        left: 17,
        marginBottom: 17.5
    },
    blockName: {
        color: "#fff",
        top: 20,
        left: 25,
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 27,
    }

});