import {StyleSheet, Text, View} from "react-native";
import {TopPanel} from "../components/Panels";

export default function SubjectScreen({route}) {
    const {name, lessonsList} = route.params
    return (<View style={styles.container}>
        <TopPanel/>
        <View>
            <Text style={styles.header}>{name}</Text>
            {lessonsList}
        </View>
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
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