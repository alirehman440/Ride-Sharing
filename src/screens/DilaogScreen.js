import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

const DialogScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
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
              }}
            >
              <Text style={styles.textStyle}>Complete Profile</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default DialogScreen;
