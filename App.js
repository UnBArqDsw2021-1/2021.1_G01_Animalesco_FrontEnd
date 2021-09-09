import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Routes from "./src/routes.js";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="dark" />
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
