import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

// import { SignIn } from "../Authentication/SignIn";
// import { SignUp } from "../Authentication/SignUp";
import AuthScreen from "../Authentication/AuthScreen";
import { Profile } from "../Profile/Profile";
import { Toggle } from "../Toggle/Toggle";
import { Chat } from "../Chat/Chat";
import { Messages } from "../Chat/MessagePage";
import DrawerStyle from "./Drawer";

const Stack = createNativeStackNavigator();
///*
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
      <Drawer.Navigator 
      drawerContent={props => <DrawerStyle {...props} />}
      screenOptions={{ headerShown: false, swipeEnabled: true,}}
      initialRouteName="Home"
      >
        <Drawer.Screen name="Home" component={Profile} />
        <Drawer.Screen name="Settings" component={Toggle} />
      </Drawer.Navigator>
  );
}
//*/
function Navigator() {
  return (
    <Stack.Navigator 
    screenOptions={{ headerShown: false }}
    initialRouteName="AuthScreen"
    >
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
      <Stack.Screen 
        name="Profile" component={DrawerNavigator} 
        options={{gestureEnabled: false}}
      />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Message Page" component={Messages} />
      <Stack.Screen name="DrawerStyle" component={DrawerStyle} />
    </Stack.Navigator>
  );
}

export default Navigator;