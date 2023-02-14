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
const Drawer = createDrawerNavigator();

function Chats(){
  return (
    // @ts-expect-error TS(2503): Cannot find namespace 'Stack'.
    <Stack.Navigator 
    // @ts-expect-error TS(7027): Unreachable code detected.
    screenOptions={{ headerShown: false }}
    // @ts-expect-error TS(2304): Cannot find name 'initialRouteName'.
    initialRouteName="Chat"
    >
      // @ts-expect-error TS(2503): Cannot find namespace 'Stack'.
      <Stack.Screen name="Chat" component={Chat} />
      // @ts-expect-error TS(2503): Cannot find namespace 'Stack'.
      <Stack.Screen name="Message Page" component={Messages} />
    </Stack.Navigator>
  )
}

function DrawerNavigator() {
  return (
      // @ts-expect-error TS(2503): Cannot find namespace 'Drawer'.
      <Drawer.Navigator 
      // @ts-expect-error TS(7027): Unreachable code detected.
      drawerContent={props => <DrawerStyle {...props} />}
      // @ts-expect-error TS(2304): Cannot find name 'screenOptions'.
      screenOptions={{ headerShown: false, swipeEnabled: true,}}
      // @ts-expect-error TS(2304): Cannot find name 'initialRouteName'.
      initialRouteName="Home"
      >
        // @ts-expect-error TS(2503): Cannot find namespace 'Drawer'.
        <Drawer.Screen name="Home" component={Profile} />
        // @ts-expect-error TS(2503): Cannot find namespace 'Drawer'.
        <Drawer.Screen name="Profile" component={Toggle} />
        // @ts-expect-error TS(2503): Cannot find namespace 'Drawer'.
        <Drawer.Screen name="Messages" component={Chats} />
        // @ts-expect-error TS(2503): Cannot find namespace 'Drawer'.
        <Drawer.Screen name="Settings" component={Toggle} />
      </Drawer.Navigator>
  );
}

function Navigator() {
  return (
    // @ts-expect-error TS(2503): Cannot find namespace 'Stack'.
    <Stack.Navigator 
    // @ts-expect-error TS(7027): Unreachable code detected.
    screenOptions={{ headerShown: false }}
    // @ts-expect-error TS(2304): Cannot find name 'initialRouteName'.
    initialRouteName="AuthScreen"
    >
      // @ts-expect-error TS(2503): Cannot find namespace 'Stack'.
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
      // @ts-expect-error TS(2503): Cannot find namespace 'Stack'.
      <Stack.Screen 
        // @ts-expect-error TS(2304): Cannot find name 'name'.
        name="Start" component={DrawerNavigator} 
        // @ts-expect-error TS(2304): Cannot find name 'options'.
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
}

export default Navigator;