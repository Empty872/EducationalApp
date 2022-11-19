import {View, StyleSheet, Pressable, Image, Text, BackHandler} from "react-native";
import Modal from "react-native-modal";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";



export const BottomPanel = (screenName) => {
    const navigation = useNavigation()
    return (<View style={[styles.NavContainer, {bottom: 0, borderTopWidth: 1}]}>
        <View style={styles.NavBar}>
            <Pressable onPress={() => {
                if (screenName !== "HomeScreen") {
                    navigation.goBack()
                    navigation.navigate('Home')
                }
            }}>
                <Image source={require('./images/icons/home.png')}
                       style={{opacity: (screenName === "HomeScreen" ? 1 : 0.5)}}/>
            </Pressable>
            <Pressable onPress={() => {
                if (screenName !== "ClassesScreen") {
                    navigation.goBack();
                    navigation.navigate('Classes')
                }
            }}>
                <Image source={require('./images/icons/classes.png')}
                       style={{opacity: (screenName === "ClassesScreen" ? 1 : 0.5)}}/>
            </Pressable>
            <Pressable onPress={() => {
                if (screenName !== "AchievementsScreen") {
                    navigation.goBack();
                    navigation.navigate('Achievements')
                }
            }}>
                <Image source={require('./images/icons/achievements.png')}/>
            </Pressable>
            <Pressable onPress={() => {
                if (screenName !== "CoursesScreen") {
                    navigation.goBack();
                    navigation.navigate('Courses')
                }
            }}>
                <Image source={require('./images/icons/courses.png')}/>
            </Pressable>
            <Pressable onPress={() => {
                if (screenName !== "NotificationsScreen") {
                    navigation.goBack();
                    navigation.navigate('Notifications')
                }
            }}>
                <Image source={require('./images/icons/notifications.png')}/>
            </Pressable>
        </View>
    </View>)
}

export const TopPanel = () => {
    const navigation = useNavigation()
    return (<View style={[styles.NavContainer, {borderBottomWidth: 1, top: 0}]}>
        <View style={styles.NavBar}>
            <Pressable onPress={() => navigation.navigate('Home')}>
                <Image source={require('./images/icons/backArrow.png')}/>
            </Pressable>
            <Image source={require('./images/icons/account.png')}/>
        </View>
    </View>)
}

export const TopAndLeftPanel = () => {
    let [modalVisible, setModalVisible] = useState(false);
    return (<View style={[styles.NavContainer, {borderBottomWidth: 1, top: 0}]}>
        <View style={styles.NavBar}>
            <Pressable onPress={() => setModalVisible(true)}>
                <Image source={require('./images/icons/others.png')} style={{opacity: 0.5}}/>
            </Pressable>
            <Image source={require('./images/icons/account.png')}/>
        </View>
        <Modal
            animationIn="slideInLeft"
            animationOut="slideOutLeft"
            isVisible={modalVisible}
            backdropOpacity={0.4}
            onRequestClose={() => {
                setModalVisible(false);
            }}
            backdropTransitionOutTiming={0}
            style={{margin: 0}}
        >
            <View style={styles.modalView}>
                <Pressable onPress={() => setModalVisible(false)}>
                    <Image style={{marginTop: 8.5, marginBottom: 41, marginLeft: "8.333333%"}}
                           source={require('./images/icons/others.png')}/>
                </Pressable>
                {leftPanelContent()}
            </View>
        </Modal>
    </View>)
}
const leftPanelContent = () => {
    return (
        <View style={styles.verticalList}>
            <View style={styles.modalIconAndText}>
                <Image source={require('./images/icons/settings.png')}/>
                <Text style={styles.modalText}>Настройки</Text>
            </View>
            <View style={styles.modalIconAndText}>
                <Image source={require('./images/icons/help.png')}/>
                <Text style={styles.modalText}>Помощь</Text>
            </View>
            <View style={styles.modalIconAndText}>
                <Image source={require('./images/icons/phone.png')}/>
                <Text style={styles.modalText}>Поставьте нам оценку</Text>
            </View>
            <Pressable onPress={BackHandler.exitApp} style={styles.modalIconAndText}>
                <Image source={require('./images/icons/exit.png')}/>
                <Text style={styles.modalText}>Выйти</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
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
    },
    modalView: {
        backgroundColor: "white",
        width: "60%",
        height: "100%",
    },
    modalText: {
        marginLeft: 19,
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 22,
        maxWidth: "70%",
    },
    verticalList: {
        flexDirection: "column"
    },
    modalIconAndText: {
        flexDirection: "row",
        marginTop: 26,
        left: "7%",
        alignItems: "center",
    },
})
