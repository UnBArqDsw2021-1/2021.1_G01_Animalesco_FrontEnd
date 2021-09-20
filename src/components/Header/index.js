import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "@assets/styles/colors";

import styles from "./styles.js";
import { useUser } from "@store";

export const Header = () => {
  const navigation = useNavigation();
  const { user } = useUser();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.content}
        onPress={() => navigation.navigate("home")}
      >
        <Image
          style={styles.images}
          source={require("@assets/images/logo_without_background.png")}
        />
        <View style={styles.user}>
          <Text style={styles.userName}>{user && user.username}</Text>
          <View style={styles.userImage}>
            <FontAwesome5 name="user" size={15} color={colors.gray} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
