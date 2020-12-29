import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Alert,
  Modal,
  TouchableOpacity,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreenCards from "../component/HomeScreenCards";
import SearchRide from "./SearchRide";
import ActiveRideScreen from "./ActiveRidesScreen";
import Icon from "react-native-ionicons";

import { Ionicons } from "@expo/vector-icons";
import Settings from "./Settings";
import Constants from "../component/Constants";
const light_blue = "#F5FAFF";
const Drawer = createDrawerNavigator();
const onPost = () => {};

const RideHistory = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>RideHistory Screen</Text>
      <Text>RideHistory Screen</Text>
      <Text>RideHistory Screen</Text>
      <Text>Notifications Screen</Text>
    </View>
  );
};

const Payments = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Payments Screen</Text>
      <Text>Payments Screen</Text>
      <Text>Payments Screen</Text>
      <Text>Payments Screen</Text>
    </View>
  );
};

const Help = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Help Screen</Text>
      <Text>Help Screen</Text>
      <Text>Help Screen</Text>
      <Text>Help Screen</Text>
    </View>
  );
};

const Vechiles = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Vechiles Screen</Text>
      <Text>Vechiles Screen</Text>
      <Text>Vechiles Screen</Text>
      <Text>Vechiles Screen</Text>
    </View>
  );
};

const LogoutScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Logout Screen</Text>
      <Text>Logout Screen</Text>
      <Text>Logout Screen</Text>
      <Text>Logout Screen</Text>
    </View>
  );
};

const DrawerContent = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <TouchableOpacity
          style={styles.imageDrawer}
          onPress={() => navigation.openDrawer()}
        >
          <Image
            style={styles.imageDrawer}
            source={require("../../assets/menu.png")}
          />
        </TouchableOpacity>
        <Text style={styles.title}>HomeScreen</Text>
        <Image
          style={styles.imageNoti}
          source={require("../../assets/notification.png")}
        />
      </View>

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
              You need to complete your profile first to find the companion you
              are searching for ride.
            </Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#1E90FF" }}
              onPress={() => {
                setModalVisible(!modalVisible);
                navigation.navigate("Search");
              }}
            >
              <Text style={styles.textStyle}>Complete Profile</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <View style={styles.rowItems}>
        <TouchableHighlight onPress={() => setModalVisible(true)}>
          <HomeScreenCards
            title1={"Search"}
            desc1={"Don't wait for the ride"}
            desc2={"Search out now"}
            img={true}
          />
        </TouchableHighlight>

        <TouchableHighlight onPress={onPost}>
          <HomeScreenCards
            title1={"Post"}
            desc1={"Don't travel alone"}
            desc2={" Post for the companion"}
            img={false}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const CustomDrawerContent = (props) => {
  const { state, ...rest } = props;
  const newState = { ...state }; //copy from state before applying any filter. do not change original state
  newState.routes = newState.routes.filter(
    (item) => !["Drawer", "Search"].includes(item.name)
  ); //replace "Login' with your route name

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

const HomeScreen = () => {
  return (
    <Drawer.Navigator
      overlayColor="transparent"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Drawer" component={DrawerContent} />
      <Drawer.Screen
        name="Ride History"
        component={RideHistory}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require("../../assets/copy.png")}
              style={styles.drawerIcon}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="My Vechiles"
        component={Vechiles}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require("../../assets/car.png")}
              style={styles.drawerIcon}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Payments"
        component={Payments}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require("../../assets/credit_card.png")}
              style={styles.drawerIcon}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require("../../assets/settings.png")}
              style={styles.drawerIcon}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Help"
        component={Help}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require("../../assets/help.png")}
              style={styles.drawerIcon}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require("../../assets/log_out.png")}
              style={styles.drawerIcon}
            />
          ),
        }}
      />
      <Drawer.Screen name="Search" component={SearchRide} />
    </Drawer.Navigator>
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
