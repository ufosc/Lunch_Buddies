import * as React from 'react';
import {
  TextInput,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styled } from 'nativewind';
import * as ImagePicker from 'expo-image-picker';

const win = Dimensions.get("window");

const StyledGradient = styled(LinearGradient)
const StyledView = styled(SafeAreaView)
const StyledTouchableOpacity = styled(TouchableOpacity)
const StyledText = styled(Text)
const StyledImage = styled(Image)
const StyledTextInput = styled(TextInput)

function ProfileImage() {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes : ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    })
    if (!result.cancelled){
      // @ts-expect-error TS(2345): Argument of type 'string' is not assignable to par... Remove this comment to see the full error message
      setImage(result.uri);
    }
  }
  if (!image){
    return(
      <TouchableOpacity
        onPress={pickImage}
      >
        <StyledImage
          source={require("../../assets/avatar.png")}
          //source={{uri: image}}
          className="self-center mt-[-20%] mb-2 w-36 h-36"
        />
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity
          onPress={pickImage}
        >
          <StyledImage
            //source={require("../../assets/avatar.png")}
            source={{uri: image}}
            className="self-center mt-[-20%] mb-2 w-36 h-36 rounded-3xl"
          />
        </TouchableOpacity>
    )
  }
}

function Card() {
  const [subtitle, setSubtitle] = useState('Computer Science Major at UF')
  const [about, setAbout] = useState('Enter about me here')

  return (
    <StyledView className='flex flex-col rounded-2xl w-4/5 min-h-[75%] mt-10 px-4 bg-white'>
      <ProfileImage/>
      <StyledText className='font-bold text-2xl'>Alberta Gator, 21</StyledText>
      <StyledTextInput
        className='mb-6 bg-gray-100 rounded-lg py-1 px-1'
        value={subtitle}
        onChangeText={text => setSubtitle(text)}
      />
      <StyledText className='font-bold text-amber-400 text-xl'>About me...</StyledText>
      <StyledTextInput
        className='mb-6 bg-gray-100 rounded-lg py-1 px-1'
        value={about}
        onChangeText={text => setAbout(text)}
      />
      <StyledText className='font-bold text-amber-400 text-xl'>I want to eat...</StyledText>
      <StyledText className='mb-8 text-neutral-400'>some text</StyledText>
      <StyledText className='font-bold text-amber-400 text-xl'>My price range...</StyledText>
      <StyledView className='flex flex-row justify-between'>
        <StyledText className='mb-8 text-neutral-400'>$0</StyledText>
        <StyledText className='mb-8 text-neutral-400'>$100</StyledText>
      </StyledView>
      <StyledText className='font-bold text-amber-400 text-xl'>I'm available from...</StyledText>
      <StyledText className='mb-8 text-neutral-400'>some text</StyledText>
    </StyledView>
  );
}

function Profile({navigation}: any) {
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
        </StyledView>

        <Card />
    </StyledGradient>
  );
}

export { Profile };
