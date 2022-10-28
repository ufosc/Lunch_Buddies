import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';

import Home from './src/Home/Home'

export default function App() {

  return (
    //Use SafeAreaView so that app looks fine with iPhones X and up
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lunch: {
    width: 375,
    height: 306,
  },
  Background: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#b1caf2",
    height: "100%"
  }
});
