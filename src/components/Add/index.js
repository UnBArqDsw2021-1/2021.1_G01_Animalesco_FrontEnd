import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "@assets/styles/colors";

import styles from "./styles.js";

export const Add = ({ withoutFooter = false, action }) => {
  return (
    <View
      style={withoutFooter ? styles.containerWithoutFoot : styles.container}
    >
      <TouchableOpacity style={styles.content} onPress={action}>
        <FontAwesome5 name="plus" size={25} color={colors.light} />
      </TouchableOpacity>
    </View>
  );
};
