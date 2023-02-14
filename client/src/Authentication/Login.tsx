import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Jost_400Regular,
  Jost_500Medium,
  Jost_700Bold,
} from "@expo-google-fonts/jost";

import { Profile, Field } from "./Components";


function Login(props: any) {

  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
    Jost_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const test = async () => {
    try {
      const req = await fetch("192.168.1.27:8080/hello")
      const res = req.json()
      console.log(res)
    } catch(err) {
      console.log(err)
    }
  }
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        style={styles.border}
        colors={["#A1DDFF", "#A1DDFF", "#0077E5"]}
      >
        // @ts-expect-error TS(2786): 'Profile' cannot be used as a JSX component.
        <Profile text={"Welcome Back!"} />

        <SafeAreaView style={styles.form}>
          // @ts-expect-error TS(2786): 'Field' cannot be used as a JSX component.
          <Field
            val={props.email}
            onChange={props.setEmail}
            label={"Username or Email"}
            placeholder={"johndoe@ufosc.org"}
          />
          // @ts-expect-error TS(2786): 'Field' cannot be used as a JSX component.
          <Field
            val={props.password}
            onChange={props.setPassword}
            label={"Password"}
            placeholder={"********"}
            secureTextEntry={true}
          />
          <SafeAreaView style={styles.button}>
            <TouchableOpacity
              onPress={() => props.navigateTo("Start")}
              style={styles.ButtonContainer}
            >
              <Text style={styles.ButtonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.toggleLogin()}
              style={styles.button}
            >
              <Text>Sign Up</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </SafeAreaView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

function SignUp(props: any) {

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        style={styles.border}
        colors={["#A1DDFF", "#A1DDFF", "#0077E5"]}

      >
        // @ts-expect-error TS(2786): 'Profile' cannot be used as a JSX component.
        <Profile text={"Sign Up!"} />

        <SafeAreaView style={styles.form}>
          // @ts-expect-error TS(2786): 'Field' cannot be used as a JSX component.
          <Field
            val={props.email}
            onChange={props.setEmail}
            label={"Username or Email"}
            placeholder={"johndoe@ufosc.org"}
          />
          // @ts-expect-error TS(2786): 'Field' cannot be used as a JSX component.
          <Field
            val={props.password}
            onChange={props.setPassword}
            label={"Password"}
            placeholder={"********"}
            secureTextEntry={true}
          />
          // @ts-expect-error TS(2786): 'Field' cannot be used as a JSX component.
          <Field
            val={props.confirmPassword}
            onChange={props.setConfirmPassword}
            label={"Confirm Password"}
            placeholder={"********"}
            secureTextEntry={true}
          />

          <SafeAreaView style={styles.button}>
            <TouchableOpacity
              onPress={() => props.navigateTo("Start")}
              style={styles.ButtonContainer}
            >
              <Text style={styles.ButtonText}>Sign Up</Text>
            </TouchableOpacity> 
            <TouchableOpacity
              onPress={() => props.toggleLogin()}
              style={styles.button}
            >
              <Text>Sign In</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </SafeAreaView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  border: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#b1caf2",
    height: "100%",
    width: "100%",
  },
  form: {
    flexDirection: "column",
    alignContent: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderRadius: 20,
    marginTop: 40,
    marginBottom: 100,
  },
  button: {
    borderRadius: 30,
    padding: 10,
    width: "50%",
    alignSelf: "center",
  },
  ButtonContainer: {
    borderRadius: 20,
    padding: 15,
    alignSelf: "center",
    backgroundColor: "#FFB72D",
  },
  ButtonText: {
    fontSize: 18,
    fontFamily: "Jost_700Bold",
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export { Login, SignUp };
