import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen"
import EmailLoginScreen from "./screens/EmailLoginScreen"
import ChoosingMethodScreen from "./screens/ChoosingMethodScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import ChangePasswordScreen from "./screens/ChangePasswordScreen";
import ClassesScreen from "./screens/ClassesScreen";
import AchievementsScreen from "./screens/AchievementsScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import CoursesScreen from "./screens/CoursesScreen";
import SubjectScreen from "./screens/SubjectScreen";
import LessonScreen from "./screens/LessonScreen";
import TopicScreen from "./screens/TopicScreen";

export const Stack = createNativeStackNavigator();


export default function App() {
    return (<NavigationContainer>
        <Stack.Navigator initialRouteName="ChoosingMethod">
            <Stack.Screen name="ChangePassword" component={ChangePasswordScreen}
                          options={{headerShown: false, statusBarStyle: "dark"}}/>
            <Stack.Screen name="ChoosingMethod" component={ChoosingMethodScreen}
                          options={{headerShown: false, statusBarStyle: "dark"}}/>
            <Stack.Screen name="LoginByEmail" component={EmailLoginScreen}
                          options={{headerShown: false, statusBarStyle: "dark"}}/>
            <Stack.Screen name="ResetPassword" component={ResetPasswordScreen}
                          options={{headerShown: false, statusBarStyle: "dark"}}/>
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

        </Stack.Navigator>
    </NavigationContainer>);
}