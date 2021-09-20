import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import Routes from "./src/routes.js";
import colors from "@assets/styles/colors.js";
import { UserProvider, PetsProvider } from "@store";

export default function App() {
  return (
    <>
      <StatusBar style="dark"></StatusBar>
      <PetsProvider>
        <UserProvider>
          <NavigationContainer style={styles.container}>
            <Routes />
          </NavigationContainer>
        </UserProvider>
      </PetsProvider>
    </>
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
