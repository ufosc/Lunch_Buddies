import * as React from 'react';
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
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Slider from '@react-native-community/slider';
//IMPORTS FONTS, THE COMMAND "npx expo install expo-font @expo-google-fonts/jost" SHOULD BE RUN LOCALLy BEFORE
import {
  useFonts,
  Jost_400Regular,
  Jost_500Medium,
  Jost_700Bold,
} from "@expo-google-fonts/jost";

function Toggle({ navigation }) {

  const [priceRange, setPriceRange] = useState(0);

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
        <SafeAreaView styles={styles.TextContainer}>
          <Text style={styles.Title}>Welcome Back, </Text>
          <Text style={styles.Title}>NAME!</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.Card}>
          <SafeAreaView>
            <Text style={styles.CardHeaderText}>Today I want to eat...</Text>
            <Text style={styles.CardBodyText}>Some text here</Text>
          </SafeAreaView>
          <SafeAreaView>
            <Text style={styles.CardHeaderText}>My price range...</Text>
            <Slider
              style={styles.SliderBody}
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor="#ffe298"
              maximumTrackTintColor="#b1caf2"
              thumbTintColor="#ffb72d"
              value={priceRange}
              onValueChange={value => setPriceRange(Math.round(value))}
            />
            <Text style={styles.CardBodyText}>${priceRange}</Text>
          </SafeAreaView>
          <SafeAreaView>
            <Text style={styles.CardHeaderText}>I am active from...</Text>
            <Text style={styles.CardBodyText}>Some text here/SLIDER</Text>
          </SafeAreaView>
        </SafeAreaView>
        <Pressable style={styles.SubmitButton}
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
  TextContainer: {
    width: "80%",
  },
  Title: {
    fontSize: 24,
    fontFamily: "Jost_700Bold",
    width: "100%",
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
    height: "25%",
  },
  SliderBody: {
    marginHorizontal: "5%",
    width: "85%",
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
