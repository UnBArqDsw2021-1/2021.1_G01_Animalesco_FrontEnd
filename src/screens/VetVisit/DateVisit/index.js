import React, { useState, useEffect } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  View,
  Text,
  Keyboard,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  ActivityIndicator,
  Alert,
} from "react-native";
import colors from "@assets/styles/colors";

import styles from "./styles";
import defaultStyles from "@screens/styles.js";
import { useNavigation, useRoute } from "@react-navigation/native";

import { GoBackHeader } from "@components";
import { useService, vetVisitService } from "@services";
import { validateDate, formatDate, formatDateToRequest } from "@utilites";

export const DateVisit = () => {
  const [erro, setErro] = useState("");
  const [newVisitRequest, setNewVisitRequest] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [visitDate, setVisitDate] = useState("");
  const [nextVisitDate, setNextVisitDate] = useState(null);

  const navigation = useNavigation();
  setStatusBarStyle("dark");

  const routes = useRoute();
  

  useEffect(() => {
    if (visitDate) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [visitDate]);

  const newVisitHandler = async () => {
    setErro("");
    setNewVisitRequest(true);

    if (!validateDate(visitDate)) {
      setErro("Data da visita inválida");
      return;
    }
    if (nextVisitDate && !validateDate(nextVisitDate)) {
      setErro("Data da próxima visita inválida");
      return;
    }

    const data = {
      pet_id: selectedPetId,
      vet_clinic: vetClinic,
      description: description !== "" ? description : null,
      visit_date: formatDateToRequest(visitDate),
      next_visit_date:
        nextVisitDate === "" || nextVisitDate === null
          ? null
          : formatDateToRequest(nextVisitDate),
    };

    const response = await useService(vetVisitService, "createVisit", [data]);

    if (response.error) {
      setErro("Error ao registrar uma nova visita. Tente novamente mais tarde");
      setNewVisitRequest(false);
      return;
    }

    setNewVisitRequest(false);
    navigation.navigate("calendar");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={defaultStyles.page}>
        <GoBackHeader />
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.content}>
            <Text style={defaultStyles.inputTopText}>Data da visita</Text>
            <TextInput
              autoCorrect={false}
              keyboardType="numeric"
              style={defaultStyles.input}
              onChangeText={(value) => setVisitDate(formatDate(value))}
              value={visitDate}
            />
            <Text style={defaultStyles.inputTopText}>
              Data da próxima visita
            </Text>
            <TextInput
              autoCorrect={false}
              keyboardType="numeric"
              style={defaultStyles.input}
              onChangeText={(value) => setNextVisitDate(formatDate(value))}
              value={nextVisitDate}
            />
            {erro !== "" && <Alert message={erro} />}
            {newVisitRequest ? (
              <ActivityIndicator size="large" color={colors.light} />
            ) : (
              <TouchableOpacity
                style={
                  buttonDisabled
                    ? defaultStyles.buttonDisabled
                    : defaultStyles.button
                }
                disabled={buttonDisabled}
                onPress={newVisitHandler}
              >
                <Text style={defaultStyles.textButton}>Cadastrar</Text>
              </TouchableOpacity>
            )}
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
