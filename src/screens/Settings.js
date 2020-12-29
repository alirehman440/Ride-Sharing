import React from "react";
import { StyleSheet, Text, Image, View, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import EditTextField from "../component/EditTextField";

import { SafeAreaInsetsContext } from "react-native-safe-area-context";

const dim = Dimensions.get("window");
const heightD = dim.width / 3;
const widthD = dim.width / 2.5;
const widthF = dim.width;
const heightF = dim.height;
const textColor = "#707070";
const borderColor = "#D4D4D4";
const buttonColor = "#1E90FF";

const Settings = () => {
  return (
    <View>
      <View style={styles.topNav}>
        <TouchableOpacity style={styles.imageDrawe}>
          <Image
            style={styles.imageDrawer}
            source={require("../../assets/back_arrow.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View>
          <Image
            source={require("../../assets/logo.png")}
            style={{
              width: widthD,
              height: heightD,
              resizeMode: "contain",
            }}
          />
        </View>
        <Text style={{ color: textColor, marginTop: 20 }}>
          Select Your Gender
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.circleBorder}>
            <Image
              source={require("../../assets/man.png")}
              style={styles.genderLogo}
            />
          </View>
          <View style={styles.circleBorder}>
            <Image
              source={require("../../assets/woman.png")}
              style={styles.genderLogo}
            />
          </View>
        </View>

        <View style={{ marginTop: 15 }}>
          <EditTextField title={"Full Name"} img={"1"} />
          <EditTextField title={"Your City"} img={"2"} />
          <EditTextField title={"Occupation"} img={"3"} />
          <EditTextField title={"Date of Birth"} img={"4"} />

          <View
            style={{
              marginTop: 10,
              backgroundColor: buttonColor,
              borderRadius: 8,
              justifyContent: "center",
              height: 40,
            }}
          >
            <Text style={{ color: "#FFF", alignSelf: "center" }}>Continue</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topNav: {
    height: 100,
    paddingTop: 65,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    elevation: 5,
  },
  imageDrawer: {
    width: 30,
    height: 30,
    marginStart: 5,
    resizeMode: "contain",
  },

  genderLogo: {
    width: 30,
    height: 35,
    resizeMode: "contain",
  },
  circleBorder: {
    borderRadius: 35,
    width: 70,
    height: 70,
    margin: 5,
    backgroundColor: "transparent",
    borderColor: borderColor,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
    backgroundColor: "#FFF",
    width: widthF,
    height: heightF,
  },

  editTextBox: {
    width: 250,
    height: 50,
    borderRadius: 8,
    borderColor: borderColor,
    borderWidth: 1,
  },
});

export default Settings;
