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
import { Picker, PickerIOS } from "@react-native-community/picker";
import { useNavigation, useRoute } from "@react-navigation/native";
import colors from "@assets/styles/colors";

import styles from "./styles";
import defaultStyles from "@screens/styles.js";

import { GoBackHeader } from "@components";
import { useService, vetVisitService } from "@services";
import { usePets } from "@store";

export const Description = () => {
  const [erro, setErro] = useState("");
  const [newVisitRequest, setNewVisitRequest] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [vetClinic, setVetClinic] = useState("");
  const [description, setDescription] = useState(null);
  const [selectedPetId, setSelectedPetId] = useState();

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
    if (vetClinic) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [vetClinic]);

  const newVisitHandler = async () => {
    setErro("");
    setNewVisitRequest(true);

    const data = {
      pet_id: selectedPetId,
      vet_clinic: vetClinic,
      description: description !== "" ? description : null,
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
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.content}>
            {petId === null && PetPicker()}

            <Text style={defaultStyles.inputTopText}>Nome da Clínica</Text>
            <TextInput
              autoCorrect={false}
              maxLength={100}
              style={defaultStyles.input}
              onChangeText={setVetClinic}
              value={vetClinic}
            />
            <Text style={defaultStyles.inputTopText}>Descrição</Text>
            <TextInput
              autoCorrect={false}
              multiline
              numberOfLines={8}
              maxLength={350}
              style={styles.descriptionInput}
              onChangeText={setDescription}
              value={description}
            />

            {erro !== "" && <Alert message={erro} />}
            {newVisitRequest ? (
              <ActivityIndicator size="large" color={colors.light} />
            ) : (
              <TouchableOpacity
                style={buttonDisabled ? styles.buttonDisabled : styles.button}
                disabled={buttonDisabled}
                onPress={newVisitHandler}
              >
                <Text style={styles.buttonText}>Próximo</Text>
              </TouchableOpacity>
            )}
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
