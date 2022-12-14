import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createDrawerNavigator } from '@react-navigation/drawer';

// import { SignIn } from "../Authentication/SignIn";
// import { SignUp } from "../Authentication/SignUp";
import AuthScreen from "../Authentication/AuthScreen";
import { Profile } from "../Profile/Profile";
import { Toggle } from "../Toggle/Toggle";
import { Chat } from "../Chat/Chat";
import { Messages } from "../Chat/MessagePage";

const Stack = createNativeStackNavigator();
/*
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
  );
}
*/
export default function Navigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
      <Stack.Screen name="Toggle" component={Toggle} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Message Page" component={Messages} />
    </Stack.Navigator>
  );
}
