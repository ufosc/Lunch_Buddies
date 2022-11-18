import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, FlatList, TouchableOpacity } from 'react-native';
const win = Dimensions.get('window')

const FakeData = [
    {
      id: '1',
      messageName: 'Albert Gator',
      messageText: 'This is a message preview blablablablab'
    },
    {
      id: '2',
      messageName: 'Alberta Gator',
      messageText: 'This is a message preview'
    },
    {
      id: '3',
      messageName: 'IDK',
      messageText: 'This is a message preview'
    },
  ];
  
  const Item = ({ messageName, messageText, navigation }) => (
    <TouchableOpacity 
    style={styles.Message}
    onPress={() => navigation.navigate("Message Page")}>
        <Image source={require("../../assets/avatar.png")} style={styles.Picture}/>
        <View style={styles.Preview}>
            <Text style={styles.MessageName}>{messageName}</Text>
            <Text style={styles.MessageText}>{messageText}</Text>
        </View>
    </TouchableOpacity>
  );
  
  const Chat = ({navigation}) => {
    const renderItem = ({ item }) => (
      <Item messageName={item.messageName} 
            messageText={item.messageText}
            navigation={navigation}/>
    );
  
    return (
      <SafeAreaView style={styles.Chat}>
        <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={styles.ButtonContainer}
          >
            <Text style={styles.ButtonText}>Back</Text>
          </TouchableOpacity>
        <View style={styles.HeaderRow}>
                {/*add hamburger menu and back arrow here*/}
                <Text style={styles.Header}>Messages</Text>
        </View>
        <FlatList
          data={FakeData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }  

const styles = StyleSheet.create({
    HeaderRow: {
        flexDirection: 'row'
    },
    Header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20
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
        width: '100%',
        marginTop: 13,
        alignItems: 'center',
        //shadowColor: 'black',
        //shadowOffset: {width: 5, height: -5},
        //shadowOpacity: 0.5,
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
        fontSize: 14
    },
    MessageText: {
        fontSize: 14,
    },
    ButtonContainer: {
        borderRadius: 20,
        padding: 15,
        alignSelf: "left",
        marginLeft: '5%',
        backgroundColor: "#FFB72D",
    },
    ButtonText: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
    },
})

export { Chat }