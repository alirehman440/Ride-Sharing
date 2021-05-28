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

const dim = Dimensions.get("window");
const heightD = Math.round(dim.width / 4);
const widthD = dim.width / 2;
const widthF = dim.width;
const white = "#FFF";
const light_blue = "#F5FAFF";
const img1 = "../../assets/search_ride.png";
const img2 = "../../assets/post_ride.png";
const img3 = "../../assets/search_img.png";
const img4 = "../../assets/post_img.png";

const HomeScreenCards = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignContent: "flex-end",
          alignSelf: "flex-end",
          alignContent: "flex-end",
          alignSelf: "flex-end",
          flexDirection: "row-reverse",
          position: "absolute",
          right: 0,
          bottom: 0,
          backgroundColor: white,
        }}
      >
        <Image
          source={props.img ? require(img3) : require(img4)}
          style={styles.backGround}
        />
      </View>

      <View style={styles.triangleCorner}>
        <Image
          source={props.img ? require(img1) : require(img2)}
          style={styles.photo}
        />
        <Text style={styles.title}>{props.title1}</Text>
        <Text style={styles.description}>{props.desc1}</Text>
        <Text style={styles.description}>{props.desc2}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    flexDirection: "row",
    width: widthF,
    borderTopEndRadius: 8,
    borderBottomEndRadius: 8,
    backgroundColor: "#FFF",
    elevation: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  triangleCorner: {
    width: widthD * 1.25,
    height: 0,
    borderBottomColor: "white",
    borderLeftWidth: 0,
    borderLeftColor: "transparent",
    borderRightWidth: widthD / 2,
    borderBottomWidth: 150,
    borderRightColor: "transparent",
    borderStyle: "solid",
    marginBottom: 8,
    position: "absolute",
  },

  title: {
    fontSize: 14,
    color: "#707070",
    alignSelf: "center",
  },
  container_text: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
  },
  description: {
    fontSize: 11,
    fontStyle: "italic",
    alignSelf: "center",
    color: "#707070",
  },
  photo: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  backGround: {
    resizeMode: "stretch",
    alignItems: "flex-end",
    height: 150,
    width: widthF / 1.2,
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
});

export default HomeScreenCards;
