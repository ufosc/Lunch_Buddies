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
import CardsSwipe from 'react-native-cards-swipe';

const win = Dimensions.get("window");

const StyledGradient = styled(LinearGradient)
const StyledView = styled(SafeAreaView)
const StyledTouchableOpacity = styled(TouchableOpacity)
const StyledText = styled(Text)
const StyledImage = styled(Image)

const userData = [{
  image: '',
  name: 'User1',
  age: '21',
  subtitle: 'Comp Sci Major',
  about: 'This is about me 1',
  eat: 'This is what I want to eat 1',
  price: '$0 to $100',
  availability: '11:00am to 1:00pm'
}, {
  image: '',
  name: 'User2',
  age: '20',
  subtitle: 'Comp Eng Major',
  about: 'This is about me 2',
  eat: 'This is what I want to eat 2',
  price: '$0 to $50',
  availability: '12:00pm to 1:00pm'
}, {
  image: '',
  name: 'User3',
  age: '19',
  subtitle: 'Digital Arts Major',
  about: 'This is about me 3',
  eat: 'This is what I want to eat 3',
  price: '$0 to $10',
  availability: '12:00pm to 2:00pm'
}, {
  image: '',
  name: 'User4',
  age: '19',
  subtitle: 'Comp Eng Major',
  about: 'This is about me 4',
  eat: 'This is what I want to eat 4',
  price: '$0 to $20',
  availability: '11:30am to 1:30pm'
}]

function swipedLeft({card}: any) {
  //TODO: reject swiped user
}

function swipedRight({card}: any) {
  //TODO: accept swiped user
}

function Home({navigation}: any) {
  return (
    <StyledGradient
      className='flex-col justify-center self-center items-center h-full w-full'
      colors={["#A1DDFF", "#A1DDFF", "#0077E5"]}
    >
        <StyledView className='w-4/5 flex-row justify-between mt-12'>
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

        <CardsSwipe
          cards={userData}
          renderCard={user => (
            <StyledView className='flex flex-col rounded-2xl w-4/5 min-h-[80%] px-4 bg-white'>
            <StyledImage
                source={user.image != '' ? user.image : require("../../assets/avatar.png")}
                className="self-center mt-[-20%] mb-2 w-36 h-36"
            />
            <StyledText className='font-bold text-2xl'>{user.name}, {user.age}</StyledText>
            <StyledText className='mb-8 text-neutral-400'>{user.subtitle}</StyledText>
            <StyledText className='font-bold text-amber-400 text-xl'>About me...</StyledText>
            <StyledText className='mb-8'>{user.about}</StyledText>
            <StyledText className='font-bold text-amber-400 text-xl'>I want to eat...</StyledText>
            <StyledText className='mb-8'>{user.eat}</StyledText>
            <StyledText className='font-bold text-amber-400 text-xl'>My price range...</StyledText>
            <StyledView className='flex flex-row justify-between'>
              <StyledText className='mb-8'>{user.price}</StyledText>
            </StyledView>
            <StyledText className='font-bold text-amber-400 text-xl'>I'm available from...</StyledText>
            <StyledText className='mb-8'>{user.availability}</StyledText>
          </StyledView>
          )}
          onSwipedLeft={card => swipedLeft(card)}
          onSwipedRight={card => swipedRight(card)}
        />
    </StyledGradient>
  );
}

export { Home };
