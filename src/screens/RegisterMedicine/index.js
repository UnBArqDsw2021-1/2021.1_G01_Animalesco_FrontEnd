import React, { useState, useEffect } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  ActivityIndicator,
} from "react-native";

import colors from "@assets/styles/colors";
import defaultStyles from "@screens/styles.js";

import {
  validateDate,
  formatDate,
  formatDateToRequest,
  validateDateAfterOther,
} from "@utilites";

import { GoBackHeader, Alert } from "@components";
import { useService, medicineService } from "@services";

export const RegisterMedicine = () => {
  const [nameMedicine, setNameMedicine] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [erro, setErro] = useState("");
  const [medicineRequest, setMedicineRequest] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const routes = useRoute();
  const { petId } = routes.params;

  const navigation = useNavigation();
  setStatusBarStyle("dark");

  // efeito do botão, preencher somente quando todos obrigatorios estiverem preenchidos
  useEffect(() => {
    if (nameMedicine && startDate) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [nameMedicine, startDate]);

  const submitHandler = async () => {
    setErro("");
    setMedicineRequest(true);

    if (!validateDate(startDate)) {
      setErro("Data inválida");
      setMedicineRequest(false);
      return;
    }

    if (!validateDate(finishDate)) {
      setErro("Data inválida");
      setMedicineRequest(false);
      return;
    }

    if (!validateDateAfterOther(startDate, finishDate)) {
      setErro("A data final da medicação deve ser após a primeira data");
      setMedicineRequest(false);
      return;
    }

    const data = {
      pet_id: petId,
      name: nameMedicine,
      start_date: formatDateToRequest(startDate),
      finish_date: formatDateToRequest(finishDate),
      //    application_time: application_time,
    };

    const response = await useService(medicineService, "createMedicine", [
      data,
    ]);

    if (response.error) {
      setErro("Error ao registrar medicamento. Tente novamente");
      setMedicineRequest(false);
      return;
    }

    setMedicineRequest(false);
    navigation.navigate("home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={defaultStyles.page}>
        <GoBackHeader />
        <KeyboardAvoidingView
          style={defaultStyles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={defaultStyles.content}>
            <View style={defaultStyles.formCadastro}>
              <Text style={defaultStyles.inputTopText}>
                Nome do medicamento
              </Text>
              <TextInput
                style={defaultStyles.input}
                autoCorrect={false}
                placeholderTextColor={colors.gray}
                onChangeText={setNameMedicine}
                value={nameMedicine}
              />
              <Text style={defaultStyles.inputTopText}>
                Data do medicamento
              </Text>
              <TextInput
                style={defaultStyles.input}
                onChangeText={(res) => setStartDate(formatDate(res))}
                value={startDate}
                placeholder="dd/mm/aaaa"
                keyboardType="numeric"
              />
              <Text style={defaultStyles.inputTopText}>
                Data final do medicamento
              </Text>
              <TextInput
                style={defaultStyles.input}
                onChangeText={(res) => setFinishDate(formatDate(res))}
                value={finishDate}
                placeholder="dd/mm/aaaa"
                keyboardType="numeric"
              />
              {erro !== "" && <Alert message={erro} />}
              {medicineRequest ? (
                <ActivityIndicator size="large" color={colors.light} />
              ) : (
                <TouchableOpacity
                  style={
                    buttonDisabled
                      ? defaultStyles.buttonDisabled
                      : defaultStyles.button
                  }
                  disabled={buttonDisabled}
                  onPress={submitHandler}
                >
                  <Text style={defaultStyles.textButton}>Salvar</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
