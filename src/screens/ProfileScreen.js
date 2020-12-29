import React from "react";
import Colors from "../component/Constants";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Constants from "../component/Constants";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const handleBackButtonClick = () => {
  console.log("asdaaasdasdasd");
  this.props.navigation.goBack(null);
  return true;
};
const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Constants.whiteColor }}>
      <View style={styles.topNav}>
        <TouchableOpacity
          style={styles.imageDrawer}
          onPress={() => handleBackButtonClick}
        >
          <Image
            style={styles.imageDrawer}
            source={require("../../assets/back_arrow.png")}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
        <Text style={{ flex: 1 }} />
      </View>
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <View style={styles.blueCircle}>
            <Image
              source={require("../../assets/search_img.png")}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.imgCamera}>
            <Image
              source={require("../../assets/camera.png")}
              style={{
                resizeMode: "contain",
                width: Constants.width / 13,
                height: Constants.width / 13,
                alignSelf: "center",
              }}
            />
          </View>

          <Text
            style={{
              color: Constants.textColor,
              fontSize: 18,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Ali Rehman
          </Text>

          <View
            style={{
              marginTop: 2,
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: Constants.width / 3,
                height: 1,

                alignSelf: "center",
                backgroundColor: Constants.lineColor,
              }}
            />
            <Text
              style={{
                textAlign: "center",

                fontSize: 18,
                fontWeight: "bold",
                color: Constants.lineColor,

                paddingLeft: 10,
                paddingRight: 10,
                flexWrap: "wrap",
              }}
            >
              Lives in Abbottabad
            </Text>

            <View
              style={{
                width: Constants.width / 3,
                height: 1,

                alignSelf: "center",
                backgroundColor: Constants.lineColor,
              }}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "row", flex: 1 }}>
                <Image
                  source={require("../../assets/bank.png")}
                  style={{
                    resizeMode: "contain",
                    width: 18,
                    height: 18,
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                />
                <Text style={{ color: Constants.textColor }}>Bank Manager</Text>
              </View>

              <View style={{ flexDirection: "row", flex: 1 }}>
                <Image
                  source={require("../../assets/degree.png")}
                  style={{
                    resizeMode: "contain",
                    width: 18,
                    height: 18,
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                />
                <Text style={{ color: Constants.textColor }}>MBA</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",

                marginTop: 10,
              }}
            >
              <Image
                source={require("../../assets/cake.png")}
                style={{
                  resizeMode: "contain",
                  width: 18,
                  height: 18,
                  marginLeft: 10,
                  marginRight: 10,
                }}
              />
              <Text style={{ color: Constants.textColor }}>MBA </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                justifyContent: "flex-start",
              }}
            >
              <Image
                source={require("../../assets/email.png")}
                style={{
                  resizeMode: "contain",
                  width: 18,
                  height: 18,
                  marginLeft: 10,
                  marginRight: 10,
                  alignContent: "center",
                }}
              />
              <Text style={{ color: Constants.textColor, textAlign: "center" }}>
                alirehman440@gmail.com
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 15,
              width: Constants.width,
              height: 1,
              backgroundColor: Constants.lineColor,
            }}
          />
          <View style={{ paddingLeft: 15, paddingTop: 15 }}>
            <Text style={{ color: Constants.textColor, fontWeight: "bold" }}>
              About Me
            </Text>
            <Text style={{ color: Constants.textColor }}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa quih
              officia deserunt. Lorem ipsum dolor sit amet, consectetur adipgfff
              elit. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt.
            </Text>
          </View>

          <View
            style={{
              marginTop: 15,
              width: Constants.width,
              height: 1,
              backgroundColor: Constants.lineColor,
            }}
          />

          <View style={{ paddingLeft: 15, paddingTop: 15 }}>
            <Text style={{ color: Constants.textColor, fontWeight: "bold" }}>
              Interests / Hobbies
            </Text>
            <View />
            <View
              style={{
                flexDirection: "row",
                borderRadius: 12,
              }}
            >
              <Text
                style={{
                  marginTop: 10,
                  backgroundColor: Constants.backGroundLightBlue,
                  paddingLeft: 12,
                  paddingRight: 12,
                  paddingTop: 2,
                  paddingBottom: 2,
                  borderRadius: 12,
                  overflow: "hidden",
                  color: Constants.textColor,
                  marginRight: 7,
                }}
              >
                hiking
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 15,
              width: Constants.width,
              height: 1,
              backgroundColor: Constants.lineColor,
            }}
          />

          <View
            style={{ paddingLeft: 15, paddingTop: 15, flexDirection: "row" }}
          >
            <Text style={{ color: Constants.textColor, fontWeight: "bold" }}>
              Languages I Can Speak
            </Text>
            <Text
              style={{
                color: Constants.textColor,
                textAlign: "right",
                flex: 1,
                marginRight: 4,
              }}
            >
              Urdu | English
            </Text>
          </View>

          <View
            style={{
              marginTop: 15,
              width: Constants.width,
              height: 1,
              backgroundColor: Constants.lineColor,
            }}
          />

          <View style={{ paddingLeft: 15, paddingTop: 15 }}>
            <Text style={{ color: Constants.textColor, fontWeight: "bold" }}>
              Why I m using Ride Sharing?
            </Text>
            <Text style={{ color: Constants.textColor }}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa quih
              officia deserunt. Lorem ipsum dolor sit amet, consectetur adipgfff
              elit. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt.
            </Text>
          </View>

          <View
            style={{
              marginTop: 15,
              width: Constants.width,
              height: 1,
              backgroundColor: Constants.lineColor,
            }}
          />

          <View style={{ paddingLeft: 15, paddingTop: 15 }}>
            <Text style={{ color: Constants.textColor, fontWeight: "bold" }}>
              What kind of people would you like for ride share?
            </Text>
            <Text style={{ color: Constants.textColor }}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa quih
              officia deserunt. Lorem ipsum dolor sit amet, consectetur adipgfff
              elit. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt.
            </Text>
          </View>

          <View
            style={{
              marginTop: 15,
              width: Constants.width,
              height: 1,
              backgroundColor: Constants.lineColor,
            }}
          />

          <View style={{ paddingLeft: 15, paddingTop: 15 }}>
            <Text style={{ color: Constants.textColor, fontWeight: "bold" }}>
              Any message for passengers?
            </Text>
            <Text style={{ color: Constants.textColor, marginBottom: 15 }}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa quih
              officia deserunt. Lorem ipsum dolor sit amet, consectetur adipgfff
              elit. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt.
            </Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => NavigationContainer.navigate("ActiveRide")}
      >
        <View
          style={{
            position: "absolute",
            marginRight: 15,
            marginBottom: 15,
            bottom: 0,
            right: 0,
            backgroundColor: Constants.buttonBlue,
            width: 45,
            height: 45,
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            flexDirection: "row",
            borderRadius: 23,
            elevation: 8,
            shadowColor: "#000",
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
          }}
        >
          <Image
            source={require("../../assets/edit.png")}
            style={{ width: 20, height: 20, resizeMode: "contain" }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle1: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileImg: {
    alignSelf: "center",
    width: Colors.width / 3.3,
    height: Colors.width / 3.3,
    borderRadius: Colors.width / 6.6,
  },
  imgCamera: {
    width: Colors.width / 8,
    height: Colors.width / 8,
    borderRadius: Colors.width / 16,
    backgroundColor: Colors.whiteColor,
    alignSelf: "center",
    marginTop: -Colors.width / 12,
    justifyContent: "center",
  },
  blueCircle: {
    width: Colors.width / 3,
    height: Colors.width / 3,
    borderRadius: Colors.width / 6,
    marginTop: 15,
    justifyContent: "center",
    alignSelf: "center",
    borderColor: Colors.buttonBlue,
    borderWidth: 3,
  },

  imageDrawer: {
    width: 30,
    height: 20,
    resizeMode: "contain",

    justifyContent: "center",
    flex: 1,
  },

  topNav: {
    height: 100,
    paddingTop: 65,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    elevation: 5,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.textColor,
    textAlign: "center",
    flex: 2,
  },
});

export default ProfileScreen;
