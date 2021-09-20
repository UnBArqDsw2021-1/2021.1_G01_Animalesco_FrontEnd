import React, { useState, useEffect } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import { View, Text, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useService, petService } from "@services";

import defaultStyles from "@screens/styles.js";
import colors from "@assets/styles/colors";

import { ModalRegister } from "./components";
import { Add, GoBackHeader } from "@components";

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
        {pet ? (
          <View>
            <Text>{pet.name} </Text>
            <Text>{pet.specie_name}</Text>
            <Text>
              {pet.sex} {pet.color}
            </Text>
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
