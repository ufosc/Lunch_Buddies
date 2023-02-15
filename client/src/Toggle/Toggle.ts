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
      // @ts-expect-error TS(7027): Unreachable code detected.
      <LinearGradient style={styles.Border} colors={["#A1DDFF", "#0077E5"]}>
        // @ts-expect-error TS(2352): Conversion of type '{ Border: { flexDirection: "co... Remove this comment to see the full error message
        <SafeAreaView styles={styles.TextContainer}>
          // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
          <Text style={styles.Title}>Welcome Back,</Text>
          // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
          <Text style={styles.Title}>NAME!</Text>
        </SafeAreaView>
        // @ts-expect-error TS(2304): Cannot find name 'style'.
        <SafeAreaView style={styles.Card}>
          <SafeAreaView>
            // @ts-expect-error TS(2304): Cannot find name 'style'.
            <Text style={styles.CardHeaderText}>Today I want to eat...</Text>
            // @ts-expect-error TS(2304): Cannot find name 'style'.
            <Text style={styles.CardBodyText}>Some text here</Text>
          </SafeAreaView>
          <SafeAreaView>
            // @ts-expect-error TS(2304): Cannot find name 'style'.
            <Text style={styles.CardHeaderText}>My price range...</Text>
            // @ts-expect-error TS(2304): Cannot find name 'style'.
            <Text style={styles.SliderBody}>ADD SLIDER</Text>
          </SafeAreaView>
          <SafeAreaView>
            // @ts-expect-error TS(2304): Cannot find name 'style'.
            <Text style={styles.CardHeaderText}>I am active from...</Text>
            // @ts-expect-error TS(2304): Cannot find name 'style'.
            <Text style={styles.CardBodyText}>Some text here/SLIDER</Text>
          </SafeAreaView>
        </SafeAreaView>
        // @ts-expect-error TS(2304): Cannot find name 'style'.
        <Pressable style={styles.SubmitButton}
          // @ts-expect-error TS(2304): Cannot find name 'onPress'.
          onPress={() => navigation.navigate("Profile")}>
          // @ts-expect-error TS(2304): Cannot find name 'style'.
          <Text style={styles.SubmitText}>SUBMIT</Text>
        </Pressable>
        // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
        <SafeAreaView style={styles.DefaultBox}>
          // @ts-expect-error TS(2304): Cannot find name 'style'.
          <Text style={styles.DefaultText}>Use my default settings</Text>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
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
