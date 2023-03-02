import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from 'expo-image-picker';

const win = Dimensions.get("window");

function ProfileImage() {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes : ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    })
    if (!result.cancelled){
      // @ts-expect-error TS(2345): Argument of type 'string' is not assignable to par... Remove this comment to see the full error message
      setImage(result.uri);
    }
  }
  if (!image){
    return(
      <TouchableOpacity
        onPress={pickImage}
      >
        <Image
          source={require("../../assets/avatar.png")}
          //source={{uri: image}}
          // @ts-expect-error TS(2769): No overload matches this call.
          style={styles.Picture}
        />
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity
          onPress={pickImage}
        >
          <Image
            //source={require("../../assets/avatar.png")}
            source={{uri: image}}
            // @ts-expect-error TS(2769): No overload matches this call.
            style={styles.Picture}
          />
        </TouchableOpacity>
    )
  }
}

function Card() {
  return (
    <View style={styles.Profile}>
      <ProfileImage/>
      <Text style={styles.Title}>Alberta Gator, 21</Text>
      <Text style={styles.Subtitle}>Computer Science Major at UF</Text>
      <Text style={styles.InfoTitle}>About me...</Text>
      <Text style={styles.Info}>some text</Text>
      <Text style={styles.InfoTitle}>I want to eat...</Text>
      <Text style={styles.Info}>some text</Text>
      <Text style={styles.InfoTitle}>My price range..</Text>
      <Text></Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.Subtitle}>$0</Text>
        <Text style={styles.Subtitle}>$100</Text>
      </View>
    </View>
  );
}

function Profile({navigation}: any) {
  return (
    <LinearGradient
      style={styles.border}
      colors={["#A1DDFF", "#A1DDFF", "#0077E5"]}
    >
        <View style={{ 
          width: "80%", 
          flexDirection: "row", 
          justifyContent: "space-between", }}>
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{padding: 15, flex: 1}}
          >
            <Image style={{width: 30, height: 30}} source={require("../../assets/fake_menu.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Messages")}
            style={styles.ButtonContainer}
          >
            <Text style={styles.ButtonText}>Chat</Text>
          </TouchableOpacity>
        </View>

        <Card />
    </LinearGradient>
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
  Profile: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    width: "80%",
    height: "76%",
    marginTop: "10%",
    paddingHorizontal: 20,
    //shadow adjustments
    shadowColor: "#005AAD",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  Picture: {
    width: win.width / 3,
    height: win.width / 3,
    borderRadius: win.width / 6,
    alignSelf: "center",
    marginTop: "-20%",
    marginBottom: "4%",
  },
  Title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  Subtitle: {
    fontSize: 14,
    marginBottom: "10%",
    color: "#b3b3b3",
  },
  InfoTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffb72d",
  },
  Info: {
    fontSize: 14,
    marginBottom: "10%",
  },
  SliderText: {
    fontSize: 14,
    // @ts-expect-error TS(2322): Type '"left"' is not assignable to type '"auto" | ... Remove this comment to see the full error message
    alignSelf: "left",
  },
  ButtonContainer: {
    borderRadius: 20,
    padding: 15,
    alignSelf: "center",
    backgroundColor: "#FFB72D",
  },
  ButtonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export { Profile };
