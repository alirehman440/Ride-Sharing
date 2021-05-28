import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Alert,
  Modal,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

import HomeScreenCards from "../component/HomeScreenCards";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "../component/Constants";

import { PostApi } from "../component/ApiCalls";
import Server_Urls from "../component/Server_Urls";
import Settings from "./Settings";
import { createStackNavigator } from "@react-navigation/stack";

const Drawer = createDrawerNavigator();
const HelpStack = createStackNavigator();
const onPost = () => {};
const LOGIN_CHECK = "user_login_status";

const DrawerContent = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const once = false;
  const two = false;
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
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

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => Alert.alert("Dialog closed")}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={{
                  alignItems: "flex-end",
                  alignSelf: "flex-end",
                }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("SearchRide");
                }}
              >
                <Image
                  source={require("../../assets/cross.png")}
                  style={{ width: 15, height: 15 }}
                />
              </TouchableOpacity>

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
                Complete Your Profile To Continue..
              </Text>

              <Text
                style={{
                  marginBottom: 5,
                  textAlign: "center",
                  color: "#666666",
                }}
              >
                You need to complete your profile first to find the companion
                you are searching for ride.
              </Text>

              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: "#1E90FF" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("Profile", {
                    screen: "Update Profile",
                  });
                }}
              >
                <Text style={styles.textStyle}>Complete Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* onPress={() => HomeScreenApi()} */}

        <View style={styles.rowItems}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <HomeScreenCards
              title1={"Search"}
              desc1={"Don't wait for the ride"}
              desc2={"Search out now"}
              img={true}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.push("PostRide")}>
            <HomeScreenCards
              title1={"Post"}
              desc1={"Don't travel alone"}
              desc2={" Post for the companion"}
              img={false}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const CustomDrawerContent = (props) => {
  const { state, ...rest } = props;
  const newState = { ...state };
  // newState.routes = newState.routes.filter(
  //   (item) => !["Drawer", "Search"].includes(item.name)
  // );

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: Constants.buttonBlue,
          height: 140,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Image
          source={require("../../assets/help.png")}
          style={styles.profileImage}
        />
        <View
          style={{
            flexDirection: "column",
            flex: 1,
            alignContent: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              marginStart: 4,
            }}
          >
            Ali Rehman
          </Text>

          <Text
            style={{
              color: "white",
              fontSize: 12,
              marginStart: 5,
            }}
          >
            Lives in Abbottabad
          </Text>
        </View>
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList state={newState} {...rest} />
      </DrawerContentScrollView>
    </View>
  );
};

