import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Image, View, Modal, FlatList } from "react-native";
import { set } from "react-native-reanimated";
import { PostApi } from "../component/ApiCalls";
import Constants from "../component/Constants";
import RideHistoryCardView from "../component/RideHistoryCardView";
import Server_Urls from "../component/Server_Urls";

const RideHistory = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const once = false;
  const [response, setresponse] = useState();
  const [responsePurchased, setresponsePurchased] = useState();
  const [tab1, settab1] = useState(true);
  useEffect(() => {
    const params = {
      phone_no: "1234567",
    };
    PostApi(Server_Urls.GET_RIDE_HISTORY, params).then((response1) => {
      console.log(
        "PostApi ",
        //  response1.postedrides[0].stops_detail[0].stop_name[0]
        response1.postedrides
      );
      setLoading(false);
      setresponse(response1.postedrides);
      setresponsePurchased(response1.purchasedrides);
      //console.log("PostApi2 ", response1.postedrides);
    });
  }, [once]);

  return (
    <View
      style={{
        backgroundColor: Constants.backGroundLightBlue,
        flex: 1,
      }}
    >
      <Modal animationType="fade" transparent={true} visible={isLoading}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={styles.modalImage}
              source={require("../../assets/profile_complete_alert.png")}
            />
            <Text
              style={{
                marginBottom: 5,
                textAlign: "center",
                color: "#707070",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Loading...
            </Text>
          </View>
        </View>
      </Modal>

      <View style={{ margin: 10 }}>
        <View style={styles.Tabs}>
          <View
            style={{
              flexDirection: "column",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: Constants.textColor,
                fontSize: 16,
                fontWeight: tab1 ? "bold" : "normal",
              }}
              onPress={() => settab1(true)}
            >
              Posted Rides
            </Text>
            {tab1 && (
              <View
                style={{
                  width: 140,
                  height: 2,
                  backgroundColor: Constants.textColorOrange,
                }}
              />
            )}
          </View>
          <View
            style={{
              height: 21,
              width: 1,
              backgroundColor: Constants.lineColor,
            }}
          />
          <View
            style={{
              flexDirection: "column",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: Constants.textColor,
                fontSize: 16,
                fontWeight: tab1 ? "normal" : "bold",
                textDecorationStyle: "dotted",
                textDecorationColor: Constants.textColorOrange,
              }}
              onPress={() => settab1(false)}
            >
              Purchased Rides
            </Text>
            {!tab1 && (
              <View
                style={{
                  width: 140,
                  height: 2,
                  backgroundColor: Constants.textColorOrange,
                }}
              />
            )}
          </View>
        </View>
        {tab1 && (
          <FlatList
            data={response}
            renderItem={({ item, index }) => (
              <RideHistoryCardView
                rideType={true}
                time={item.date}
                price="3000"
                place={item.stops_detail.map((v, i) => {
                  if (v.type == "origin") {
                    return v.stop_name + "-";
                  } else if (v.type == "destination") {
                    return v.stop_name;
                  }
                })}
                no_of_seats={item.no_of_seats}
                car={
                  item.vehicle_detail.color +
                  " " +
                  item.vehicle_detail.model +
                  " " +
                  item.vehicle_detail.year
                }
              />
            )}
            keyExtractor={(item) => item._id}
          />
        )}
        {!tab1 && (
          <FlatList
            data={responsePurchased}
            renderItem={({ item, index }) => (
              <RideHistoryCardView
                rideType={false}
                time={item.ride_detail.date}
                price={item.stop_price}
                place={item.stop_name + "-" + item.passenger_detail.city}
                no_of_seats={item.ride_detail.no_of_seats}
                car={
                  item.vehicle_detail.color +
                  " " +
                  item.vehicle_detail.model +
                  " " +
                  item.vehicle_detail.year
                }
              />
            )}
            keyExtractor={(item) => item._id}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Tabs: {
    backgroundColor: Constants.whiteColor,
    height: 65,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
    marginTop: 10,
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

  drawerIcon: {
    width: 30,
    height: 30,
  },
});

export default RideHistory;
