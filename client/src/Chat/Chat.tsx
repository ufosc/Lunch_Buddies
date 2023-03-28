import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  Dimensions, 
  FlatList, 
  TouchableOpacity,
  StatusBar, 
} from 'react-native';
import { styled } from 'nativewind';

const win = Dimensions.get('window')

const StyledView = styled(SafeAreaView)
const StyledTouchableOpacity = styled(TouchableOpacity)
const StyledText = styled(Text)
const StyledImage = styled(Image)

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
  
const Item = ({
  messageName,
  messageText,
  navigation
}: any) => (
  <StyledTouchableOpacity 
  className='flex-row bg-white rounded-3xl h-[90] w-full mt-3 items-center drop-shadow'
  onPress={() => navigation.navigate("Message Page")}>
      <StyledImage source={require("../../assets/avatar.png")}
      className='mx-3 w-16 h-16'/>
      <StyledView className='flex-col w-4/6 h-full mt-4'>
          <StyledText className='font-bold'>{messageName}</StyledText>
          <StyledText>{messageText}</StyledText>
      </StyledView>
  </StyledTouchableOpacity>
);
  
const Chat = ({ navigation }: any) => {
  const renderItem = ({ item }: any) => (
    <Item messageName={item.messageName} 
          messageText={item.messageText}
          navigation={navigation}/>
  );

  return (
    <StyledView className='flex-col justify-center items-center self-center h-full w-full bg-orange-100'>
      <StyledView className='mt-10'></StyledView>
      <StyledTouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className='rounded-2xl px-4 py-3 self-center bg-yellow-500'
        >
          <StyledText className='font-bold self-center text-lg'>Back</StyledText>
        </StyledTouchableOpacity>
        <StyledText className='font-bold text-3xl my-6'>Messages</StyledText>
      <FlatList
        data={FakeData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </StyledView>
  );
}

export { Chat }