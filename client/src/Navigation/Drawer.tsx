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
import { styled } from "nativewind";

const win = Dimensions.get('window')

const StyledView = styled(SafeAreaView)
const StyledTouchableOpacity = styled(TouchableOpacity)
const StyledText = styled(Text)
const StyledImage = styled(Image)

const DrawerStyle = (props: any) => {
    return (
        //not sure how to calculate margin using [StatusBar.currentHeight * 2]
        <StyledView className="flex-1 mt-20">
            <StyledView className="mx-3">
                <StyledImage source={require("../../assets/avatar.png")} className='w-20 h-20'/>
                <StyledView className="pt-3"/>
                <StyledText className="font-bold text-2xl">Albert Gator</StyledText>
                <StyledText className="text-neutral-400">albert.gator@ufl.edu</StyledText>
                <StyledView className="mt-4 border-b-neutral-300 border-b"/>
            </StyledView>
            <DrawerContentScrollView {...props}
            //fix this
            contentContainerStyle={{marginTop: -25}}
            >
                <StyledView className="flex">
                    <DrawerItemList {...props} />
                </StyledView>
            </DrawerContentScrollView>
            <StyledView>
                <StyledTouchableOpacity
                onPress={() => props.navigation.navigate("AuthScreen")}
                className="rounded-2xl py-3 px-4 self-center bg-yellow-500"
                >
                    <StyledText className="font-bold text-lg">Log Out</StyledText>
                </StyledTouchableOpacity>
            </StyledView>
            <StyledView className="p-4"/>
        </StyledView>
    )
}

export default DrawerStyle;