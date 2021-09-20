import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "@assets/styles/colors";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles.js";

export const Add = ({ destination }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.content}
        onPress={() => navigation.navigate(destination)}
      >
        <FontAwesome5 name="plus" size={25} color={colors.light} />
      </TouchableOpacity>
    </View>
  );
};
