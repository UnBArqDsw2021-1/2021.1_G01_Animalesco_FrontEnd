import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

import colors from "@assets/styles/colors";

import { FontAwesome5 } from "@expo/vector-icons";

export const ModalRegister = ({ visible, setVisible, petId = null }) => {
  const navigation = useNavigation();

  const onPressSubmit = (destination) => {
    setVisible(false);
    navigation.navigate(destination, { petId });
  };

  return (
    <View>
      <Modal
        animationType="fade"
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
          <LinearGradient
            style={styles.container}
            colors={["transparent", "rgba(52, 52, 52, 0.4)", "transparent"]}
          >
            <View style={styles.content}>
              <TouchableOpacity
                style={styles.options}
                onPress={() => onPressSubmit("registervaccine")}
              >
                <FontAwesome5 name="syringe" size={40} color={colors.dark} />
                <Text style={styles.optionsText}>Vacina</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.options}>
                <FontAwesome5 name="pills" size={40} color={colors.dark} />
                <Text style={styles.optionsText}>Remédio</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionsWithoutBorder}
                onPress={() => onPressSubmit("visitDescription")}
              >
                <FontAwesome5 name="cat" size={40} color={colors.dark} />
                <Text style={styles.optionsText}>Veterinário</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
