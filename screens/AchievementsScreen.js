import {StyleSheet, Text, View} from "react-native";
import {BottomPanel, TopAndLeftPanel} from "../components/Panels";
import React from "react";

export default function AchievementsScreen() {
    return (<View style={[styles.container, {justifyContent: "center"}]}>
        <TopAndLeftPanel/>
        <View style={{alignItems: "center"}}>
            <Text>Achievements Screen</Text>
        </View>
        {BottomPanel("AchievementsScreen")}
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})