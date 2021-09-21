import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "@assets/styles/colors";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles.js";

export const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.itens}
          onPress={() => navigation.navigate("home")}
        >
          <FontAwesome5 name="home" size={20} color={colors.light} />
          <Text style={styles.itensText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itens}>
          <FontAwesome5 name="calendar" size={20} color={colors.light} />
          <Text style={styles.itensText}>Calendário</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
