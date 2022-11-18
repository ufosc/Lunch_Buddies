import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
// import { Slider } from '@rneui/themed';
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
//import { DrawerActions } from '@react-navigation/native';

const win = Dimensions.get("window");

function Card() {
  const [range, setRange] = useState("20");
  return (
    <View style={styles.Profile}>
      <Image
        source={require("../../assets/avatar.png")}
        style={styles.Picture}
      />
      <Text style={styles.Title}>Alberta Gator, 21</Text>
      <Text style={styles.Subtitle}>Computer Science Major at UF</Text>
      <Text style={styles.InfoTitle}>About me...</Text>
      <Text style={styles.Info}>some text</Text>
      <Text style={styles.InfoTitle}>I want to eat...</Text>
      <Text style={styles.Info}>some text</Text>
      <Text style={styles.InfoTitle}>My price range..</Text>
      <Text></Text>

      {/* <Slider  */}
      {/* allowTouchTrack = {true} */}
      {/* maximumValue={100} */}
      {/* minimumValue={0} */}
      {/* minimumTrackTintColor="#ffb72d" */}
      {/* maximumTrackTintColor="#b3b3b3" */}
      {/* step={1} */}
      {/* value={20} */}
      {/* onValueChange = {value => setRange(value)} */}
      {/* thumbStyle = {{height: 25, width: 25}} */}
      {/* thumbTintColor = {'#ffb72d'} */}
      {/* thumbProps={{ */}
      {/*     children: ( */}
      {/*     <View */}
      {/*         style={{ */}
      {/*         marginTop: "-95%", */}
      {/*         marginLeft: "-25%", */}
      {/*         alignSelf: 'left', */}
      {/*         width: 100, */}
      {/*         }}> */}
      {/*         <Text style = {styles.SliderText}>${range}</Text> */}
      {/*     </View> */}
      {/*     ) */}
      {/* }}         */}
      {/* /> */}

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.Subtitle}>$0</Text>
        <Text style={styles.Subtitle}>$100</Text>
      </View>
    </View>
  );
}

function Profile({ navigation }) {
  return (
    <LinearGradient
      style={styles.border}
      colors={["#A1DDFF", "#A1DDFF", "#0077E5"]}
    >
      <SafeAreaView>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Sign In")}
            style={styles.ButtonContainer}
          >
            {/* <Image source={require("../../assets/fake_menu.png")} style={styles.MenuPicture}/> */}
            <Text style={styles.ButtonText}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Chat")}
            style={styles.ButtonContainer}
          >
            <Text style={styles.ButtonText}>Chat</Text>
          </TouchableOpacity>
        </View>
        <Card />
      </SafeAreaView>
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
  MenuPicture: {
    width: 30,
    height: 30,
    alignSelf: "left",
    marginBottom: "4%",
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
    alignSelf: "center",
    marginTop: "-20%",
    marginBottom: "4%",
  },
  Title: {
    fontWeight: "bold",
    fontSize: 30,
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
