// import React from 'react'
// import { LinearGradient } from 'expo-linear-gradient';
// import {
//   SafeAreaView,
//   Text,
//   StyleSheet,
//   TextInput,
//   Image,
//   Keyboard,
//   Button,
//   TouchableOpacity,
//   TouchableWithoutFeedback
// } from "react-native";
// import { SignUp } from "./SignUp";
// import {
//   useFonts,
//   Jost_400Regular,
//   Jost_500Medium,
//   Jost_700Bold,
// } from "@expo-google-fonts/jost";

// function Profile({ text }) {
//   let [fontsLoaded] = useFonts({
//     Jost_400Regular,
//     Jost_500Medium,
//     Jost_700Bold,
//   });

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <SafeAreaView style={styles.profile}>
//       <Image source={require("../../assets/avatar.png")} style={styles.ppic} />
//       <Text
//         style={{
//           textAlign: "center",
//           fontSize: 25,
//           fontWeight: "bold",
//           fontFamily: "Jost_700Bold",
//         }}
//       >
//         {text}
//       </Text>
//     </SafeAreaView>
//   );
// }

// function Field({ val, onChange, label, placeholder, secureTextEntry }) {
//   return (
//     <SafeAreaView>
//       <Text style={styles.label}>{label}</Text>
//       <TextInput
//         secureTextEntry={secureTextEntry}
//         style={styles.input}
//         onChangeText={onChange}
//         value={val}
//         placeholder={placeholder}
//       />
//     </SafeAreaView>
//   );
// }

// function SignIn({ setSignIn, navigation }) {
//   const [user, onChangeUser] = React.useState("");
//   const [password, onChangePassword] = React.useState("");
//   let [fontsLoaded] = useFonts({
//     Jost_400Regular,
//     Jost_500Medium,
//     Jost_700Bold,
//   });

//   if (!fontsLoaded) {
//     return null;
//   }
//   return (
//       <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//           <LinearGradient
//               style={styles.border}
//               colors={['#A1DDFF', '#A1DDFF', '#0077E5']}
//           >
//               <Profile text={"Welcome Back!"} />

//               <SafeAreaView style={styles.form}>
//                   <Field
//                       val={user}
//                       onChange={onChangeUser}
//                       label={"Username or Email"}
//                       placeholder={"johndoe@ufosc.org"}
//                   />
//                   <Field
//                       val={password}
//                       onChange={onChangePassword}
//                       label={"Password"}
//                       placeholder={"********"}
//                       secureTextEntry={true}
//                   />
//                   <SafeAreaView style={styles.button}>
//                       <TouchableOpacity
//                       onPress={() => navigation.navigate("Profile")} style={styles.ButtonContainer}>
//                           <Text style={styles.ButtonText}>Sign In</Text>
//                       </TouchableOpacity>
//                       <Button
//                           style={styles.button}
//                           title="Sign Up"
//                           onPress={() => navigation.navigate("Sign Up")}
//                       />
//                   </SafeAreaView>
//               </SafeAreaView>
//           </LinearGradient>
//       </TouchableWithoutFeedback>

//   )
// }

// const styles = StyleSheet.create({
//   border: {
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     alignSelf: "center",
//     backgroundColor: "#b1caf2",
//     height: "100%",
//     width: "100%",
//   },
//   profile: {
//     flexDirection: "column",
//     width: "70%",
//   },
//   form: {
//     flexDirection: "column",
//     alignContent: "center",
//     backgroundColor: "white",
//     paddingHorizontal: 10,
//     paddingVertical: 30,
//     borderRadius: 20,
//     marginTop: 40,
//     marginBottom: 100,
//   },
//   label: {
//     fontSize: 15,
//     color: "black",
//     marginLeft: 30,
//     fontFamily: "Jost_400Regular",
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderRadius: 30,
//     padding: 10,
//     minWidth: "70%",
//     backgroundColor: "#FFE298",
//   },
//   ppic: {
//     alignSelf: "center",
//     width: 150,
//     height: 150,
//     marginBottom: 20,
//   },
//   button: {
//     borderRadius: 30,
//     padding: 10,
//     width: "50%",
//     alignSelf: "center",
//   },
//   ButtonContainer: {
//     borderRadius: 20,
//     padding: 15,
//     alignSelf: "center",
//     backgroundColor: "#FFB72D",
//   },
//   ButtonText: {
//     fontSize: 18,
//     fontFamily: "Jost_700Bold",
//     color: "black",
//     fontWeight: "bold",
//     alignSelf: "center",
//   },
// });

// export { SignIn, Profile, Field, styles };
