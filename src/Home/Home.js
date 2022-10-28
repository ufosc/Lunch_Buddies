import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions} from 'react-native';

import { Profile } from '../Profile/Profile'

const win = Dimensions.get('window')

function Home() {
    return (
        <SafeAreaView style={styles.Background}>
            <Profile />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Background: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#0077e5",
        height: "100%"
    }
});

export default Home
