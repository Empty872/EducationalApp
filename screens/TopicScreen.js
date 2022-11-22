import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {TopPanel} from "../components/Panels";
import ScaledImage from "../components/ScaledImage";

export default function TopicScreen() {
    return (<View style={styles.container}>
        <TopPanel/>
        <View style={styles.screen}>
            <View style={{height: "9.62%"}}>
                <Text style={{
                    marginTop: '4%', left: "8.3%", fontWeight: '700',
                    fontSize: 20,
                    lineHeight: 27
                }}>Тема 3</Text>
            </View>
            <View style={{height: "84.245%", width: "87.5%", left: "6.25%"}}>
                <View style={{
                    width: "98.412%",
                    height: "98.819%",
                    marginLeft: 5,
                    marginBottom: 6,
                    backgroundColor: "rgba(218, 218, 218, 1)",
                    borderRadius: 20,
                    position: "absolute"
                }}/>
                <ScrollView style={{
                    width: "98.412%",
                    height: "98.819%",
                    marginTop: 6,
                    marginRight: 5,
                    backgroundColor: "rgba(232, 232, 232, 1)",
                    borderRadius: 20,
                    position: "absolute",
                    paddingLeft: 29,
                    paddingRight: 29,
                    paddingTop: 24

                }}>
                    <Text style={styles.text}>Что-то интересное что-то интересное что-то интересное что-то
                        интересное
                        что-то интересное что-то
                        интересное что-то интересное что-то интересное что-то интересное что-то интересное </Text>
                    <Text style={styles.text}>Что-то интересное что-то интересное что-то интересное что-то интересное
                        что-то интересное
                        что-то
                        интересное </Text>
                    <Text style={styles.text}>Что-то интересное что-то интересное что-то интересное что-то интересное
                        что-то интересное что-то интересное что-то интересное что-то интересное что-то интересное что-то
                        интересное что-то
                        интересное что-то интересное что-то интересное что-то интересное </Text>
                    <Text style={styles.text}>Что-то интересное что-то интересное что-то интересное что-то
                        интересное
                        что-то интересное что-то
                        интересное что-то интересное что-то интересное что-то интересное что-то интересное </Text>
                    <Text style={styles.text}>Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик
                        Котик Котик Котик Котик Котик Котик</Text>
                    <Image style={{width: 300}} source={require('../images/котик.png')}/>
                    <ScaledImage uri={'../images/котик.png'}/>
                    <Text style={styles.text}>Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик Котик
                        Котик Котик Котик Котик Котик Котик</Text>
                    <Text style={styles.text}>Что-то интересное что-то интересное что-то интересное что-то интересное
                        что-то интересное что-то интересное что-то интересное что-то интересное что-то интересное что-то
                        интересное что-то
                        интересное что-то интересное что-то интересное что-то интересное </Text>
                </ScrollView>
            </View>
        </View>
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff'
    },
    screen: {
        top: 50
    },
    text: {
        marginBottom: 31, fontWeight: "600", fontSize: 14,
        lineHeight: 19
    }
});