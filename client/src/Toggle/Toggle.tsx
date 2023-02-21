import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import MultiSlider from "@ptomasroos/react-native-multi-slider"
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

//IMPORTS FONTS, THE COMMAND "npx expo install expo-font @expo-google-fonts/jost" SHOULD BE RUN LOCALLy BEFORE
import {
  useFonts,
  Jost_400Regular,
  Jost_500Medium,
  Jost_700Bold,
} from "@expo-google-fonts/jost";

function Toggle({ navigation }: any) {

  const [priceRange, setPriceRange] = useState([1, 50]);
  const [minTime, setMinTime] = useState(new Date());
  const [showMinTime, setShowMinTime] = useState(false);
  const [maxTime, setMaxTime] = useState(new Date());
  const [showMaxTime, setShowMaxTime] = useState(false);

  //ENSURES THAT FONTS ARE LOADED BEFORE COMPONENTS ARE RENDERED
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
    Jost_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const fakeItems = [{
      id: 1,
      name: 'Item1'
    }, {
      id: 2,
      name: 'Item2'
    }, {
      id: 3,
      name: 'Item3'
    }, {
      id: 4,
      name: 'Item4'
    }, {
      id: 5,
      name: 'Item5'
    },
  ]

  return (
    <>
      <LinearGradient style={styles.Border} colors={["#A1DDFF", "#0077E5"]}>
        <SafeAreaView style={styles.TextContainer}>
          <Text style={styles.Title}>Welcome Back, </Text>
          <Text style={styles.Title}>NAME!</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.Card}>
          <SafeAreaView>
            <Text style={styles.CardHeaderText}>Today I want to eat...</Text>
            <Text style={styles.CardBodyText}>Select items here</Text>
          </SafeAreaView>
          <SafeAreaView>
            <Text style={styles.CardHeaderText}>My price range...</Text>
            <MultiSlider
              values={[priceRange[0]!, priceRange[1]!]}
              min={0}
              max={100}
              step={1}
              onValuesChange={values => setPriceRange(values)}
              markerStyle={{
                backgroundColor: '#ffb72d'
              }}
              trackStyle={{
                backgroundColor: '#a1ddff'
              }}
              selectedStyle={{
                backgroundColor: '#ffe298'
              }}
            />
            <Text style={styles.CardBodyText}>${priceRange[0]} - ${priceRange[1]}</Text>
          </SafeAreaView>
          <SafeAreaView>
            <Text style={styles.CardHeaderText}>I am active from...</Text>
            <View style={styles.TimeContainer}>
              <Pressable style={styles.TimeButton}
                onPress={() => setShowMinTime(true)}>
                <Text style={styles.TimeText}>{moment(minTime).format('LT')}</Text>
              </Pressable>
              {showMinTime && (
              <DateTimePicker
                mode="time"
                value={minTime}
                onChange={(event, date) => {
                  setShowMinTime(false);
                  setMinTime(date!);
                }}/>
              )}
              <Text style={styles.TimeText}>to</Text>
              <Pressable style={styles.TimeButton}
                onPress={() => setShowMaxTime(true)}>
                <Text style={styles.TimeText}>{moment(maxTime).format('LT')}</Text>
              </Pressable>
              {showMaxTime && (
              <DateTimePicker
                mode="time"
                value={maxTime}
                onChange={(event, date) => {
                  setShowMaxTime(false);
                  setMaxTime(date!);
                }}/>
              )}
            </View>
          </SafeAreaView>
          <Pressable style={styles.SubmitButton}
            onPress={() => navigation.navigate("Profile")}>
            <Text style={styles.SubmitText}>SUBMIT</Text>
          </Pressable>
        </SafeAreaView>
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
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    paddingVertical: "7%"
  },
  CardHeaderText: {
    color: "#23B0FF",
    fontSize: 24,
    fontFamily: "Jost_700Bold",
  },
  CardBodyText: {
    fontSize: 16,
    fontFamily: "Jost_400Regular",
  },
  SubmitButton: {
    backgroundColor: "#FFB72D",
    width: "50%",
    alignSelf: "center",
    textAlign: "center",
    borderRadius: 12,
    padding: 8,
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
    width: "70%",
    padding: 8,
  },
  DefaultText: {
    fontSize: 19,
    fontFamily: "Jost_700Bold",
    textAlign: "center",
  },
  TimeButton: {
    backgroundColor: "#FFB72D",
    width: "44%",
    borderRadius: 12,
    padding: 8,
  },
  TimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  TimeText: {
    fontSize: 16,
    fontFamily: "Jost_400Regular",
    textAlign: "center"
  }
});

export { Toggle };
