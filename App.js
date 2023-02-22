import { NavigationContainer } from "@react-navigation/native";
import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabs = createBottomTabNavigator();
export default function App() {
  return (
<>
<StatusBar style="light"></StatusBar>
    <NavigationContainer>
      <BottomTabs.Navigator screenOptions={{
            headerStyle: { backgroundColor: "#3c0a6b" },
            headerTintColor: "white",
            tabBarActiveTintColor:"#3c0a6b"
      }}>
        <BottomTabs.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon:({color,size})=><Ionicons name="home" color={color} size={size}/>
          }}
        />
        <BottomTabs.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon:({color,size})=><Ionicons name="person" color={color} size={size}/>
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
</>
  );
}
