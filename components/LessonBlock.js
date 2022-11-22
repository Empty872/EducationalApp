import {useNavigation} from "@react-navigation/native";
import {Image, ImageBackground, Pressable, StyleSheet, Text, View} from "react-native";

export default function LessonBlock(backgroundImageUrl, name, description, imageUrl) {
    const navigation = useNavigation()
    return (
        <Pressable style={{width: 309}} onPress={() => navigation.navigate('Lesson')}>
            <ImageBackground style={{
                marginTop: 16,
                left: 26,
                width: 309,
                minHeight: 93,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }} source={backgroundImageUrl}>
                <View style={{left: 18, maxWidth: "70%"}}>
                    <Text style={styles.lessonBlockName}>{name}</Text>
                    <Text style={styles.blockDescription}>{description}</Text>
                </View>
                <Image source={imageUrl} style={{marginTop: 29, marginRight: 34}}/>
            </ImageBackground></Pressable>)
}
const styles = StyleSheet.create({
    lessonBlockName: {
        color: "#fff",
        top: 9,
        fontWeight: "600",
        fontSize: 20,
        lineHeight: 27,
        marginBottom: 4
    },
    blockDescription: {
        color: "#fff",
        fontWeight: "400",
        fontSize: 18,
        lineHeight: 25,
        marginBottom: 8
    }
})