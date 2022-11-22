import {StyleSheet, Text, View} from "react-native";
import {BottomPanel, TopAndLeftPanel} from "../components/Panels";
import React from "react";

export default function ClassesScreen() {
    return (<View style={[styles.container, {justifyContent: "center"}]}>
        <TopAndLeftPanel/>
        <View style={{alignItems: "center"}}>
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