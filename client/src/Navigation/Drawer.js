import React from "react";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView } from "react-native";

const DrawerStyle = (props, {navigation}) => {
    return (
        <View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={styles.Container}>
                <TouchableOpacity
                onPress={() => props.navigation.navigate("AuthScreen")}
                style={styles.ButtonContainer}
                >
                    <Text style={styles.ButtonText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginTop: '100%',
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

export default DrawerStyle;