import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import LoginScreen from "./src/screens/LoginScreen";

import DialogScreen from "./src/screens/DilaogScreen";
import UpdateProfile from "./src/screens/UpdateProfile";
import Constants from "./src/component/Constants";
import EditTextField from "./src/component/EditTextField";
import HomeScreenCards from "./src/component/HomeScreenCards";
import PostRide from "./src/screens/PostRide";
import Settings from "./src/screens/Settings";
import SearchRide from "./src/screens/SearchRide";
import DrawerScreen from "./src/screens/DrawerScreen";
import DilaogScreen from "./src/screens/DilaogScreen";
import ActiveRidesScreen from "./src/screens/ActiveRidesScreen";

const Tabs = createStackNavigator();
const mainStack = createStackNavigator();
const HomeStack = createMaterialBottomTabNavigator();
const ProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ActiveScreenStack = createStackNavigator();
const HomeScreenStack = createStackNavigator();
const LoginScreenStack = createStackNavigator();

const otherStack = () => {
  return (
    <LoginScreen.Navigator>
      <LoginScreen.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: "LoginScreen",
          headerTitleStyle: {
            fontWeight: "bold",
            color: Constants.textColor,
            justifyContent: "center",
            alignSelf: "center",
          },
        }}
      />
    </LoginScreen.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreenwithTopBar"
      shifting={false}
      sceneAnimationEnabled={false}
      barStyle={{ backgroundColor: "#fff" }}
      activeColor="#1E90FF"
      inactiveColor="#707070"
    >
      <HomeStack.Screen
        name="HomeScreenwithTopBar"
        component={HomeScreenwithTopBar}
        options={{
          tabBarIcon: ({ focused, tintColor }) => (
            <Image
              style={styles.image}
              focused={focused}
              source={
                focused
                  ? require("./assets/house_blue.png")
                  : require("./assets/house_grey.png")
              }
              tintColor={tintColor}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="ActiveRide"
        component={ActiveScreenStacks}
        options={{
          title: "ActiveRides Screen",
          tabBarIcon: ({ focused, tintColor }) => (
            <Image
              style={styles.image}
              focused={focused}
              source={
                focused
                  ? require("./assets/stearing_blue.png")
                  : require("./assets/stearing_grey.png")
              }
              tintColor={tintColor}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Profile"
        component={ProfileStacks}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, tintColor }) => (
            <Image
              style={styles.image}
              focused={focused}
              source={
                focused
                  ? require("./assets/profile_blue.png")
                  : require("./assets/profile_grey.png")
              }
              tintColor={tintColor}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const ActiveScreenStacks = () => {
  return (
    <ActiveScreenStack.Navigator>
      <ProfileStack.Screen
        name="ActiveRidesScreen"
        component={ActiveRidesScreen}
        options={{
          title: "ActiveRidesScreen",
          headerTitleStyle: {
            fontWeight: "bold",
            color: Constants.textColor,
            justifyContent: "center",
            alignSelf: "center",
          },
        }}
      />
    </ActiveScreenStack.Navigator>
  );
};
const ProfileStacks = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          headerTitleStyle: {
            fontWeight: "bold",
            color: Constants.textColor,
            justifyContent: "center",
            alignSelf: "center",
          },
        }}
      />
      <ProfileStack.Screen
        name="Update Profile"
        component={UpdateProfile}
        options={{
          headerTitleStyle: {
            fontWeight: "bold",
            color: Constants.textColor,
            justifyContent: "center",
            alignSelf: "center",
          },
        }}
      />
      <ProfileStack.Screen name="PostRide" component={PostRide} />
    </ProfileStack.Navigator>
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
            source={require("./assets/menu.png")}
          />
        </TouchableOpacity>
        <Text style={styles.title}>HomeScreen</Text>
        <Image
          style={styles.imageNoti}
          source={require("./assets/notification.png")}
        />
      </View>
    </View>
  );
};
const CustomDrawerContent = (props) => {
  const { state, ...rest } = props;
  const newState = { ...state };
  newState.routes = newState.routes.filter(
    (item) => !["Drawer", "Search"].includes(item.name)
  );

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
          source={require("./assets/help.png")}
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

const HomeScreenwithTopBar = () => {
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home Screen",
          headerTitleStyle: {
            fontWeight: "bold",
            color: Constants.textColor,
            justifyContent: "center",
            alignSelf: "center",
          },
        }}
      />

      <HomeScreenStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "Login Screen",
          headerTitleStyle: {
            fontWeight: "bold",
            color: Constants.textColor,
            justifyContent: "center",
            alignSelf: "center",
          },
        }}
      />
    </HomeScreenStack.Navigator>
  );
};

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

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        overlayColor="transparent"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
        <Drawer.Screen
          name="Ride History"
          component={RideHistory}
          options={{
            drawerIcon: ({ tintColor }) => (
              <Image
                source={require("./assets/copy.png")}
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
                source={require("./assets/car.png")}
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
                source={require("./assets/settings.png")}
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
                source={require("./assets/help.png")}
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
                source={require("./assets/log_out.png")}
                style={styles.drawerIcon}
              />
            ),
          }}
          a
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
});
