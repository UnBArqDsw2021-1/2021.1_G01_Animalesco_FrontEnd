import React, { useState, useEffect } from "react";
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
import colors from "@assets/styles/colors";

import styles from "./styles";
import defaultStyles from "@screens/styles.js";

import { GoBackHeader } from "@components";
import {
  useService,
  vetVisitService,
  userService,
  petService,
} from "@services";
import { useUser, usePets } from "@store";
import { validateDate, formatDate, formatDateToRequest } from "@utilites";

export const VetVisit = () => {
  const [erro, setErro] = useState("");
  const [newVisitRequest, setNewVisitRequest] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const { user, setUser } = useUser();
  const { pets, setPets } = usePets();

  const [userPets, setUserPets] = useState([{ name: "--", id: -1 }]);
  const [pet, setPet] = useState(null);

  const [vetClinic, setVetClinic] = useState("");
  const [description, setDescription] = useState(null);
  const [visitDate, setVisitDate] = useState("");
  const [nextVisitDate, setNextVisitDate] = useState(null);

  useEffect(() => {
    if (!user) {
      getUser();
    }
    getPets();
  }, []);

  useEffect(() => {
    if (vetClinic && visitDate) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [vetClinic, visitDate]);

  const getUser = async () => {
    const response = await useService(userService, "getUser");
    setUser(response.data);
  };

  const getPets = async () => {
    const response = await useService(petService, "getAllPet");
    setPets(response.data);
    setUserPets([...userPets, ...pets]);
  };

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
      pet_id: pet.id,
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
            <Text style={defaultStyles.inputTopText}>Pet</Text>
            <View style={defaultStyles.pickerContent}>
              {Platform.OS === "ios" ? (
                <PickerIOS
                  style={defaultStyles.picker}
                  selectedValue={pet}
                  onValueChange={setPet}
                >
                  {userPets.map((pet, id) => (
                    <PickerIOS.Item key={id} label={pet.name} value={pet.id} />
                  ))}
                </PickerIOS>
              ) : (
                <Picker
                  style={defaultStyles.picker}
                  selectedValue={pet}
                  onValueChange={setPet}
                >
                  {pets.map((pet, id) => (
                    <Picker.Item key={id} label={pet.name} value={pet.id} />
                  ))}
                </Picker>
              )}
            </View>

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
                style={buttonDisabled ? styles.buttonDisabled : styles.button}
                disabled={buttonDisabled}
                onPress={newVisitHandler}
              >
                <Text style={styles.buttonText}>Cadastrar</Text>
              </TouchableOpacity>
            )}
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
