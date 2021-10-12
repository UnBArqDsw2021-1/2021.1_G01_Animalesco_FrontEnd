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
} from "react-native";
import { Picker, PickerIOS } from "@react-native-community/picker";
import { useNavigation, useRoute } from "@react-navigation/native";

import styles from "./styles";
import defaultStyles from "@screens/styles.js";

import { GoBackHeader } from "@components";
import { usePets } from "@store";

export const Description = () => {
  const { pets } = usePets();

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [vetClinic, setVetClinic] = useState("");
  const [description, setDescription] = useState(null);
  const [selectedPetId, setSelectedPetId] = useState(pets[0].id);

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

              <TouchableOpacity
                style={
                  buttonDisabled
                    ? defaultStyles.buttonDisabled
                    : defaultStyles.button
                }
                disabled={buttonDisabled}
                onPress={() =>
                  navigation.navigate("dateVisit", {
                    selectedPetId,
                    vetClinic,
                    description,
                  })
                }
              >
                <Text style={defaultStyles.textButton}>Próximo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
