import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles.js";
import colors from "@assets/styles/colors";

export const GoBackHeader = ({ navigate }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate(navigate)}>
        <AntDesign name="arrowleft" size={24} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};
