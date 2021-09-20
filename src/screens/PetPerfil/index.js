import React, { useState, useEffect } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import { View, Text, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useService, petService } from "@services";
import { FontAwesome5 } from "@expo/vector-icons";

import defaultStyles from "@screens/styles.js";
import colors from "@assets/styles/colors";

import { ModalRegister } from "./components";
import { Add, GoBackHeader } from "@components";
import styles from "./styles";

export const PetPerfil = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pet, setPet] = useState();
  const routes = useRoute();
  const id = routes.params;

  setStatusBarStyle("dark");

  const getPet = async () => {
    const response = await useService(petService, "getPetByID", [{ id: id }]);
    setPet(response.data);
  };

  useEffect(() => {
    getPet();
  }, []);

  return (
    <View style={defaultStyles.page}>
      <GoBackHeader />
      <View style={defaultStyles.container}>
        <View style={styles.cardImage}>
          <FontAwesome5 name="paw" size={150} color={colors.primary} />
        </View>
        {pet ? (
          <View style={styles.information}>
            <Text>Nome : {pet.name} </Text>
            <Text>Especie: {pet.specie_name}</Text>
            <Text>
              Raça: {pet.breed_name}
            </Text>
            <Text>{pet.color}</Text>
          </View>
        ) : (
          <ActivityIndicator size="large" color={colors.dark} />
        )}
        <ModalRegister
          visible={modalVisible}
          setVisible={setModalVisible}
          petId={id}
        />
        <Add withoutFooter action={() => setModalVisible(true)} />
      </View>
    </View>
  );
};
