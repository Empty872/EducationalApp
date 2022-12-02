import {Image, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {TopPanel} from "../components/Panels";
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from "@react-navigation/native";

export default function TopicScreen({route}) {
    const {topicClass} = route.params
    const navigation = useNavigation()
    const content = topicClass.content
    const openGallery = () => {
        let options = {
            storageOption: {
                path: 'images',
                mediaType: 'photo'
            },
            includeBase64: true
        };
        launchImageLibrary(options, response => {
            console.log('Response ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = {uri: 'data:image/jpeg;base64,' + response.assets[0].base64};
                topicClass.addContent(<Image source={source} style={{width: 200, height: 200}}/>)
            }
        });
    }
    const neededContent = []
    for (let i = 0; i < content.length; ++i) {
        neededContent.push(content[i])
    }
    return (<View style={styles.container}>
        <TopPanel/>
        <View>
            <View style={{height: "9.62%"}}>
                <Text style={{
                    marginTop: '4%', left: "8.3%", fontWeight: '700',
                    fontSize: 20,
                    lineHeight: 27
                }}>Тема {topicClass.number}</Text>
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
                    {neededContent}
                    <Pressable onPress={() => navigation.navigate('CreateContentQuestion', {topicClass: topicClass})}
                               style={{backgroundColor: "#dab", width: 309, height: 30, left: 17}}/>
                    <Pressable onPress={() => navigation.navigate('CreateContentText', {topicClass: topicClass})}
                               style={{backgroundColor: "#5cf", width: 309, height: 30, left: 17}}/>
                    <Pressable onPress={() => {
                        openGallery()
                    }}
                               style={{backgroundColor: "#f50", width: 309, height: 30, left: 17}}/>
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
    },
    input: {
        width: 250,
        minHeight: 40,
        color: '#000',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'ffffff90',
        marginBottom: 20
    }, button: {
        width: 250,
        height: 40,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: '#00CFEB90',
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 50
    }
});