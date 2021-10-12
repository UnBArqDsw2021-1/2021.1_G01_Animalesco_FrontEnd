import React, { useState, useEffect } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import { View, Text, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useService, petService } from "@services";
import { FontAwesome5 } from "@expo/vector-icons";

import defaultStyles from "@screens/styles.js";
import colors from "@assets/styles/colors";

import { Add, GoBackHeader, ModalRegister } from "@components";
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
      <GoBackHeader icon="white" background="transparent" />
      <View style={defaultStyles.container}>
        {pet ? (
          <View style={styles.content}>
            <View style={styles.cardImage}>
              <FontAwesome5 name="paw" size={150} color={colors.light} />
            </View>
            <View style={styles.contentInfo}>
              <View style={styles.contentTitle}>
                <View>
                  <Text style={styles.title}>{pet.name}</Text>
                  <Text style={styles.subTitle}>
                    {pet.specie_name} - {pet.sex}
                  </Text>
                </View>
                <View style={styles.contentBreed}>
                  <Text style={styles.breedText}>{pet.breed_name}</Text>
                </View>
              </View>
              <View style={styles.info}>
                <View style={styles.cardInfo({ color: colors.secondaryBlue })}>
                  <View style={styles.topCardInfo}>
                    <Text style={styles.topText}>{pet.color}</Text>
                  </View>
                  <View
                    style={styles.bottomCardInfo({
                      color: colors.secondaryBlue,
                    })}
                  >
                    <Text style={{ color: colors.light }}>cor</Text>
                  </View>
                </View>

                <View style={styles.cardInfo({ color: colors.primary })}>
                  <View style={styles.topCardInfo}>
                    <Text style={styles.topText}>--</Text>
                  </View>
                  <View
                    style={styles.bottomCardInfo({ color: colors.primary })}
                  >
                    <Text style={{ color: colors.light }}>peso</Text>
                  </View>
                </View>
                <View style={styles.cardInfo({ color: colors.secondaryGreen })}>
                  <View style={styles.topCardInfo}>
                    <Text style={styles.topText}>--</Text>
                  </View>
                  <View
                    style={styles.bottomCardInfo({
                      color: colors.secondaryGreen,
                    })}
                  >
                    <Text style={{ color: colors.light }}>altura</Text>
                  </View>
                </View>
                <View style={styles.cardInfo({ color: colors.secondary })}>
                  <View style={styles.topCardInfo}>
                    <Text style={styles.topText}>
                      {formatAge(pet.birth_date)}
                    </Text>
                  </View>
                  <View
                    style={styles.bottomCardInfo({ color: colors.secondary })}
                  >
                    <Text style={{ color: colors.light }}>idade</Text>
                  </View>
                </View>
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
