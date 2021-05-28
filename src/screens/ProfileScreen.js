import React, { useState, useEffect } from "react";
import Colors from "../component/Constants";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import Constants from "../component/Constants";

import Server_Urls from "../component/Server_Urls";
import { PostApi } from "../component/ApiCalls";

const ProfileScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const once = false;
  const [response, setresponse] = useState();

  useEffect(() => {
    const params = {
      phone_no: "12345679",
    };
    PostApi(Server_Urls.GET_PROFILE, params).then((response1) => {
      // console.log("Profile ", response1);
      setLoading(false);
      setresponse(response1.PROFILE);
      console.log("Profile ", response1.PROFILE);
    });
  }, [once]);

  return (
    <View style={{ flex: 1, backgroundColor: Constants.whiteColor }}>
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
            {response != null ? response.name : "Johny Pablo"}
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
              Lives in {response != null ? response.city : "Abbottabad"}
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
                <Text style={{ color: Constants.textColor }}>
                  {response != null ? response.profession : "Data Scientist"}
                </Text>
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
                <Text style={{ color: Constants.textColor }}>
                  {response != null ? response.profession : "Bs(CS)"}
                </Text>
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
              <Text style={{ color: Constants.textColor }}>
                {response != null ? response.dob : "24/05/1992"}{" "}
              </Text>
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
                {response != null ? response.email : "alirehman440@gmail.com"}
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
              {response != null
                ? response.bio
                : "Excepteur sint occaecat cupidatat non proident, sunt in culpa quih officia deserunt. Lorem ipsum dolor sit amet, consectetur adipgfff elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."}
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
                {response != null ? response.interest : "hiking"}
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
              {response != null ? response.languages : "Urdu | English"}
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
              {response != null
                ? response.ans1
                : " Excepteur sint occaecat cupidatat non proident, sunt in culpa quih /n officia deserunt. Lorem ipsum dolor sit amet, consectetur adipgfff /n elit. Excepteur sint occaecat cupidatat non proident, sunt in /n culpa qui officia deserunt."}
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
              {response != null
                ? response.ans2
                : " Excepteur sint occaecat cupidatat non proident, sunt in culpa quih /n officia deserunt. Lorem ipsum dolor sit amet, consectetur adipgfff /n elit. Excepteur sint occaecat cupidatat non proident, sunt in /n  culpa qui officia deserunt."}
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
              {response != null
                ? response.ans3
                : " Excepteur sint occaecat cupidatat non proident, sunt in culpa quih /n officia deserunt. Lorem ipsum dolor sit amet, consectetur adipgfff /n elit. Excepteur sint occaecat cupidatat non proident, sunt in /n culpa qui officia deserunt."}
            </Text>
          </View>
        </View>
      </ScrollView>

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
        <TouchableOpacity onPress={() => navigation.push("Update Profile")}>
          <Image
            source={require("../../assets/edit.png")}
            style={{ width: 20, height: 20, resizeMode: "contain" }}
          />
        </TouchableOpacity>
      </View>
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

  modalImage: {
    width: 130,
    height: 80,
    marginBottom: 15,
    resizeMode: "contain",
  },
});

export default ProfileScreen;
