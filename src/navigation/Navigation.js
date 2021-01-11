import React from "react";

import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import HeaderDisappearance from "../HOC/HeaderDisappearance";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"
                      options={() => ({
                        headerShown: false,
                      })}
        >
          {() => <HeaderDisappearance>
            <HomeScreen />
          </HeaderDisappearance>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
