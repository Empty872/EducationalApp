import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";

export default function LessonBlock(backgroundImageUrl, lessonNumberText, lessonName, imageUrl) {
    return (
        <ImageBackground style={{
            marginBottom: 16,
            left: 26,
            width: 309,
            minHeight: 93,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }} source={backgroundImageUrl}>
            <View style={{left: 18, maxWidth: "70%"}}>
                <Text style={styles.blockName}>{lessonNumberText}</Text>
                <Text style={styles.blockDescription}>{lessonName}</Text>
            </View>
            <Image source={imageUrl} style={{marginTop: 29, marginRight: 34}}/>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    blockName: {
        color: "#fff",
        top: 9,
        fontWeight: "600",
        fontSize: 20,
        lineHeight: 27,
        marginBottom: 10
    },
    blockDescription: {
        color: "#fff",
        fontWeight: "400",
        fontSize: 18,
        lineHeight: 25,
        marginBottom: 8
    }
})