const componentDidMount = async () => {
  var params = {
    phone_no: "12345679",
    vehicle_id: "5fe1daadb9597b3ee8400a58",
  };

  var formBody = [];
  for (var property in params) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(params[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  fetch("https://bidnow.maticstoday.com/ride/get_single_vehicle", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: formBody,
  })
    .then((response) => response.json())
    .then((my_vehicle) => {
      console.log(
        "POST Response",
        "Response Body -> " + JSON.stringify(my_vehicle)
      );
    });
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem(LOGIN_CHECK);
    if (value != null) {
      console.log("value is there" + value);
      setData = true;
      return value;
    } else {
      console.log("value is null");
      setData = false;
      return null;
    }
  } catch (e) {
    // error reading value
  }
};

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(true);
  const once = false;
  const two = false;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Image
          source={require("../../assets/notification.png")}
          style={{
            resizeMode: "contain",
            width: 20,
            marginRight: 20,
          }}
        />
      ),
      headerLeft: () => (
        <Image
          source={require("../../assets/menu.png")}
          style={{
            resizeMode: "contain",
            width: 25,
            marginLeft: 20,
          }}
        />
      ),
    });
  });

  //storeData("03125160047");
  getData();
  // HomeScreenApi();
  useEffect(() => {
    const params = {
      phone_no: "12345679",
      vehicle_id: "5fe1daadb9597b3ee8400a58",
    };
    PostApi(Server_Urls.GET_SINGLE_VEHICLE, params).then((response) => {
      console.log("PostApi ", response);
      setLoading(false);
    });
  }, [once]);

  console.log("loopingkkkkk" + isLoading);

  // useEffect(() => console.log("Data  " + data));

  // removeData();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        {/*  for going to loginscreen */}
        <Modal animationType="fade" transparent={true} visible={data}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                style={styles.modalImage}
                source={require("../../assets/profile_complete_alert.png")}
              />
              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: "#1E90FF" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  // navigation.navigate("Profile", {
                  //   screen: "Update Profile",
                  // });

                  navigation.navigate("HomeScreenwithTopBar", {
                    screen: "Login Screen",
                  });
                }}
              >
                <Text
                  style={{
                    marginBottom: 5,
                    textAlign: "center",
                    color: "#707070",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Login First
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

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

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => Alert.alert("Dialog closed")}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={{
                  alignItems: "flex-end",
                  alignSelf: "flex-end",
                }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("SearchRide");
                }}
              >
                <Image
                  source={require("../../assets/cross.png")}
                  style={{ width: 15, height: 15 }}
                />
              </TouchableOpacity>

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
                Complete Your Profile To Continue..
              </Text>

              <Text
                style={{
                  marginBottom: 5,
                  textAlign: "center",
                  color: "#666666",
                }}
              >
                You need to complete your profile first to find the companion
                you are searching for ride.
              </Text>

              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: "#1E90FF" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("Profile", {
                    screen: "Update Profile",
                  });
                }}
              >
                <Text style={styles.textStyle}>Complete Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* onPress={() => HomeScreenApi()} */}

        <View style={styles.rowItems}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <HomeScreenCards
              title1={"Search"}
              desc1={"Don't wait for the ride"}
              desc2={"Search out now"}
              img={true}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.push("PostRide")}>
            <HomeScreenCards
              title1={"Post"}
              desc1={"Don't travel alone"}
              desc2={" Post for the companion"}
              img={false}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>

    // <Drawer.Navigator
    //   overlayColor="transparent"
    //   drawerContent={(props) => <CustomDrawerContent {...props} />}
    // >
    //   <Drawer.Screen name="Home" component={DrawerContent} />
    //   <Drawer.Screen
    //     name="Ride History"
    //     component={RideHistory}
    //     options={{
    //       drawerIcon: ({ tintColor }) => (
    //         <Image
    //           source={require("../../assets/copy.png")}
    //           style={styles.drawerIcon}
    //         />
    //       ),
    //     }}
    //   />
    //   <Drawer.Screen
    //     name="My Vechiles"
    //     component={Vechiles}
    //     options={{
    //       drawerIcon: ({ tintColor }) => (
    //         <Image
    //           source={require("../../assets/car.png")}
    //           style={styles.drawerIcon}
    //         />
    //       ),
    //     }}
    //   />
    //   <Drawer.Screen
    //     name="Settings"
    //     component={Settings}
    //     options={{
    //       drawerIcon: ({ tintColor }) => (
    //         <Image
    //           source={require("../../assets/settings.png")}
    //           style={styles.drawerIcon}
    //         />
    //       ),
    //     }}
    //   />

    //   <Drawer.Screen
    //     name="Help"
    //     component={Help}
    //     options={{
    //       drawerIcon: ({ tintColor }) => (
    //         <Image
    //           source={require("../../assets/help.png")}
    //           style={styles.drawerIcon}
    //         />
    //       ),
    //     }}
    //   />

    //   <Drawer.Screen
    //     name="Logout"
    //     component={LogoutScreen}
    //     options={{
    //       drawerIcon: ({ tintColor }) => (
    //         <Image
    //           source={require("../../assets/log_out.png")}
    //           style={styles.drawerIcon}
    //         />
    //       ),
    //     }}
    //     a
    //   />
    // </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 2,
    textAlign: "center",
    alignItems: "flex-start",
  },
  imageDrawer: {
    width: 30,
    height: 20,
    resizeMode: "contain",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
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

export default HomeScreen;
