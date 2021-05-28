import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import Constants from "./Constants";
import Server_Urls from "./Server_Urls";

const dim = Dimensions.get("window");
const heightD = Math.round(dim.width / 4);
const widthD = dim.width / 2;
const widthF = dim.width;
const white = "#FFF";
const light_blue = "#F5FAFF";
const img1 = "../../assets/more.png";

const car = "../../assets/cab.png";

const VehicleCardView = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 0.8,
            justifyContent: "center",
          }}
        >
          <View style={styles.grayOutlineCircle}>
            <View style={styles.lightBlueOutlineCircle}>
              <Image
                source={require(car)}
                style={{
                  alignSelf: "center",
                  resizeMode: "contain",
                  height: 30,
                }}
              />
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "column", flex: 2.2 }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 17,
                color: Constants.textColorOrange,
                fontWeight: "bold",
                flex: 1,
              }}
            >
              Corolla Car
            </Text>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Image
                source={require(img1)}
                style={{
                  height: 15,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: Constants.lineColor,
              height: 1,
              marginTop: 3,
              marginBottom: 5,
            }}
          />

          <Text
            style={{
              fontSize: 14,
              color: Constants.textColor,
              textAlign: "left",
            }}
          >
            Vehicle Type
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: Constants.textColor,
              textAlign: "left",
              marginTop: 5,
            }}
          >
            Plate No AWR-899
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "#FFF",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    padding: 10,
    marginTop: 8,
  },
  grayOutlineCircle: {
    width: 64,
    height: 64,
    borderRadius: 60,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderColor: Constants.lineColor,
  },

  lightBlueOutlineCircle: {
    width: 62,
    height: 62,
    borderRadius: 60,
    justifyContent: "center",
    backgroundColor: Constants.backGroundLightBlue,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 14,
    textAlign: "center",
  },

  modalImage: {
    width: 130,
    height: 80,
    marginBottom: 15,
    resizeMode: "contain",
  },
});

export default VehicleCardView;
