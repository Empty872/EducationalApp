import {View, StyleSheet, Pressable, Image, StatusBar} from "react-native";
import {useNavigation} from "@react-navigation/native";


export function TopPanel() {
    const navigation = useNavigation();
    return (<View style={[styles.NavContainer, {top: 0, borderBottomWidth: 1}]}>
        <View style={styles.NavBar}>
            <Image source={require('./images/icons/others.png')}/>
            <View/>
            <Image source={require('./images/icons/account.png')}/>
        </View>
    </View>)
}

export function BottomPanel() {
    return (<View style={[styles.NavContainer, {bottom: 0, borderTopWidth: 1}]}>
        <View style={styles.NavBar}>
            <Image source={require('./images/icons/home.png')}/>
            <Image source={require('./images/icons/classes.png')}/>
            <Image source={require('./images/icons/achievements.png')}/>
            <Image source={require('./images/icons/courses.png')}/>
            <Image source={require('./images/icons/notifications.png')}/>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    NavContainer: {
        position: 'absolute',
        alignItems: 'center',
        width: "100%",
        borderColor: 'rgba(0, 0, 0, 0.05)'
    },
    NavBar: {
        display: "flex",
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: "center",
        height: 50
    }
})
