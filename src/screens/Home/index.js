import React, { useState, useEffect } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import styles from "./styles";
import defaultStyles from "@screens/styles.js";
import colors from "@assets/styles/colors";

import { ModalRegister } from "./components/ModalRegister";
import { Header, Add, Footer } from "@components";

import { formatToBrPattern } from "@utilites";
import { useUser, usePets } from "@store";
import { useService, userService, petService } from "@services";

export const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { user, setUser } = useUser();
  const { pets, setPets } = usePets();

  setStatusBarStyle("light");

  const getUser = async () => {
    const response = await useService(userService, "getUser");
    setUser(response.data);
  };

  const getPets = async () => {
    const response = await useService(petService, "getAllPet");
    setPets(response.data);
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
    getPets();
  }, []);

  if (!pets || !user) {
    return (
      <View style={defaultStyles.page}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color={colors.dark} />
        </View>
      </View>
    );
  }

  return (
    <View style={defaultStyles.page}>
      <Header />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.content}>
            {pets.map((pet, id) => (
              <TouchableOpacity key={id} style={styles.cardContainer}>
                <View style={styles.cardImage}>
                  <FontAwesome5 name="paw" size={50} color={colors.light} />
                </View>
                <View style={styles.cardContent}>
                  <View style={styles.cardContentTitle}>
                    <Text style={styles.cardTitle}>{pet.name} </Text>
                    <Text>- {pet.specie_name}</Text>
                  </View>
                  <View style={styles.cardContentBody}>
                    <Text style={styles.cardText}>
                      {pet.sex} - {pet.color}
                    </Text>
                    <Text style={styles.cardText}>
                      {formatToBrPattern(pet.birth_date)}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <ModalRegister visible={modalVisible} setVisible={setModalVisible} />
        <Add destination="petinformation" />
        <Footer />
      </View>
    </View>
  );
};
