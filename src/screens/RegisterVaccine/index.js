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
import { useService, vaccineService, petService } from "@services";
import { Picker, PickerIOS } from "@react-native-community/picker";

import { usePets } from "@store";

export const RegisterVaccine = () => {
  const [nameVaccine, setNameVaccine] = useState("");
  const [doseData, setDoseData] = useState("");
  const [doseRepeatData, setDoseRepeatData] = useState("");
  const [vaccineRequest, setVaccineRequest] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [selectedPetId, setSelectedPetId] = useState();
  const [erro, setErro] = useState("");

  const { pets } = usePets();

  const routes = useRoute();
  const { petId } = routes.params;

  const navigation = useNavigation();
  setStatusBarStyle("dark");

  useEffect(() => {
    if (petId !== null) {
      setSelectedPetId(petId);
    }
  }, []);

  useEffect(() => {
    if (doseData && nameVaccine) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [doseData, nameVaccine]);

  const submitHandler = async () => {
    setErro("");
    setVaccineRequest(true);

    if (!validateDate(doseData)) {
      setErro("Data inválida");
      setVaccineRequest(false);
      return;
    }

    if (doseRepeatData) {
      if (!validateDate(doseRepeatData)) {
        setErro("Data inválida");
        setVaccineRequest(false);
        return;
      }
      if (!validateDateAfterOther(doseData, doseRepeatData)) {
        setErro("A data da segunda dose deve ser após a primeira dose");
        setVaccineRequest(false);
        return;
      }
    }

    const data = {
      pet_id: selectedPetId,
      name: nameVaccine,
      application_date: formatDateToRequest(doseData),
      next_application_date: formatDateToRequest(doseRepeatData),
    };

    const response = await useService(vaccineService, "createVaccine", [data]);

    if (response.error) {
      setErro("Error ao registrar vacina. Tente novamente");
      setVaccineRequest(false);
      return;
    }

    setVaccineRequest(false);
    navigation.navigate("home");
  };

  const PetPicker = () => (
    <>
      <Text style={defaultStyles.inputTopText}>Pet</Text>
      <View style={defaultStyles.pickerContent}>
        {Platform.OS === "ios" ? (
          <PickerIOS
            style={defaultStyles.picker}
            selectedValue={selectedPetId}
            onValueChange={setSelectedPetId}
          >
            {pets.map((pet, id) => (
              <PickerIOS.Item key={id} label={pet.name} value={pet.id} />
            ))}
          </PickerIOS>
        ) : (
          <Picker
            style={defaultStyles.picker}
            selectedValue={selectedPetId}
            onValueChange={setSelectedPetId}
          >
            {pets.map((pet, id) => (
              <Picker.Item key={id} label={pet.name} value={pet.id} />
            ))}
          </Picker>
        )}
      </View>
    </>
  );

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
              {petId === null && PetPicker()}
              <Text style={defaultStyles.inputTopText}>Nome da vacina</Text>
              <TextInput
                style={defaultStyles.input}
                autoCorrect={false}
                placeholderTextColor={colors.gray}
                onChangeText={setNameVaccine}
                value={nameVaccine}
              />
              <Text style={defaultStyles.inputTopText}>Data da dose</Text>
              <TextInput
                style={defaultStyles.input}
                onChangeText={(res) => setDoseData(formatDate(res))}
                value={doseData}
                placeholder="dd/mm/aaaa"
                keyboardType="numeric"
              />
              <Text style={defaultStyles.inputTopText}>
                Data da próxima dose
              </Text>
              <TextInput
                style={defaultStyles.input}
                onChangeText={(res) => setDoseRepeatData(formatDate(res))}
                value={doseRepeatData}
                placeholder="dd/mm/aaaa"
                keyboardType="numeric"
              />
              {erro !== "" && <Alert message={erro} />}
              {vaccineRequest ? (
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
