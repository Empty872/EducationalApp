import {useNavigation} from "@react-navigation/native";
import {ImageBackground, Pressable, StyleSheet, Text} from "react-native";

export default function SubjectBlock(imageUrl, name, lessonsList) {
    const navigation = useNavigation()
    return (<Pressable style={{marginBottom: 13, left: 17, width: 309, height: 93}}
                       onPress={() => navigation.navigate('Subject', {name: name, lessonsList: lessonsList})}>
        <ImageBackground style={{height: "100%"}} source={imageUrl}>
            <Text style={styles.subjectBlockName}>{name}</Text></ImageBackground>
    </Pressable>)
}

const styles = StyleSheet.create({
    subjectBlockName: {
        color: "#fff", top: 20, left: 25, fontWeight: "700", fontSize: 20, lineHeight: 27,
    },
})