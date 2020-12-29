import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

import DialogScreen from "./src/screens/DilaogScreen";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        shifting={false}
        sceneAnimationEnabled={false}
        barStyle={{ backgroundColor: "#fff" }}
        activeColor="#1E90FF"
        inactiveColor="#707070"
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, tintColor }) => (
              <Image
                style={styles.image}
                focused={focused}
                source={
                  focused
                    ? require("./assets/house_blue.png")
                    : require("./assets/house_grey.png")
                }
                tintColor={tintColor}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ActiveRide"
          component={DialogScreen}
          options={{
            tabBarIcon: ({ focused, tintColor }) => (
              <Image
                style={styles.image}
                focused={focused}
                source={
                  focused
                    ? require("./assets/stearing_blue.png")
                    : require("./assets/stearing_grey.png")
                }
                tintColor={tintColor}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused, tintColor }) => (
              <Image
                style={styles.image}
                focused={focused}
                source={
                  focused
                    ? require("./assets/profile_blue.png")
                    : require("./assets/profile_grey.png")
                }
                tintColor={tintColor}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
});
