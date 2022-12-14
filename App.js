import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen"
import ClassesScreen from "./screens/ClassesScreen";
import AchievementsScreen from "./screens/AchievementsScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import CoursesScreen from "./screens/CoursesScreen";
import SubjectScreen from "./screens/SubjectScreen";
import LessonScreen from "./screens/LessonScreen";
import TopicScreen from "./screens/TopicScreen";
import CreateSubjectScreen from "./screens/CreateSubjectScreen";
import CreateLessonScreen from "./screens/CreateLessonScreen";
import CreateContentQuestionScreen from "./screens/CreateContentQuestionScreen";
import CreateContentTextScreen from "./screens/CreateContentTextScreen";
import LoginScreen from "./screens/LoginScreen";
import LoginStudentScreen from "./screens/LoginStudentScreen";
import LoginTeacherScreen from "./screens/LoginTeacherScreen";
import LoginHelpScreen from "./screens/LoginHelpScreen";
import ErrorElement from "./components/ErrorElement";
import {Provider} from "react-redux";
import {Store} from "./redux/store"


export const Stack = createNativeStackNavigator();


export default function App() {
    return (<Provider store={Store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Home" component={HomeScreen}
                              options={{headerShown: false, statusBarStyle: "dark"}}/>
                <Stack.Screen name="Classes" component={ClassesScreen}
                              options={{headerShown: false, statusBarStyle: "dark"}}/>
                <Stack.Screen name="Achievements" component={AchievementsScreen}
                              options={{headerShown: false, statusBarStyle: "dark"}}/>
                <Stack.Screen name="Courses" component={CoursesScreen}
                              options={{headerShown: false, statusBarStyle: "dark"}}/>
                <Stack.Screen name="Notifications" component={NotificationsScreen}
                              options={{headerShown: false, statusBarStyle: "dark"}}/>
                <Stack.Screen name="Subject" component={SubjectScreen}
                              options={{headerShown: false, statusBarStyle: "dark"}}/>
                <Stack.Screen name='Lesson' component={LessonScreen}
                              options={{headerShown: false, statusBarStyle: "dark"}}/>
                <Stack.Screen name='Topic' component={TopicScreen}
                              options={{headerShown: false, statusBarStyle: "dark"}}/>
                <Stack.Screen name='CreateSubject' component={CreateSubjectScreen}
                              options={{headerShown: false, statusBarStyle: "dark"}}/>
                <Stack.Screen name='CreateLesson' component={CreateLessonScreen}
                              options={{headerShown: false, statusBarStyle: "dark"}}/>
                <Stack.Screen name='CreateContentQuestion' component={CreateContentQuestionScreen}
                              options={{headerShown: false, statusBarStyle: "dark"}}/>
                <Stack.Screen name='CreateContentText' component={CreateContentTextScreen}
                              options={{headerShown: false, statusBarStyle: "dark"}}/>
                <Stack.Screen name='Login' component={LoginScreen}
                              options={{headerShown: false, statusBarStyle: "dark"}}/>
                <Stack.Screen name='LoginStudent' component={LoginStudentScreen}
                              options={{headerShown: false, statusBarStyle: "dark"}}/>
                <Stack.Screen name='LoginTeacher' component={LoginTeacherScreen}
                              options={{headerShown: false, statusBarStyle: "dark"}}/>
                <Stack.Screen name='LoginHelp' component={LoginHelpScreen}
                              options={{headerShown: false, statusBarStyle: "dark"}}/>
                <Stack.Screen name='ErrorElement' component={ErrorElement}
                              options={{headerShown: false, statusBarStyle: "dark"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>);
}