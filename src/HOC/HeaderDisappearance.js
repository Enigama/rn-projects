import React, {useRef, useState, useEffect} from "react";
import {Animated, View, StyleSheet, SafeAreaView, Text, StatusBar} from "react-native";
import Header from "../components/Header";

const headerHeight = 50;

const HeaderDisappearance = (props) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampTranslate = Animated.diffClamp(scrollY, 0, headerHeight);
  const translateY = diffClampTranslate.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
    extrapolate: 'clamp'
  })


  return (
    <SafeAreaView>
      <View>
        <Animated.View style={{
          transform: [{translateY}],
          position: 'absolute',
          left: 0,
          right: 0,
          zIndex: 10
        }}>
          <Header/>
        </Animated.View>
        <Animated.ScrollView bounces={false}
                             throttle={1}
                             onScroll={Animated.event([
                                 {
                                   nativeEvent: {contentOffset: {y: scrollY}}
                                 }
                               ],
                               {useNativeDriver: true}
                             )}
                             contentContainerStyle={{paddingTop: headerHeight}}
                             refreshControl={false}
        >
          {props.children}
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default HeaderDisappearance;
