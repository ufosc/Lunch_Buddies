import React from 'react'
import { SafeAreaView,
     Text, 
     StyleSheet, 
     TextInput, 
     Image, 
     Button,
     TouchableNativeFeedback, 
     Keyboard,
     TouchableWithoutFeedback
    } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Profile, Field, styles } from './SignIn'


function SignUp({ setSignIn , navigation }) {
    const [user, onChangeUser] = React.useState("")
    const [password, onChangePassword] = React.useState("")
    const [confirm, onChangeConfirm] = React.useState("")

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <LinearGradient
                style={styles.border}
                colors={['#98d8e3', '#3b5998', '#192f6a']}
            >
                <Profile text={"Sign Up!"} />
                <SafeAreaView style={styles.form}>
                        <Field 
                            val={user} 
                            onChange={onChangeUser}
                            label={"Username or Email"}
                            keyboardType='numeric'
                        />
                    
                    <SafeAreaView style={styles.button}>
                        <Button 
                            style={styles.button}
                            title="Sign Up"
                        />
                        <Button 
                            style={styles.button}
                            title="Sign In" 
                            onPress={() => navigation.goBack()}
                        />
                    </SafeAreaView>
                </SafeAreaView>
            </LinearGradient>
        </TouchableWithoutFeedback>

    )
}

export { SignUp }
