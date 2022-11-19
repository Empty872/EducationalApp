import {StyleSheet, Text, View} from "react-native";
import {TopPanel} from "../Components";

export default function SubjectScreen({route}) {
    const {name, topicsList} = route.params
    return (<View style={styles.container}>
        <TopPanel/>
        <View style={styles.screen}>
            <Text style={styles.header}>{name}</Text>
            {topicsList}
        </View>
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
        left: 26,
        marginBottom: 19
    },

});