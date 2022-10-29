import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Start() {
  return (
    <>
      <LinearGradient style={styles.Border} colors={["#A1DDFF", "#0077E5"]}>
        <SafeAreaView styles={styles.TextContainer}>
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
        <Pressable style={styles.SubmitButton}>
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
    fontWeight: "bold",
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
    fontWeight: "bold",
    marginHorizontal: "10%",
    marginTop: "20%",
  },
  CardBodyText: {
    fontSize: 16,
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
    fontWeight: "bold",
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
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export { Start };
