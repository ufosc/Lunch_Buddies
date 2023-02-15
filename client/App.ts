import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';

import Navigator from './src/Navigation/HomeStack'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    // @ts-expect-error TS(2749): 'NavigationContainer' refers to a value, but is be... Remove this comment to see the full error message
    <NavigationContainer>
      // @ts-expect-error TS(2749): 'Navigator' refers to a value, but is being used a... Remove this comment to see the full error message
      <Navigator/>
    </NavigationContainer>
  );
}
