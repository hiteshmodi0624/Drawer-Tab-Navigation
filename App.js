import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
<>
<StatusBar style="light"></StatusBar>
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: "#3c0a6b" },
            headerTintColor: "white",
            
            drawerActiveBackgroundColor:"#3c0a6b",
            drawerActiveTintColor:"white"
      }}>
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel:"Welcome Screen",
            drawerIcon:({color,size})=>(<Ionicons name="home" color={color} size={size} />)
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerLabel:"User Screen",
            drawerIcon:({color,size})=>(<Ionicons name="person" color={color} size={size} />)
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
</>
  );
}
