import {StyleSheet, Text, View} from "react-native";
import {BottomPanel, TopAndLeftPanel} from "../Components";
import React from "react";

export default function CoursesScreen() {
    return (<View style={[styles.container, {justifyContent: "center"}]}>
        <TopAndLeftPanel/>
        <View style={{alignItems: "center"}}>
            <Text>Courses Screen</Text>
        </View>
        {BottomPanel("CoursesScreen")}
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})