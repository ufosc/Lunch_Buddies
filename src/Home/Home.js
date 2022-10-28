import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Profile } from '../Profile/Profile'

const win = Dimensions.get('window')

function Home() {
    return (
        <SafeAreaView style={styles.Background}>
            <LinearGradient
            colors={['#a0deff', '#0077e5']} //blue linear gradient for background
            style={styles.linearGradient}>
                <Profile />
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Background: {
        flexDirection: "row",
        justifyContent: "center",
        height: "100%"
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 415, //screen width
      }
});

export default Home