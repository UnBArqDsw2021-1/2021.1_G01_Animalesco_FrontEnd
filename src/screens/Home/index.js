import React, { useState } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./styles";

import { ModalRegister } from "./components/ModalRegister";
import defaultStyles from "@screens/styles.js";

export const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  setStatusBarStyle("dark");

  return (
    <TouchableWithoutFeedback style={defaultStyles.page}>
      <View style={defaultStyles.container}>
        <View style={defaultStyles.container}>
          <TouchableOpacity
            style={styles.newPet}
            onPress={() => setModalVisible(true)}
          >
            <Text>Abrir modal</Text>
          </TouchableOpacity>
          <ModalRegister visible={modalVisible} setVisible={setModalVisible} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
