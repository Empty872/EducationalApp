import {Image, StyleSheet, Text, View, ImageBackground, Pressable} from "react-native";
import {BottomPanel, TopAndLeftPanel} from "../Components";
import {useNavigation} from "@react-navigation/native";


const subjectBlock = (imageUrl, name, topicsList) => {
    const navigation = useNavigation()
    return (<Pressable style={{marginTop: 13, left: 17, width: 309, height: 93}}
                       onPress={() => navigation.navigate('Subject', {name: name, topicsList: topicsList})}>
        <ImageBackground style={{height: "100%"}} source={imageUrl}>
            <Text style={styles.subjectBlockName}>{name}</Text></ImageBackground>
    </Pressable>)
}

const subjectTopicBlock = (backgroundImageUrl, name, description, imageUrl) => {
    return (<View style={{marginTop: 16, left: 26, width: 309, height: 93}}>
        <ImageBackground style={{height: "100%", flexDirection: 'row', justifyContent: 'space-between'}}
                         source={backgroundImageUrl}>
            <View style={{left: 18, maxWidth: "60%"}}>
                <Text style={styles.topicBlockName}>{name}</Text>
                <Text style={styles.blockDescription}>{description}</Text>
            </View>
            <Image source={imageUrl} style={{marginTop: 29, marginRight: 34}}/>
        </ImageBackground>
    </View>)
}

const dashedLine = (className) => {
    return (<View style={{flexDirection: "row", alignItems: "center", marginTop: 17.5, marginBottom: 13}}>
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
    const MathTopicsList = [
        subjectTopicBlock(require('../images/greenRectangle.png'), "Урок 1", "Что такое дроби?", require('../images/subjectImages/questions.png')),
        subjectTopicBlock(require('../images/blueRectangle.png'), "Урок 2", "Сравнение дробей", require('../images/subjectImages/comprasion.png')),
        subjectTopicBlock(require('../images/blueRectangle.png'), "Урок 3", "Сложение и вычитание дробей", require('../images/subjectImages/sum.png')),
        subjectTopicBlock(require('../images/blueRectangle.png'), "Урок 4", "Умножение и деление дробей", require('../images/subjectImages/separate.png'))]
    return (<View style={styles.container}>
        <TopAndLeftPanel/>
        <View style={styles.screen}>
            <Text style={styles.header}>Возвращайтесь к учебе!</Text>
            {dashedLine("6Б класс")}
            {subjectBlock(require('../images/math.png'), "Математика", MathTopicsList)}
            {subjectBlock(require('../images/biology.png'), "Биология")}
        </View>
        {BottomPanel("HomeScreen")}
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff'
    }, screen: {
        top: 50,
    }, header: {
        fontStyle: "normal", fontWeight: "700", fontSize: 22, lineHeight: 30, top: 19, left: 17, marginBottom: 17.5
    }, subjectBlockName: {
        color: "#fff", top: 20, left: 25, fontStyle: "normal", fontWeight: "700", fontSize: 20, lineHeight: 27,
    },
    topicBlockName: {
        color: "#fff",
        top: 9,
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 20,
        lineHeight: 27,
        marginBottom: 10
    },
    blockDescription: {
        color: "#fff",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 18,
        lineHeight: 25,
    }
});