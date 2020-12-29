import React from "react";
import { Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function DrawerContent() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Drawer Content</Text>
    </View>
  );
}

const HomeScreen = () => {
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>HomeScreen</Text>
  </View>;
};

export const RootNavigator = () => {
  return (
    <Drawer.Navigator drawContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};
