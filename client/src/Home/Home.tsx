import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styled } from 'nativewind';

const win = Dimensions.get("window");

const StyledGradient = styled(LinearGradient)
const StyledView = styled(SafeAreaView)
const StyledTouchableOpacity = styled(TouchableOpacity)
const StyledText = styled(Text)
const StyledImage = styled(Image)

const fakeUsers = [{
    name: 'User1',
    age: '21',
    subtitle: 'Comp Sci Major',
    about: 'This is about me 1',
    eat: 'This is what I want to eat 1',
    price: '$0 to $100'
}, {
    name: 'User2',
    age: '20',
    subtitle: 'Comp Eng Major',
    about: 'This is about me 2',
    eat: 'This is what I want to eat 2',
    price: '$0 to $50'
}, {
    name: 'User3',
    age: '19',
    subtitle: 'Digital Arts Major',
    about: 'This is about me 3',
    eat: 'This is what I want to eat 3',
    price: '$0 to $10'
}]

function Card() {
  const [userNum, setUserNum] = useState(0)
  const [currentUser, setCurrentUser] = useState(fakeUsers[userNum])

  return (
    <StyledView className='flex flex-col rounded-2xl w-4/5 h-[75%] mt-10 px-4 bg-white'>
      <StyledImage
          source={require("../../assets/avatar.png")}
          className="self-center mt-[-20%] mb-2 w-36 h-36"
      />
      <StyledText className='font-bold text-2xl'>{currentUser?.name}, {currentUser?.age}</StyledText>
      <StyledText className='mb-8 text-neutral-400'>{currentUser?.subtitle}</StyledText>
      <StyledText className='font-bold text-amber-400 text-xl'>About me...</StyledText>
      <StyledText className='mb-8'>{currentUser?.about}</StyledText>
      <StyledText className='font-bold text-amber-400 text-xl'>I want to eat...</StyledText>
      <StyledText className='mb-8'>{currentUser?.eat}</StyledText>
      <StyledText className='font-bold text-amber-400 text-xl'>My price range..</StyledText>
      <StyledView className='flex flex-row justify-between'>
        <StyledText className='mb-8 text-neutral-400'>{currentUser?.price}</StyledText>
      </StyledView>
      <StyledTouchableOpacity 
          onPress={() => nextUser({setCurrentUser, userNum, setUserNum})}
          className='mt-10 py-3 px-4 rounded-2xl bg-yellow-500'>
          <StyledText className='font-bold self-center text-lg'>Next user</StyledText>
        </StyledTouchableOpacity>
    </StyledView>
  );
}

function nextUser(props: any) {
  //temp code for using fake users
  if(props.userNum == 2){
    props.setUserNum(0)
  } else {
    props.setUserNum(props.userNum + 1)
  } 
  props.setCurrentUser(fakeUsers[props.userNum])
}

function Home({navigation}: any) {
  return (
    <StyledGradient
      className='flex-col justify-center self-center items-center h-full w-full'
      colors={["#A1DDFF", "#A1DDFF", "#0077E5"]}
    >
        <StyledView className='w-4/5 flex-row justify-between'>
          <StyledTouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            className='flex py-3 px-2'
          >
            <StyledImage className='w-[30] h-[30]' source={require("../../assets/fake_menu.png")} />
          </StyledTouchableOpacity>
          <StyledTouchableOpacity
            onPress={() => navigation.navigate("Messages")}
            className='self-center py-3 px-4 rounded-2xl bg-yellow-500'
          >
            <StyledText className='font-bold self-center text-lg'>Chat</StyledText>
          </StyledTouchableOpacity>
        </StyledView>

        <Card />
    </StyledGradient>
  );
}

export { Home };
