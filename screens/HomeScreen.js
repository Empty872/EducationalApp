import {Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import {BottomPanel, TopAndLeftPanel} from "../components/Panels";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";

const dashedLine = (className) => {
    return (<View style={{flexDirection: "row", alignItems: "center", marginBottom: 19}}>
        <View style={{
            width: "15%",
            height: 5,
            borderBottomWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.2)",
            borderStyle: "dashed",
            transform: [{rotate: "0.27deg"}]
        }}/>
        <Text style={{
            fontStyle: "normal", fontWeight: "700", fontSize: 13, lineHeight: 18, color: "rgba(0, 0, 0, 0.2)"
        }}>{className}</Text>
        <View style={{
            width: "85%",
            height: 7,
            borderBottomWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.2)",
            borderStyle: "dashed",
            transform: [{rotate: "0.24deg"}]
        }}/></View>)
}


export default function HomeScreen() {
    const navigation = useNavigation()
    const {subjectsList, role} = useSelector(state => state.userReducer);
    let newSubjectsList = []
    for (let i = 0; i < subjectsList.length; ++i) {
        const subjectClass = subjectsList[i];
        newSubjectsList.push(<Pressable style={{width: 309}}
                                        onPress={() => navigation.navigate('Subject', {subjectClass: subjectClass})}>{subjectClass.block}</Pressable>)
    }
    const window = useWindowDimensions()
    const addSubjectBlock = () => {
        if (role === "teacher") {
            return <Pressable onPress={() => navigation.navigate('CreateSubject')}
                              style={{backgroundColor: "#dab", width: 309, height: 93, left: 17}}/>
        } else {
            return null
        }
    }

    return (<View style={styles.container}>
        <TopAndLeftPanel/>
        <View style={{height: window.height - 100}}>
            <ScrollView>
                <Text style={styles.header}>Возвращайтесь к учебе!</Text>
                {dashedLine("6Б класс")}
                {newSubjectsList}
                {addSubjectBlock()}
            </ScrollView>
        </View>
        {BottomPanel("HomeScreen")}
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff'
    }, header: {
        fontWeight: "700", fontSize: 22, lineHeight: 30, marginTop: 19, left: 17, marginBottom: 8
    }
});