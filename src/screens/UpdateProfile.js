import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TextInput,
  LogBox,
} from "react-native";
import Constants from "../component/Constants";
import { RadioButton } from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Server_Urls from "../component/Server_Urls";
import { PostApi } from "../component/ApiCalls";

const UpdateProfile = ({ navigation }) => {
  const once = false;
  const [isLoading, setLoading] = useState(true);
  const [smoking, setSmoking] = useState("first");
  const [pets, setPets] = useState("first");
  const [music, setMusic] = useState("first");
  const [personal, setPersonal] = useState(false);
  const [aboutme, setAboutMe] = useState(false);
  const [prefrence, setPrefrence] = useState(false);
  const [gender, setGender] = useState("1");

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [occupation, setOccupation] = useState("");
  const [education, setEducation] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [aboutmetext, setAboutMeText] = useState("");
  const [interest, setInterest] = useState("");
  const [languages, setLanguages] = useState("");
  const [rideSharing, setRidesharing] = useState("");
  const [peopleuLike, setPeopleuLike] = useState("");
  const [message, setMessage] = useState("");

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => checkTextinput()}>
          <Text
            style={{
              marginRight: 15,
              color: Constants.buttonBlue,
              fontSize: 15,
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [
    name,
    city,
    occupation,
    education,
    dob,
    email,
    aboutmetext,
    interest,
    languages,
    rideSharing,
    peopleuLike,
    message,
  ]);

  const checkTextinput = () => {
    if (!name.trim()) {
      console.log("Name :", name);
      alert("Please enter name");
      return;
    } else if (city.trim().length == 0) {
      console.log("Name :", name);
      alert("Please enter city");
      return;
    } else if (occupation.trim().length == 0) {
      console.log("Name :", name);
      alert("Please enter occupation");
      return;
    } else if (education.trim().length == 0) {
      console.log("Name :", name);
      alert("Please enter education");
      return;
    } else if (dob.trim().length == 0) {
      alert("Please enter date of birth");
      return;
    } else if (email.trim().length == 0) {
      alert("Please enter email");
      return;
    } else if (aboutmetext.trim().length == 0) {
      alert(" Enter about your self");
      return;
    } else if (interest.trim().length == 0) {
      alert("Please enter your interest");
      return;
    } else if (languages.trim().length == 0) {
      alert("Please enter languages");
      return;
    } else if (rideSharing.trim().length == 0) {
      alert("Please enter rideSharing");
      return;
    } else if (peopleuLike.trim().length == 0) {
      alert("Please enter people you like");
      return;
    } else if (message.trim().length == 0) {
      alert("Please enter message");
      return;
    }
    UpdateApi();
  };

  const UpdateApi = () => {
    //  useEffect(() => {
    const params = {
      phone_no: "12345679",
      name: name,
      city: city,
      profession: occupation,
      age: "28",
      dob: dob,
      email: email,
      gender: gender,
      bio: aboutmetext,
      interest: interest,
      degree: education,
      languages: languages,
      a1: rideSharing,
      a2: peopleuLike,
      a3: message,
    };
    PostApi(Server_Urls.UPDATE_PROFILE, params).then((response) => {
      console.log("PostApi ", response);
      setLoading(false);
    });
    // }, [once]);
  };

  const selectedGender = (count) => {
    if (count == gender) {
      return {
        borderRadius: 35,
        width: 30,
        height: 30,
        margin: 5,
        backgroundColor: "transparent",
        borderColor: Constants.buttonBlue,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      };
    } else {
      return {
        borderRadius: 35,
        width: 30,
        height: 30,
        margin: 5,
        backgroundColor: "transparent",
        borderColor: Constants.lineColor,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      };
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ margin: 15 }}>
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
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Please Choose Your Ride Preferences
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: Constants.textColor,
                flex: 1,
                textAlign: "left",
              }}
            >
              Preferred Gender
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity onPress={() => setGender("1")}>
                <View style={selectedGender("1")}>
                  <Image
                    source={require("../../assets/personal_info.png")}
                    source={require("../../assets/man.png")}
                    style={styles.genderLogo}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setGender("2")}>
                <View style={selectedGender("2")}>
                  <Image
                    source={require("../../assets/personal_info.png")}
                    source={require("../../assets/woman.png")}
                    style={styles.genderLogo}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setGender("3")}>
                <View style={selectedGender("3")}>
                  <Image
                    source={require("../../assets/personal_info.png")}
                    source={require("../../assets/man.png")}
                    style={styles.genderLogo}
                  />
                  <Image
                    source={require("../../assets/personal_info.png")}
                    source={require("../../assets/woman.png")}
                    style={styles.genderLogo}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: Constants.textColor,
                flex: 1,
                textAlign: "left",
              }}
            >
              Smoking Allowed
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <RadioButton
                value="first"
                color={Constants.buttonBlue}
                status={smoking === "first" ? "checked" : "unchecked"}
                onPress={() => setSmoking("first")}
              />
              <Text style={{ color: Constants.textColor, textAlign: "center" }}>
                Yes
              </Text>
              <RadioButton
                value="second"
                color={Constants.buttonBlue}
                status={smoking === "second" ? "checked" : "unchecked"}
                onPress={() => setSmoking("second")}
              />
              <Text style={{ color: Constants.textColor, textAlign: "center" }}>
                No
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: Constants.textColor,
                flex: 1,
                textAlign: "left",
              }}
            >
              Pets Allowed
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <RadioButton
                value="first"
                color={Constants.buttonBlue}
                status={pets === "first" ? "checked" : "unchecked"}
                onPress={() => setPets("first")}
              />
              <Text style={{ color: Constants.textColor, textAlign: "center" }}>
                Yes
              </Text>
              <RadioButton
                value="second"
                color={Constants.buttonBlue}
                status={pets === "second" ? "checked" : "unchecked"}
                onPress={() => setPets("second")}
              />
              <Text style={{ color: Constants.textColor, textAlign: "center" }}>
                No
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: Constants.textColor,
                flex: 1,
                textAlign: "left",
              }}
            >
              Music Allowed
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <RadioButton
                value="first"
                color={Constants.buttonBlue}
                status={music === "first" ? "checked" : "unchecked"}
                onPress={() => setMusic("first")}
              />
              <Text style={{ color: Constants.textColor, textAlign: "center" }}>
                Yes
              </Text>
              <RadioButton
                value="second"
                color={Constants.buttonBlue}
                status={music === "second" ? "checked" : "unchecked"}
                onPress={() => setMusic("second")}
              />
              <Text style={{ color: Constants.textColor, textAlign: "center" }}>
                No
              </Text>
            </View>
          </View>

          <View style={styles.listContainer}>
            <Image
              source={require("../../assets/personal_info.png")}
              style={{
                resizeMode: "contain",
                width: 25,
                margin: (0, 15, 0, 15),
              }}
            />
            <Text
              style={{
                color: Constants.textColor,
                fontWeight: "bold",
              }}
            >
              Personal Info
            </Text>

            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <TouchableOpacity
                onPress={() => {
                  setPersonal(!personal);
                }}
              >
                <Image
                  source={require("../../assets/drop_down.png")}
                  style={{
                    resizeMode: "contain",
                    width: 10,
                    margin: (0, 15, 0, 15),
                    transform: [
                      personal ? { rotate: "90deg" } : { rotate: "0deg" },
                    ],
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          {personal && (
            <View>
              <View style={{ marginTop: 12, marginLeft: 5 }}>
                <Text
                  style={{
                    color: Constants.lightTextColor,
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                >
                  Full Name
                </Text>
                <TextInput
                  style={{ color: Constants.textColor, fontSize: 16 }}
                  placeholder="Enter your name here"
                  onChangeText={(value) => setName(value)}
                />

                <View
                  style={{ height: 1, backgroundColor: Constants.lineColor }}
                />
              </View>

              <View style={{ marginTop: 12, marginLeft: 5 }}>
                <Text
                  style={{
                    color: Constants.lightTextColor,
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                >
                  City
                </Text>
                <TextInput
                  style={{ color: Constants.textColor, fontSize: 16 }}
                  placeholder="Enter your city"
                  onChangeText={(value) => setCity(value)}
                  defaultValue={city}
                />

                <View
                  style={{ height: 1, backgroundColor: Constants.lineColor }}
                />
              </View>

              <View style={{ marginTop: 12, marginLeft: 5 }}>
                <Text
                  style={{
                    color: Constants.lightTextColor,
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                >
                  Occupation
                </Text>
                <TextInput
                  style={{ color: Constants.textColor, fontSize: 16 }}
                  placeholder="Enter your Occupation"
                  onChangeText={(value) => setOccupation(value)}
                  defaultValue={occupation}
                />

                <View
                  style={{ height: 1, backgroundColor: Constants.lineColor }}
                />
              </View>

              <View style={{ marginTop: 12, marginLeft: 5 }}>
                <Text
                  style={{
                    color: Constants.lightTextColor,
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                >
                  Education
                </Text>
                <TextInput
                  style={{ color: Constants.textColor, fontSize: 16 }}
                  placeholder="Enter your education"
                  onChangeText={(value) => setEducation(value)}
                  defaultValue={education}
                />

                <View
                  style={{ height: 1, backgroundColor: Constants.lineColor }}
                />
              </View>

              <View style={{ marginTop: 12, marginLeft: 5 }}>
                <Text
                  style={{
                    color: Constants.lightTextColor,
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                >
                  Date of Birth
                </Text>
                <TextInput
                  style={{ color: Constants.textColor, fontSize: 16 }}
                  placeholder="dd/mm/yy"
                  onChangeText={(value) => setDob(value)}
                  defaultValue={dob}
                />

                <View
                  style={{ height: 1, backgroundColor: Constants.lineColor }}
                />
              </View>

              <View style={{ marginTop: 12, marginLeft: 5 }}>
                <Text
                  style={{
                    color: Constants.lightTextColor,
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                >
                  Email
                </Text>
                <TextInput
                  style={{ color: Constants.textColor, fontSize: 16 }}
                  placeholder="Enter your email"
                  onChangeText={(value) => setEmail(value)}
                  defaultValue={email}
                />

                <View
                  style={{ height: 1, backgroundColor: Constants.lineColor }}
                />
              </View>
            </View>
          )}

          <View style={styles.listContainer}>
            <Image
              source={require("../../assets/skills.png")}
              style={{
                resizeMode: "contain",
                width: 35,
                margin: (0, 15, 0, 15),
              }}
            />
            <Text
              style={{
                color: Constants.textColor,
                fontWeight: "bold",
              }}
            >
              About Me
            </Text>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <TouchableOpacity onPress={() => setAboutMe(!aboutme)}>
                <Image
                  source={require("../../assets/drop_down.png")}
                  style={{
                    resizeMode: "contain",
                    width: 10,
                    margin: (0, 15, 0, 15),
                    transform: [
                      aboutme ? { rotate: "90deg" } : { rotate: "0deg" },
                    ],
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          {aboutme && (
            <View>
              <View style={{ marginTop: 12, marginLeft: 10 }}>
                <TextInput
                  style={{ color: Constants.textColor, fontSize: 16 }}
                  placeholder="About myself"
                  onChangeText={(value) => setAboutMeText(value)}
                  defaultValue={aboutmetext}
                  multiline={true}
                  numberOfLines={4}
                />

                <View
                  style={{ height: 1, backgroundColor: Constants.lineColor }}
                />
              </View>

              <View style={{ marginTop: 12, marginLeft: 10 }}>
                <TextInput
                  style={{ color: Constants.textColor, fontSize: 16 }}
                  placeholder=" Interest / Hobbies"
                  onChangeText={(interest) => setInterest(interest)}
                  defaultValue={interest}
                />

                <View
                  style={{ height: 1, backgroundColor: Constants.lineColor }}
                />
              </View>

              <View style={{ marginTop: 12, marginLeft: 10 }}>
                <TextInput
                  style={{ color: Constants.textColor, fontSize: 16 }}
                  placeholder="Languages I can speak"
                  onChangeText={(languages) => setLanguages(languages)}
                  defaultValue={languages}
                />

                <View
                  style={{ height: 1, backgroundColor: Constants.lineColor }}
                />
              </View>

              <View style={{ marginTop: 12, marginLeft: 10 }}>
                <TextInput
                  style={{ color: Constants.textColor, fontSize: 16 }}
                  placeholder="Why I m using Ride Sharing?"
                  onChangeText={(rideSharing) => setRidesharing(rideSharing)}
                  defaultValue={rideSharing}
                />

                <View
                  style={{ height: 1, backgroundColor: Constants.lineColor }}
                />
              </View>
            </View>
          )}

          <View style={styles.listContainer}>
            <Image
              source={require("../../assets/prefrence.png")}
              style={{
                resizeMode: "contain",
                width: 25,
                margin: (0, 15, 0, 15),
              }}
            />
            <Text
              style={{
                color: Constants.textColor,
                fontWeight: "bold",
              }}
            >
              My preferences
            </Text>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <TouchableOpacity onPress={() => setPrefrence(!prefrence)}>
                <Image
                  source={require("../../assets/drop_down.png")}
                  style={{
                    resizeMode: "contain",
                    width: 10,
                    margin: (0, 15, 0, 15),
                    transform: [
                      prefrence ? { rotate: "90deg" } : { rotate: "0deg" },
                    ],
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {prefrence && (
            <View>
              <View style={{ marginTop: 12, marginLeft: 10 }}>
                <TextInput
                  style={{
                    color: Constants.textColor,
                    fontSize: 16,
                    flexWrap: "wrap",
                  }}
                  placeholder="What kind of people would you like for ride share?"
                  onChangeText={(peopleuLike) => setPeopleuLike(peopleuLike)}
                  defaultValue={peopleuLike}
                />

                <View
                  style={{ height: 1, backgroundColor: Constants.lineColor }}
                />
              </View>

              <View style={{ marginTop: 12, marginLeft: 10 }}>
                <TextInput
                  style={{ color: Constants.textColor, fontSize: 16 }}
                  placeholder=" Any message for passengers?"
                  onChangeText={(message) => setMessage(message)}
                  defaultValue={message}
                />

                <View
                  style={{ height: 1, backgroundColor: Constants.lineColor }}
                />
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { backgroundColor: Constants.whiteColor, flex: 1 },
  genderLogo: {
    width: 10,
    height: 15,
    resizeMode: "contain",
  },
  circleBorder: {
    borderRadius: 35,
    width: 30,
    height: 30,
    margin: 5,
    backgroundColor: "transparent",
    borderColor: Constants.lineColor,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  listContainer: {
    backgroundColor: Constants.whiteColor,
    marginTop: 15,
    elevation: 5,
    flexDirection: "row",
    height: 50,
    justifyContent: "flex-end",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  profileImg: {
    alignSelf: "center",
    width: Constants.width / 3.3,
    height: Constants.width / 3.3,
    borderRadius: Constants.width / 6.6,
  },
  imgCamera: {
    width: Constants.width / 8,
    height: Constants.width / 8,
    borderRadius: Constants.width / 16,
    backgroundColor: Constants.whiteColor,
    alignSelf: "center",
    marginTop: -Constants.width / 12,
    justifyContent: "center",
  },
  blueCircle: {
    width: Constants.width / 3,
    height: Constants.width / 3,
    borderRadius: Constants.width / 6,
    marginTop: 15,
    justifyContent: "center",
    alignSelf: "center",
    borderColor: Constants.buttonBlue,
    borderWidth: 3,
  },
});
export default UpdateProfile;
