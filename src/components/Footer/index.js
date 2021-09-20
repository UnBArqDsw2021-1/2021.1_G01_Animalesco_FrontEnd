import React from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "@assets/styles/colors";

import styles from "./styles.js";

export const Footer = ({ nuSteps, step }) => {
  const numberOfSteps = [];
  for (let i = 0; i < nuSteps; i++) {
    numberOfSteps.push(i + 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.itens}>
          <FontAwesome5 name="home" size={20} color={colors.light} />
          <Text style={styles.itensText}>Home</Text>
        </View>
        <View style={styles.itens}>
          <FontAwesome5 name="calendar" size={20} color={colors.light} />
          <Text style={styles.itensText}>Calendário</Text>
        </View>
      </View>
    </View>
  );
};
