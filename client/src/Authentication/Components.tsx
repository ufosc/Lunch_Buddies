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


    return (

        <SafeAreaView style={styles.profile}>
        <Image source={require("../../assets/avatar.png")} style={styles.ppic} />
        <Text
            style={{
            textAlign: "center",
            fontSize: 25,
            fontWeight: "bold",
            fontFamily: "Jost_700Bold",
            }}
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
  