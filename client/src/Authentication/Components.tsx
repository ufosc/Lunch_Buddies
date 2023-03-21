import {
    SafeAreaView,
    Text,
    StyleSheet,
    TextInput,
    Image,
    Button,
    TouchableOpacity,
  } from "react-native";
import { styled } from "nativewind";

import {
    useFonts,
    Jost_400Regular,
    Jost_500Medium,
    Jost_700Bold,
  } from "@expo-google-fonts/jost";

const StyledView = styled(SafeAreaView)
const StyledImage = styled(Image)
const StyledText = styled(Text)
const StyledTextInput = styled(TextInput)
  
function Profile({text}: any) {
    let [fontsLoaded] = useFonts({
        Jost_400Regular,
        Jost_500Medium,
        Jost_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <StyledView className="flex flex-col w-3/4">
            <StyledImage source={require("../../assets/avatar.png")}
            className="mb-4 self-center w-[150] h-[150]" />
            <StyledText className="font-bold text-center text-2xl">
                {text}
            </StyledText>
        </StyledView>
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
        <StyledView className="px-3">
            <StyledText>{label}</StyledText>
            <StyledTextInput
                secureTextEntry={secureTextEntry}
                className="my-2 min-w-[70%] bg-amber-200 rounded-xl p-1.5"
                onChangeText={onChange}
                value={val}
                placeholder={placeholder}
            />
        </StyledView>
    );
}
  
export { Profile, Field }
  