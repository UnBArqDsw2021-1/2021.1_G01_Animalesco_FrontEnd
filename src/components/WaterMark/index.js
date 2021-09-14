import React from "react";
import { View, Image } from "react-native";
import styles from "./styles.js";

export const WaterMark = ({ orientation = "left" || "right" }) => {
  return (
    <View style={styles.logoImageContent}>
      <Image
        style={
          orientation === "left" ? styles.logoImageLeft : styles.logoImageRight
        }
        source={require("@assets/images/orange_mask_logo.png")}
      />
    </View>
  );
};
