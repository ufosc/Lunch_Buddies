import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';

export default function App() {

  return (
    //Use SafeAreaView so that app looks fine with iPhones X and up
    <SafeAreaView style={styles.container}>
      <Text>WELCOME TO LUNCH BUDDIES!!!</Text>
      
      <Image 
      //blurRadius ={10} **used to blur image. Important for pfp bluring**
      style={styles.lunch}
      source={require("./assets/lunch.png")} />

      <StatusBar style="auto" />
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
});
