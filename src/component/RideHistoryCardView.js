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
const img1 = "../../assets/arrow_down.png";
const img2 = "../../assets/arrow_up.png";
const img3 = "../../assets/bank.png";
const car = "../../assets/cab.png";

const RideHistoryCardView = (props) => {
  return (
    <View>
      <View style={{ marginTop: 8 }}>
        <Text style={{ color: Constants.textColor }}>{props.time}</Text>
      </View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flex: 0.7,
              justifyContent: "center",
            }}
          >
            <View style={styles.grayOutlineCircle}>
              <View style={styles.lightBlueOutlineCircle}>
                <Image
                  source={props.rideType ? require(car) : require(img3)}
                  style={{
                    alignSelf: "center",
                    resizeMode: "contain",
                    height: 30,
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "column", flex: 2.3 }}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 17,
                  color: Constants.textColorOrange,
                  fontWeight: "bold",
                  flex: 1,
                }}
              >
                {props.car}
              </Text>

              <View style={{ flex: 1, flexDirection: "row" }}>
                <Image
                  source={props.rideType ? require(img2) : require(img1)}
                  style={{
                    height: 20,
                    resizeMode: "contain",
                  }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    color: Constants.textColor,
                    textAlign: "right",
                    fontWeight: "bold",
                  }}
                >
                  Rs. {props.price}/-
                </Text>
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

            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../assets/chair.png")}
                style={{
                  height: 15,
                  width: 15,
                  resizeMode: "contain",
                  alignItems: "center",
                  marginRight: 3,
                  justifyContent: "flex-start",
                }}
              />
              <Text
                style={{
                  fontSize: 14,
                  color: Constants.textColor,
                  textAlign: "center",
                }}
              >
                {props.rideType ? "Posted Seats :" : "Purchased Seats :"}
                {props.no_of_seats}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/location_black.png")}
                style={{
                  height: 15,
                  width: 15,
                  resizeMode: "contain",
                  alignItems: "center",
                  marginRight: 3,
                }}
              />
              <Text
                style={{
                  fontSize: 14,
                  color: Constants.textColor,
                  textAlign: "center",
                  alignContent: "center",
                }}
              >
                {props.place}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "#FFF",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    padding: 10,
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

export default RideHistoryCardView;
