import {View, StyleSheet, Pressable, Image, StatusBar} from "react-native";
import {useNavigation} from "@react-navigation/native";


export function TopPanel() {
    const navigation = useNavigation();
    return (<View style={[styles.NavContainer, {top: 0}]}>
        <View style={[styles.NavBar, {borderBottomWidth: 2, borderBottomColor: '#fff'}]}>
            <Image source={require('./images/icons/others.png')}/>
            <View style={styles.Width}/>
            <Image source={require('./images/icons/account.png')}/>
        </View>
    </View>)
}

export function BottomPanel() {
    return (<View style={[styles.NavContainer, {bottom: 0}]}>
        <View style={[styles.NavBar, {borderTopWidth: 2, borderTopColor: '#fff'}]}>
            <Image source={require('./images/icons/home.png')}/>
            <Image source={require('./images/icons/classes.png')}/>
            <Image source={require('./images/icons/achievements.png')}/>
            <Image source={require('./images/icons/courses.png')}/>
            <Image source={require('./images/icons/notifications.png')}/>
        </View>
    </View>)
}

export function FullNavigationPanel() {
    return (
        <View style={styles.container}>
            <View style={[styles.NavContainer, {top: 0}]}>
                <View style={[styles.NavBar, {borderBottomWidth: 2, borderBottomColor: '#fff'}]}>
                    <Image source={require('./images/icons/others.png')}/>
                    <View style={styles.Width}/>
                    <Image source={require('./images/icons/account.png')}/>
                </View>
            </View>
            <View style={[styles.NavContainer, {bottom: StatusBar.currentHeight}]}>
                <View style={[styles.NavBar, {borderTopWidth: 2, borderTopColor: '#fff'}]}>
                    <Image source={require('./images/icons/home.png')}/>
                    <Image source={require('./images/icons/classes.png')}/>
                    <Image source={require('./images/icons/achievements.png')}/>
                    <Image source={require('./images/icons/courses.png')}/>
                    <Image source={require('./images/icons/notifications.png')}/>
                </View>
            </View>
        </View>
    )
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
        alignItems: 'center'
    },
    NavBar: {
        display: "flex",
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: "center",
        height: 70,
    },
    Width: {
        width: '50%'
    },
    Bottom: {
        bottom: StatusBar.currentHeight
    }
})
