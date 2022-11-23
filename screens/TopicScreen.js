import {ScrollView, StyleSheet, Text, View} from "react-native";
import {TopPanel} from "../components/Panels";

export default function TopicScreen({route}) {
    const {number, content} = route.params
    return (<View style={styles.container}>
        <TopPanel/>
        <View>
            <View style={{height: "9.62%"}}>
                <Text style={{
                    marginTop: '4%', left: "8.3%", fontWeight: '700',
                    fontSize: 20,
                    lineHeight: 27
                }}>Тема {number}</Text>
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
                    {content}
                </ScrollView>
            </View>
        </View>
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff'
    },
    text: {
        marginBottom: 31, fontWeight: "600", fontSize: 14,
        lineHeight: 19
    }
});