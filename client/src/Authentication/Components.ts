import {
    SafeAreaView,
    Text,
    StyleSheet,
    TextInput,
    Image,
    Button,
    TouchableOpacity,
  } from "react-native";
  
  import {
    useFonts,
    Jost_400Regular,
    Jost_500Medium,
    Jost_700Bold,
  } from "@expo-google-fonts/jost";
  
  
function Profile({
    text
}: any) {
    let [fontsLoaded] = useFonts({
        Jost_400Regular,
        Jost_500Medium,
        Jost_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    // @ts-expect-error TS(2322): Type 'boolean' is not assignable to type 'SafeArea... Remove this comment to see the full error message
    return (
        // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
        <SafeAreaView style={styles.profile}>
        // @ts-expect-error TS(7027): Unreachable code detected.
        <Image source={require("../../assets/avatar.png")} style={styles.ppic} />
        <Text
            // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
            style={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            textAlign: "center",
            // @ts-expect-error TS(2304): Cannot find name 'fontSize'.
            fontSize: 25,
            // @ts-expect-error TS(2304): Cannot find name 'fontWeight'.
            fontWeight: "bold",
            // @ts-expect-error TS(2304): Cannot find name 'fontFamily'.
            fontFamily: "Jost_700Bold",
            }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
            {text}
        </Text>
        </SafeAreaView>
    );
    }

    function Field({
        val,
        onChange,
        label,
        placeholder,
        secureTextEntry
    }: any) {
    // @ts-expect-error TS(2322): Type 'boolean' is not assignable to type 'SafeArea... Remove this comment to see the full error message
    return (
        <SafeAreaView>
        // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
        <Text style={styles.label}>{label}</Text>
        <TextInput
            // @ts-expect-error TS(7027): Unreachable code detected.
            secureTextEntry={secureTextEntry}
            // @ts-expect-error TS(2304): Cannot find name 'style'.
            style={styles.input}
            // @ts-expect-error TS(2304): Cannot find name 'onChangeText'.
            onChangeText={onChange}
            // @ts-expect-error TS(2304): Cannot find name 'value'.
            value={val}
            // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
            placeholder={placeholder}
        />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    profile: {
        flexDirection: "column",
        width: "70%",
    },
    ppic: {
        alignSelf: "center",
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    label: {
        fontSize: 15,
        color: "black",
        marginLeft: 30,
        fontFamily: "Jost_400Regular",
    },
    input: {
        height: 40,
        margin: 12,
        //borderWidth: 1,
        borderRadius: 30,
        padding: 10,
        minWidth: "70%",
        backgroundColor: "#FFE298",
    }
})
  
export { Profile, Field }
  