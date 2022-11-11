import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen"
import EmailLoginScreen from "./screens/EmailLoginScreen"
import ChoosingMethodScreen from "./screens/ChoosingMethodScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import ChangePasswordScreen from "./screens/ChangePasswordScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ChoosingMethod">
                <Stack.Screen name="ChangePassword" component={ChangePasswordScreen}
                              options={{headerShown: false, statusBarStyle: "dark"}}/>
                <Stack.Screen name="ChoosingMethod" component={ChoosingMethodScreen}
                              options={{headerShown: false, statusBarStyle: "dark"}}/>
                <Stack.Screen name="LoginByEmail" component={EmailLoginScreen}
                              options={{headerShown: false, statusBarStyle: "dark"}}/>
                <Stack.Screen name="Home" component={HomeScreen}
                              options={{headerShown: false, statusBarStyle: "dark"}}/>
                <Stack.Screen name="ResetPassword" component={ResetPasswordScreen}
                              options={{headerShown: false, statusBarStyle: "dark"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}