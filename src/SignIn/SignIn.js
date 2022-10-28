import React from 'react'
import { SafeAreaView, Text, StyleSheet, TextInput, Image, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


function Profile({ text }) {
    return (
        <SafeAreaView style={styles.profile}>
            <Image 
                source={require("../../assets/avatar.png")} 
                style={styles.ppic}
            />
            <Text 
                style={{textAlign: "center", fontSize: 25, fontWeight: "bold"}}
            >
                {text}
            </Text>
        </SafeAreaView>
    )
}

function Field({ val, onChange, label, placeholder, secureTextEntry }) {
    return (
        <SafeAreaView>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                style={styles.input}
                onChangeText={onChange}
                value={val}
                placeholder={placeholder}
            />
        </SafeAreaView>
    )
}

function SignIn({ setSignIn }) {
    const [user, onChangeUser] = React.useState("")
    const [password, onChangePassword] = React.useState("")

    return (
        <LinearGradient
            style={styles.border}
            colors={['#98d8e3', '#3b5998', '#192f6a']}
        >
            <Profile text={"Welcome Back!"} />

            <SafeAreaView style={styles.form}>
                <Field 
                    val={user} 
                    onChange={onChangeUser}
                    label={"Username or Email"}
                    placeholder={"johndoe@ufosc.org"}
                />
                <Field 
                    val={password} 
                    onChange={onChangePassword}
                    label={"Password"}
                    placeholder={"********"}
                    secureTextEntry={true}
                />
                <SafeAreaView style={styles.button}>
                    <Button 
                        style={styles.button}
                        title="Sign In"
                    />
                    <Button 
                        style={styles.button}
                        title="Sign Up"
                        onPress={() => setSignIn(false)}
                    />
                </SafeAreaView>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    border: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#b1caf2",
        height: "100%",
        width: "100%"
    },
    profile: {
        flexDirection: "column",
        width: "70%",
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
    label: {
        fontSize: 15,
        color: "black",
        marginLeft: 30,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 30,
        padding: 10,
        minWidth: "70%",
        backgroundColor: "#FFE298"
    },
    ppic: {
        alignSelf: "center",
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    button: {
        borderRadius: 30,
        padding: 10,
        width: "50%",
        alignSelf: "center",
    }
});

export { SignIn, Profile, Field, styles }
