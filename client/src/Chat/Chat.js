import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions} from 'react-native';
const win = Dimensions.get('window')

function Message() {
    return(
        <View style={styles.Message}>
            <Image source={require("../../assets/avatar.png")} style={styles.Picture}/>
            <View style={styles.Preview}>
                <Text style={styles.MessageName}>Albert Gator</Text>
                <Text style={styles.MessageText}>This is a message preview</Text>
            </View>
        </View>
    )
}

function Chat() {
    return(
        <SafeAreaView style={styles.Chat}>
            <View style={styles.HeaderRow}>
                {/*add hamburger menu and back arrow here*/}
                <Text style={styles.Header}>Messages</Text>
            </View>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    HeaderRow: {
        flexDirection: 'row'
    },
    Header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 60,
        marginBottom: 40
    },
    Chat: {
        flexDirection: 'column',
        backgroundColor: '#fcf1e5',
        alignItems: 'center',
        height: '100%'
    },
    Message: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 30,
        height: 90,
        width: '80%',
        marginTop: 13,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 5, height: -5},
        shadowOpacity: 0.5,
        elevation: 3
    },
    Picture: {
        width: win.width/6,
        height: win.width/6,
        marginRight: '5%',
        marginLeft: '5%',
    },
    Preview: {
        flexDirection: 'column',
        width: '65%',
        height: '100%',
        marginTop: '5%'
    },
    MessageName: {
        fontWeight: 'bold',
        fontSize: 18
    },
    MessageText: {
        fontSize: 14,
    }
})

export { Chat }