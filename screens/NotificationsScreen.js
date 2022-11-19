import {StyleSheet, Text, View} from "react-native";
import {BottomPanel, TopAndLeftPanel} from "../Components";
import React from "react";

export default function NotificationsScreen() {
    return (<View style={[styles.container, {justifyContent: "center"}]}>
        <TopAndLeftPanel/>
        <View style={{alignItems: "center"}}>
            <Text>Notifications Screen</Text>
        </View>
        {BottomPanel("NotificationsScreen")}
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})