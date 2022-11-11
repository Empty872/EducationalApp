import {View, StyleSheet, Pressable, Image, StatusBar, Alert, Text} from "react-native";
import Modal from "react-native-modal";
import {useState} from "react";

let LeftPanelIsActive = false
export const TopPanel = () => {
    return (<View style={[styles.NavContainer, {top: 0, borderBottomWidth: 1}]}>
        <View style={styles.NavBar}>
            <Pressable onPress={() => {
                LeftPanelIsActive = true;
                this.update
            }}>
                <Image source={require('./images/icons/others.png')}/>
            </Pressable>
            <Image source={require('./images/icons/account.png')}/>
        </View>
    </View>)
}

export const BottomPanel = () => {
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


export const LeftPanel = () => {
    let [modalVisible, setModalVisible] = useState(false);
    return (<Modal
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        transparent={true}
        isVisible={modalVisible}
        onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
        }}
        style={{margin: 0}}
    >
        <View>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
            </View>
        </View>
    </Modal>)
}

export const TopAndLeftPanel = () => {
    let [modalVisible, setModalVisible] = useState(false);
    return (<View style={[styles.NavContainer, {borderBottomWidth: 1}]}>
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
            <View style={styles.modalIconAndText}>
                <Image source={require('./images/icons/exit.png')}/>
                <Text style={styles.modalText}>Выйти</Text>
            </View>
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
        maxWidth: "70%"
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
