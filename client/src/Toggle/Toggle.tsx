import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  Pressable,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
//IMPORTS FONTS, THE COMMAND "npx expo install expo-font @expo-google-fonts/jost" SHOULD BE RUN LOCALLy BEFORE
import {
  useFonts,
  Jost_400Regular,
  Jost_500Medium,
  Jost_700Bold,
} from "@expo-google-fonts/jost";

function Toggle() {
  //ENSURES THAT FONTS ARE LOADED BEFORE COMPONENTS ARE RENDERED
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
    Jost_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <LinearGradient style={styles.Border} colors={["#A1DDFF", "#0077E5"]}>
        <SafeAreaView style={styles.TextContainer}>
          <Text style={styles.Title}>Welcome Back,</Text>
          <Text style={styles.Title}>NAME!</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.Card}>
          <SafeAreaView>
            <Text style={styles.CardHeaderText}>Today I want to eat...</Text>
            <Text style={styles.CardBodyText}>Some text here</Text>
          </SafeAreaView>
          <SafeAreaView>
            <Text style={styles.CardHeaderText}>My price range...</Text>
            <Text style={styles.SliderBody}>ADD SLIDER</Text>
          </SafeAreaView>
          <SafeAreaView>
            <Text style={styles.CardHeaderText}>I am active from...</Text>
            <Text style={styles.CardBodyText}>Some text here/SLIDER</Text>
          </SafeAreaView>
        </SafeAreaView>
        <Pressable style={styles.SubmitButton}
          // @ts-expect-error TS(2304): Cannot find name 'onPress'.
          onPress={() => navigation.navigate("Profile")}>
          <Text style={styles.SubmitText}>SUBMIT</Text>
        </Pressable>
        <SafeAreaView style={styles.DefaultBox}>
          <Text style={styles.DefaultText}>Use my default settings</Text>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  TextContainer: {

  },
  Border: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#b1caf2",
    height: "100%",
    width: "100%",
  },
  Page: {
    flexDirection: "column",
    height: "100%",
  },
  Title: {
    fontSize: 24,
    fontFamily: "Jost_700Bold",
    textAlign: "center",
  },
  Card: {
    backgroundColor: "#ffffff",
    width: "80%",
    height: "70%",
    flexDirection: "column",
    borderRadius: 30,
    alignSelf: "center",
    marginTop: "5%",
    justifyContent: "space-around",
  },
  CardHeaderText: {
    color: "#23B0FF",
    fontSize: 24,
    fontFamily: "Jost_700Bold",
    marginHorizontal: "10%",
    marginTop: "20%",
  },
  CardBodyText: {
    fontSize: 16,
    fontFamily: "Jost_400Regular",
    marginHorizontal: "10%",
    width: "80%",
    height: "35%",
  },
  SliderBody: {
    fontSize: 16,
    marginHorizontal: "10%",
    width: "80%",
    height: "20%",
  },
  SubmitButton: {
    backgroundColor: "#FFB72D",
    width: "45%",
    alignSelf: "center",
    textAlign: "center",
    borderRadius: 12,
    padding: 8,
    marginTop: "-12%",
  },
  SubmitText: {
    fontSize: 16,
    fontFamily: "Jost_700Bold",
    textAlign: "center",
  },
  DefaultBox: {
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: "5%",
    width: "45%",
    padding: 8,
  },
  DefaultText: {
    fontSize: 19,
    fontFamily: "Jost_700Bold",
    textAlign: "center",
  },
});

export { Toggle };
