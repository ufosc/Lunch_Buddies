import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions} from 'react-native';

import { Profile } from '../Profile/Profile'

import { SignIn } from '../SignIn/SignIn'
import { SignUp } from '../SignIn/SignUp'

const win = Dimensions.get('window')

function Home() {
    // Temporary code to test the sign in and sign up pages
    const [signIn, setSignIn] = React.useState(true)
    return (
        <SafeAreaView style={styles.Background}>
            {/* Sign In Sign Up for now */}
            {(signIn) ? 
                <SignIn setSignIn={setSignIn} />
                :
                <SignUp setSignIn={setSignIn} />
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Background: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#b1caf2",
        height: "100%"
    }
});

export default Home
