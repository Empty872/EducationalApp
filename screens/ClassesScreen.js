import {StyleSheet, Text, useWindowDimensions, View} from "react-native";
import {BottomPanel, TopAndLeftPanel} from "../components/Panels";
import React from "react";

export default function ClassesScreen() {
    const window = useWindowDimensions()
    return (<View style={styles.container}>
        <TopAndLeftPanel/>
        <View style={{height: window.height - 100}}>
            <Text>Classes Screen</Text>
        </View>
        {BottomPanel("ClassesScreen")}
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})