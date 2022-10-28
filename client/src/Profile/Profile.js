import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions} from 'react-native';
const win = Dimensions.get('window')

function Profile() {
    return (
        <SafeAreaView style={styles.Profile}>
            <Image source={require("../../assets/avatar.png")} style={styles.Picture}/>
            <Text style={styles.Title}>Alberta Gator, 21</Text>
            <Text style={styles.Subtitle}>Computer Science Major at UF</Text>
            <Text style={styles.InfoTitle}>About me...</Text>
            <Text style={styles.Info}>some text</Text>
            <Text style={styles.InfoTitle}>I want to eat...</Text>
            <Text style={styles.Info}>some text</Text>
            <Text style={styles.InfoTitle}>My price range..</Text>
            <Text style={styles.Info}>some text</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Profile: {
        flexDirection: "column",
        backgroundColor: '#ffffff',
        borderRadius: 20,
        width: "80%",
        height: "70%",
        marginTop: "25%",
        paddingHorizontal: 20
    },
    Picture: {
        width: win.width/3,
        height: win.width/3,
        alignSelf: "center",
        marginTop: "-20%",
        marginBottom: "4%"
    },
    Title: {
        fontWeight: 'bold',
        fontSize: 30
    },
    Subtitle: {
        fontSize: 14,
        marginBottom: "10%",
        color: "#b3b3b3"
    },
    InfoTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: "#ffb72d"
    },
    Info: {
        fontSize: 14,
        marginBottom: "20%"
    }
})

export { Profile }
