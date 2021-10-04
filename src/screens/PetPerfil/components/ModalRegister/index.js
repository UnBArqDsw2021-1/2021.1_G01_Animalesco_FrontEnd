import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import styles from "./styles";

import colors from "@assets/styles/colors";

import { FontAwesome5 } from "@expo/vector-icons";

export const ModalRegister = ({ visible, setVisible, petId }) => {
  const navigation = useNavigation();

  const onPressSubmit = (destination) => {
    setVisible(false);
    navigation.navigate(destination, { petId });
  };

  return (
    <View style={styles.page}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}
      >
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPressOut={() => setVisible(false)}
        >
          <View style={styles.content}>
            <TouchableOpacity
              style={styles.options}
              onPress={() => onPressSubmit("registervaccine")}
            >
              <FontAwesome5 name="syringe" size={40} color={colors.dark} />
              <Text style={styles.optionsText}>Vacina</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionsWithoutBorder}
              onPress={() => onPressSubmit("registermedicine")}
            >
              <FontAwesome5 name="pills" size={40} color={colors.dark} />
              <Text style={styles.optionsText}>Remédio</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
