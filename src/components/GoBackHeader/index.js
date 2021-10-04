import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles.js";
import colors from "@assets/styles/colors";

export const GoBackHeader = ({ icon = "orange", background = "white" }) => {
  const navigation = useNavigation();

  return (
    <View
      style={
        background === "white" ? styles.header : styles.headerWithoutBackground
      }
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome5
          name="chevron-left"
          size={24}
          color={icon === "orange" ? colors.primary : colors.light}
        />
      </TouchableOpacity>
    </View>
  );
};
