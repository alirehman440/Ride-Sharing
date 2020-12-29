import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { TextInput } from "react-native-paper";

const textColor = "#707070";
const borderColor = "#D4D4D4";
const white = "#FFFFFF";
const imag1 = require("../../assets/user.png");
const imag2 = require("../../assets/pin.png");
const imag3 = require("../../assets/employee.png");
const imag4 = require("../../assets/calendar.png");
const imag5 = require("../../assets/user.png");
let imag = "a";

const EditTextField = (props) => {
  const [text, setText] = React.useState("");
  if (props.img == 1) {
    imag = imag1;
  } else if (props.img == 2) {
    imag = imag2;
  } else if (props.img == 3) {
    imag = imag3;
  } else if (props.img == 4) {
    imag = imag4;
  }
  return (
    <View style={styles.container}>
      <View style={styles.sectionStyle}>
        <Image source={imag} style={styles.imageStyle} />

        <View
          style={{
            height: 18,
            marginTop: -9,
            marginLeft: 25,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: textColor,
              position: "absolute",
              fontSize: 9,
              marginRight: 9,
              alignSelf: "center",
              padding: 5,
              backgroundColor: "#FFF",
            }}
          >
            {props.title}
          </Text>
        </View>
        <TextInput
          style={{ width: 200, height: 50, marginTop: -9, marginLeft: -25 }}
          label="Full Name"
          value={text}
          mode="outlined"
          underlineColorAndroid="transparent"
          onChangeText={(text) => setText(text)}
          theme={{
            colors: {
              placeholder: "transparent",
              text: textColor,
              primary: "transparent",
              underlineColor: "transparent",
              unlineColorAndroid: "transparent",
              background: "transparent",
            },
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: 250,
    height: 50,
    marginTop: 10,
  },
  sectionStyle: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: borderColor,
    height: 50,
    borderRadius: 5,
    width: 250,
  },
  customStyle: {
    borderColor: textColor,
  },
  imageStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    margin: 10,
    height: 25,
    width: 20,
    resizeMode: "contain",
    alignItems: "flex-start",

    alignSelf: "center",
  },
});

export default EditTextField;
