import {useNavigation} from "@react-navigation/native";
import {Image, Pressable, Text, View} from "react-native";

export function LeftTopicBlock(number) {
    const navigation = useNavigation()
    return (
        <Pressable onPress={() => navigation.navigate('Topic')} style={{
            marginBottom: -20, display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: 40,
            marginRight: "auto"
        }}>
            <Image style={{marginBottom: 4}} source={require('../images/blueCircle.png')}/>
            <Text>Тема {number}</Text>

        </Pressable>
    )
}

export function RightTopicBlock(number) {
    return (
        <View style={{
            marginBottom: -20, display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginRight: 40,
            marginLeft: "auto"
        }}>
            <Image style={{marginBottom: 4}} source={require('../images/blueCircle.png')}/>
            <Text>Тема {number}</Text>
        </View>
    )
}

export function LeftDashedLine() {
    return (
        <Image style={{marginLeft: 135, marginBottom: -63}} source={require('../images/dashedLine_1.png')}/>)
}

export function RightDashedLine() {
    return (<Image style={{marginRight: 135, marginLeft: "auto", marginBottom: -63}}
                   source={require('../images/dashedLine_2.png')}/>)
}