import React from "react";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { 
    View, 
    StyleSheet, 
    TouchableOpacity, 
    Text, 
    SafeAreaView,
    StatusBar,
    Dimensions,
    Image,
 } from "react-native";

 const win = Dimensions.get('window')

const DrawerStyle = (props: any) => {
    return (
        // @ts-expect-error TS(2532): Object is possibly 'undefined'.
        <SafeAreaView style={{flex: 1, marginTop:StatusBar.currentHeight * 2}}>
            <View style={styles.Container}>
                <Image source={require("../../assets/avatar.png")} style={styles.Picture}/>
                <View style={{paddingTop: '5%'}}/>
                <Text style={styles.Name}>Albert Gator</Text>
                <Text style={styles.Subtitle}>albert.gator@ufl.edu</Text>
                <View
                    style={{
                        marginTop: '5%',
                        borderBottomColor: '#b3b3b3',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        // @ts-expect-error TS(1117): An object literal cannot have multiple properties ... Remove this comment to see the full error message
                        borderBottomWidth: .5,
                    }}
                />
            </View>
            <DrawerContentScrollView {...props}
            //fix this
            contentContainerStyle={{marginTop: -25}}
            >
                <View style={{flex: 1, backgroundColor: '#fff',}}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View>
                <TouchableOpacity
                onPress={() => props.navigation.navigate("AuthScreen")}
                style={styles.ButtonContainer}
                >
                    <Text style={styles.ButtonText}>Log Out</Text>
                </TouchableOpacity>
            </View>
            <View style={{padding: "5%"}}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginLeft: '5%',
        //marginTop: '5%',
        marginRight: '5%',
        //marginBottom: '5%',
        //flex: 1,
        //alignItems: 'flex-start',
        //justifyContent: 'flex-start',
    },
    ButtonContainer: {
        borderRadius: 10,
        padding: 15,
        alignSelf: "center",
        backgroundColor: "#FFB72D",
      },
    ButtonText: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
    },
    Picture: {
        width: win.width/5,
        height: win.width/5,
        borderRadius: win.width/10,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "white"
    },
    Name: {
        fontSize: 25,
        color: "black",
        fontWeight: "bold",
    },
    Subtitle: {
        fontSize: 14,
        color: "#b3b3b3",
    },
    ButtonGroup: {
        flexGrow: 1, 
        marginTop: 50,
    },
});

export default DrawerStyle;