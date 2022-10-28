import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions} from 'react-native';
const win = Dimensions.get('window')

function Profile() {
    return (
        <SafeAreaView style={styles.Profile}>
            <Image source={require("../../assets/avatar.png")} style={styles.Picture}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Profile: {
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: '#4287f5',
        borderRadius: 20,
        width: "80%",
        height: "60%",
        marginTop: 50
    },
    Picture: {
        width: win.width/2,
        height: win.width/2,
        alignSelf: "center",
    }
})

export { Profile }
