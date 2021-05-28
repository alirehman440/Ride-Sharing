import * as React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Card } from "react-native-paper";

const SearchRide = () => {
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
            borderWidth: 1.5,
            borderColor: "#EFEFEF",
            flexDirection: "row",
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

            <Text style={{ color: "#D4D4D4", marginTop: 7, marginStart: 5 }}>
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
                color: "#707070",
                textAlign: "center",
                fontSize: 16,
                marginStart: 5,
                marginTop: 12,
              }}
            >
              Destination
            </Text>
            <Text style={{ color: "#D4D4D4", marginTop: 7, marginStart: 5 }}>
              Select Your Location
            </Text>
          </View>
        </View>

        <Text style={{ marginStart: 30, marginTop: 15, color: "#707070" }}>
          Select Date
        </Text>
        <View
          style={{
            marginTop: 3,
            backgroundColor: "#FFF",
            height: 55,
            width: 300,
            alignSelf: "center",
            borderRadius: 8,
            borderWidth: 1.5,
            borderColor: "#EFEFEF",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "#D4D4D4",
              textAlign: "center",
              alignContent: "center",
              alignSelf: "center",
              marginStart: 6,
            }}
          >
            31/01/2020
          </Text>
          <View
            style={{
              flex: 1,

              height: 45,
              width: 45,
              alignSelf: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#F6F6F6",
                height: 45,
                width: 45,
                borderRadius: 6,
                marginEnd: 5,
                justifyContent: "center",
                alignSelf: "flex-end",
              }}
            >
              <TouchableOpacity
                onPress={() => (
                  <DatePicker
                    style={{ width: 200 }}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2016-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: "absolute",
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                      },
                      dateInput: {
                        marginLeft: 36,
                      },
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {
                      this.setState({ date: date });
                    }}
                  />
                )}
              >
                <Image
                  source={require("../../assets/calender.png")}
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: "contain",
                    alignContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={{ marginStart: 30, marginTop: 15, color: "#707070" }}>
          How many seats you want?
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View style={styles.seatBox}>
            <Text
              style={{
                color: "#B7B7B7",

                alignSelf: "center",
              }}
            >
              1 Seat
            </Text>
          </View>
          <View style={styles.seatBox}>
            <Text
              style={{
                color: "#B7B7B7",

                alignSelf: "center",
              }}
            >
              2 Seat
            </Text>
          </View>
          <View style={styles.seatBox}>
            <Text
              style={{
                color: "#B7B7B7",

                alignSelf: "center",
              }}
            >
              3 Seat
            </Text>
          </View>
          <View style={styles.seatBox}>
            <Text
              style={{
                color: "#B7B7B7",

                alignSelf: "center",
              }}
            >
              4 Seat
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#1E90FF",
            color: "#FFF",
            width: 250,
            height: 50,
            marginTop: 18,
            alignItems: "center",
            alignSelf: "center",
            borderRadius: 8,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontStyle: "normal",
              fontSize: 16,
            }}
          >
            Search
          </Text>
        </View>
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
export default SearchRide;
