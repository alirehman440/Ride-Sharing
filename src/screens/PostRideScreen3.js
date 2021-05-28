import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import Constants from "../component/Constants";
const bottomButton = Dimensions.get("window").height - 200;
const PostRideScreen3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View
          style={{
            backgroundColor: "#FFF",
            height: 140,
            width: 300,
            alignSelf: "center",
            borderRadius: 8,

            flexDirection: "row",
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        >
          <View
            style={{
              margin: 15,
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.circleOrange} />
            <View
              style={{
                height: 40,
                width: 1.5,
                backgroundColor: "#707070",
                marginTop: 5,
                marginBottom: 5,
              }}
            />
            <View style={styles.circleBlue} />
            <Image
              source={require("../../assets/location_blue.png")}
              style={{ width: 15, height: 18, marginTop: 7 }}
            />
          </View>

          <View style={{ marginTop: 15, alignItems: "flex-start" }}>
            <Text style={styles.dotHeader}>Current Location</Text>

            <Text
              style={{
                color: Constants.lightTextColor,
                marginTop: 7,
                marginStart: 5,
              }}
            >
              Select Your Location
            </Text>
            <View
              style={{
                height: 1.5,
                width: 220,
                backgroundColor: "#D4D4D4",
                marginTop: 1,
              }}
            />
            <Text
              style={{
                color: Constants.lightTextColor,
                textAlign: "center",
                fontSize: 16,
                marginStart: 5,
                marginTop: 12,
              }}
            >
              Destination
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 7,
                marginStart: 5,
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: Constants.textColor,
                  flex: 1,
                }}
              >
                Abbottabad
              </Text>

              <View
                style={{
                  justifyContent: "center",
                  borderRadius: 4,
                  borderColor: Constants.lineColor,
                  borderWidth: 1,
                  paddingLeft: 4,
                  paddingRight: 4,
                  paddingTop: 0,
                  paddingBottom: 0,
                  height: 23,
                }}
              >
                <Text
                  style={{
                    color: Constants.textColor,
                    fontSize: 11,
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  Add Stop
                </Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("PostRideScreen3")}
          style={{
            alignSelf: "center",
            borderRadius: 8,
            top: bottomButton,
            alignItems: "center",
            alignContent: "center",
            position: "absolute",
          }}
        >
          <View
            style={{
              backgroundColor: Constants.buttonBlue,
              color: "#FFF",
              width: 300,
              height: 47,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontStyle: "normal",
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
                alignSelf: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              Post A Ride
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FAFF",
  },
  innerContainer: {
    marginTop: 15,
    alignContent: "center",
    textAlign: "center",
  },
  circleOrange: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: "#FF9000",
    alignSelf: "center",
  },
  circleBlue: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: "#1E90FF",
    alignSelf: "center",
  },

  seatBox: {
    marginTop: 3,
    backgroundColor: "#FFF",
    height: 40,
    width: 65,
    alignSelf: "center",
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#EFEFEF",
    color: "#707070",
    marginRight: 6,
    justifyContent: "center",
  },
  dotHeader: {
    color: "#707070",
    textAlign: "center",
    fontSize: 16,
    marginStart: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    color: "#707070",
  },
  imageDrawer: {
    width: 30,
    height: 30,
    marginStart: 5,
    resizeMode: "contain",
  },
  imageNoti: {
    width: 30,
    height: 25,
    resizeMode: "contain",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },

  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderWidth: 1,
    borderColor: "#FFF",
    marginStart: 10,
  },
  rowItems: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    alignSelf: "center",
    backgroundColor: "#F5FAFF",
  },
  topNav: {
    height: 100,
    paddingTop: 65,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
  },
});

export default PostRideScreen3;
