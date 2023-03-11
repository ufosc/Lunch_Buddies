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
import MultiSlider from "@ptomasroos/react-native-multi-slider"
import DateTimePicker from '@react-native-community/datetimepicker';
import MultiSelect from 'react-native-multiple-select';
import moment from 'moment';

//IMPORTS FONTS, THE COMMAND "npx expo install expo-font @expo-google-fonts/jost" SHOULD BE RUN LOCALLy BEFORE
import {
  useFonts,
  Jost_400Regular,
  Jost_500Medium,
  Jost_700Bold,
} from "@expo-google-fonts/jost";

const StyledGradient = styled(LinearGradient)
const StyledView = styled(SafeAreaView)
const StyledTouchableOpacity = styled(TouchableOpacity)
const StyledText = styled(Text)

interface TimeProps {
  time: Date,
  setTime: React.Dispatch<React.SetStateAction<Date>>,
  showTime: boolean,
  setShowTime: React.Dispatch<React.SetStateAction<boolean>>
}

function TimePicker({ time, setTime, showTime, setShowTime }: TimeProps) {
  return (
    <>
      <StyledTouchableOpacity className='bg-yellow-500 rounded-lg p-3 w-2/5'
        onPress={() => setShowTime(true)}>
        <StyledText className='text-center text-base'>{moment(time).format('LT')}</StyledText>
      </StyledTouchableOpacity>
      {showTime && (
        <DateTimePicker
          mode="time"
          value={time}
          onChange={(event, date) => {
            setShowTime(false);
            setTime(date!);
          }} />
      )}
    </>
  )
}

function Toggle({ navigation }: any) {

  const [priceRange, setPriceRange] = useState([1, 50]);
  const [minTime, setMinTime] = useState(new Date());
  const [showMinTime, setShowMinTime] = useState(false);
  const [maxTime, setMaxTime] = useState(new Date());
  const [showMaxTime, setShowMaxTime] = useState(false);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  //ENSURES THAT FONTS ARE LOADED BEFORE COMPONENTS ARE RENDERED
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
    Jost_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const fakeItems = [{
    id: 1,
    name: 'Item1'
  }, {
    id: 2,
    name: 'Item2'
  }, {
    id: 3,
    name: 'Item3'
  }, {
    id: 4,
    name: 'Item4'
  }, {
    id: 5,
    name: 'Item5'
  },
  ]

  return (
    <>
      <StyledGradient
        className='flex flex-col justify-center items-center h-full w-full'
        colors={["#A1DDFF", "#0077E5"]}>
        <StyledView className='w-2/3'>
          <StyledText className='font-bold w-full text-3xl'>Welcome Back,{"\n"}NAME!</StyledText>
        </StyledView>
        <StyledView className='flex flex-col justify-between w-4/5 bg-white px-4 py-7 mt-5 rounded-2xl min-h-[500]'>
          <StyledView>
            <StyledText className='font-bold text-xl text-sky-400'>Today I want to eat...</StyledText>
            <MultiSelect
              items={fakeItems}
              uniqueKey="id"
              onSelectedItemsChange={(items) => setSelectedItems(items)}
              selectedItems={selectedItems}
            />
          </StyledView>
          <StyledView>
            <StyledText className='font-bold text-xl text-sky-400 mt-5'>My price range...</StyledText>
            <MultiSlider
              values={[priceRange[0]!, priceRange[1]!]}
              min={0}
              max={100}
              step={1}
              onValuesChange={values => setPriceRange(values)}
              markerStyle={{
                backgroundColor: '#ffb72d'
              }}
              trackStyle={{
                backgroundColor: '#a1ddff'
              }}
              selectedStyle={{
                backgroundColor: '#ffe298'
              }}
            />
            <StyledText>${priceRange[0]} - ${priceRange[1]}</StyledText>
          </StyledView>
          <StyledView>
            <StyledText className='font-bold text-xl text-sky-400 mt-5'>I am active from...</StyledText>
            <StyledView className='flex flex-row justify-between items-center my-2'>
              <TimePicker time={minTime} setTime={setMinTime} showTime={showMinTime} setShowTime={setShowMinTime} />
              <StyledText className='text-center'>to</StyledText>
              <TimePicker time={maxTime} setTime={setMaxTime} showTime={showMaxTime} setShowTime={setShowMaxTime} />
            </StyledView>
          </StyledView>
          <StyledTouchableOpacity
            className='bg-yellow-500 self-center rounded-lg w-3/5 mt-6 p-3'
            onPress={() => navigation.navigate("Profile")}>
            <StyledText className='font-bold text-center text-lg'>SUBMIT</StyledText>
          </StyledTouchableOpacity>
        </StyledView>
        <StyledTouchableOpacity className='bg-white rounded-lg w-3/5 mt-5 p-3'>
          <StyledText className='font-bold text-center text-lg'>Use my default settings</StyledText>
        </StyledTouchableOpacity>
      </StyledGradient>
    </>
  );
}

export { Toggle };
