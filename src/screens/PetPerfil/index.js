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
import { formatAge } from "@utilites";
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
        {pet ? (
          <View style={styles.information}>
            <View style={styles.cardImage}>
              <FontAwesome5 name="paw" size={150} color={colors.light} />
              <View style={styles.contentCardTitle}>
                <Text style={styles.cardTitle}>{pet.name}</Text>
              </View>
            </View>
            <View style={styles.contentInfo}>
              <View style={styles.info}>
                <Text style={styles.cardText}>
                  Idade: {formatAge(pet.birth_date)} anos
                </Text>
                <Text style={styles.cardText}>Raça: {pet.breed_name}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.cardText}>Especie: {pet.specie_name}</Text>
                <Text style={styles.cardText}>Sexo: {pet.sex}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.cardText}>Cor: {pet.color}</Text>
                <Text style={styles.cardText}>Peso: </Text>
              </View>
            </View>
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
