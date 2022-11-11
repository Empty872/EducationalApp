import {StyleSheet, View} from "react-native";
import React from "react";
import {BottomPanel, TopPanel, LeftPanel, TopAndLeftPanel} from "../Components";


export default function HomeScreen() {
    return (<View style={styles.container}>
        {TopAndLeftPanel()}
        {BottomPanel()}
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});