import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
// import Routes from "./src/routes.js";
import Login from "./src/screens/Login";
import colors from "./assets/styles/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
