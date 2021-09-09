import React from "react";
import { StyleSheet } from "react-native";
import Routes from "./src/routes.js";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import colors from "@assets/styles/colors.js";

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
    backgroundColor: colors.ice,
  },
});
