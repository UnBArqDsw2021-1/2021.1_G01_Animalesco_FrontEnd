import React, { useState, useEffect } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";

import defaultStyles from "@screens/styles.js";

import { ModalRegister } from "./components";
import { Add, GoBackHeader } from "@components";

export const PetPerfil = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const routes = useRoute();
  const id = routes.params;

  setStatusBarStyle("dark");

  return (
    <View style={defaultStyles.page}>
      <GoBackHeader />
      <View style={defaultStyles.container}>
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
