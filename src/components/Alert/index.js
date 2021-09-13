import React from "react";
import { View, Text } from "react-native";

import styles from "./styles.js";

export const Alert = ({ message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.message}> {message} </Text>
      </View>
    </View>
  );
};
