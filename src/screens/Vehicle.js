import React from "react";
import { StyleSheet, Text, Image, View, Button } from "react-native";
import Constants from "../component/Constants";
import VehicleCardView from "../component/VehicleCardView";

const Vehicle = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: Constants.backGroundLightBlue }}>
      <View style={{ margin: 10 }}>
        <VehicleCardView />
        <VehicleCardView />
        <VehicleCardView />
        <VehicleCardView />
        <VehicleCardView />
        <VehicleCardView />
        <VehicleCardView />
        <VehicleCardView />
      </View>
      <View
        style={{
          backgroundColor: Constants.buttonBlue,
          width: 50,
          height: 50,
          borderRadius: 25,
          elevation: 18,
          position: "absolute",
          bottom: 10,
          right: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.4,
          shadowRadius: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 2,
            width: 25,
            backgroundColor: Constants.whiteColor,
            position: "absolute",
          }}
        />
        <View
          style={{
            height: 25,
            width: 2,
            backgroundColor: Constants.whiteColor,
            position: "absolute",
          }}
        />
      </View>
    </View>
  );
};

export default Vehicle;
