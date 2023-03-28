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
import { styled } from 'nativewind';

import { Profile, Field } from "./Components";

const StyledGradient = styled(LinearGradient)
const StyledView = styled(SafeAreaView)
const StyledTouchableOpacity = styled(TouchableOpacity)
const StyledText = styled(Text)

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
  // #b1caf2 for border bg
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <StyledGradient
        className="flex flex-col justify-center items-center h-full w-full"
        colors={["#A1DDFF", "#A1DDFF", "#0077E5"]}
      >
        <Profile text={"Welcome Back!"} />

        <StyledView className="flex flex-col justify-center bg-white px-4 py-8 mt-10 rounded-xl">
          <Field
            val={props.email}
            onChange={props.setEmail}
            label={"Username or Email"}
            placeholder={"johndoe@ufosc.org"}
          />
          <Field
            val={props.password}
            onChange={props.setPassword}
            label={"Password"}
            placeholder={"********"}
            secureTextEntry={true}
          />
          <StyledView className="p-2">
            <StyledTouchableOpacity
              className="bg-yellow-500 w-1/2 self-center rounded-xl py-3"
              onPress={() => props.onSubmitHandler()}
            >
              <StyledText className="font-bold text-center">Sign In</StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity
              className="py-3 w-1/2 self-center"
              onPress={() => props.toggleLogin()}
            >
              <StyledText className="text-center">Sign Up</StyledText>
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>
      </StyledGradient>
    </TouchableWithoutFeedback>
  );
}

function SignUp(props: any) {

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <StyledGradient
        className="flex flex-col justify-center items-center h-full w-full"
        colors={["#A1DDFF", "#A1DDFF", "#0077E5"]}
      >
        <Profile text={"Sign Up!"} />

        <StyledView className="flex flex-col justify-center bg-white px-4 py-8 mt-10 rounded-xl">
          <Field
            val={props.email}
            onChange={props.setEmail}
            label={"Username or Email"}
            placeholder={"johndoe@ufosc.org"}
          />
          <Field
            val={props.password}
            onChange={props.setPassword}
            label={"Password"}
            placeholder={"********"}
            secureTextEntry={true}
          />
          <Field
            val={props.confirmPassword}
            onChange={props.setConfirmPassword}
            label={"Confirm Password"}
            placeholder={"********"}
            secureTextEntry={true}
          />

          <StyledView className="p-2">
            <StyledTouchableOpacity
              className="bg-yellow-500 w-1/2 self-center rounded-xl py-3"
              onPress={() => props.onSubmitHandler()}
            >
              <StyledText className="font-bold text-center">Sign Up</StyledText>
            </StyledTouchableOpacity> 
            <StyledTouchableOpacity
              className="py-3 w-1/2 self-center"
              onPress={() => props.toggleLogin()}
            >
              <StyledText className="text-center">Sign In</StyledText>
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>
      </StyledGradient>
    </TouchableWithoutFeedback>
  );
}

export { Login, SignUp };
