import React from "react";
import { Animated, View, StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/Header";

const HeaderDisappearance = (props) => {
  return(
    <SafeAreaView>
      <View>
        <Animated.View>
          <Header />
        </Animated.View>

        <Animated.ScrollView>
          {props.children}
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default HeaderDisappearance;
