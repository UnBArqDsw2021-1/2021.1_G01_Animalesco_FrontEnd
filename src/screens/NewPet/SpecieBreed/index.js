import React, { useState, useEffect } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Picker } from "@react-native-community/picker";
import defaultStyles from "@screens/styles.js";

import { Stepper, GoBackHeader, WaterMark } from "@components";
import { useService, specieService, breedService } from "@services";

export const SpecieBreed = () => {
  const [breeds, setBreeds] = useState(-1);
  const [allBreed, setAllBreed] = useState([{ name: "--", id: -1 }]);
  const [species, setSpecies] = useState(-1);
  const [allSpecies, setAllSpecies] = useState([{ name: "--", id: -1 }]);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const navigation = useNavigation();
  const routes = useRoute();
  const { name, birthDate } = routes.params;

  setStatusBarStyle("dark");

  useEffect(() => {
    async function loadAllSpecie() {
      const speciesList = await useService(specieService, "getAllSpecie");
      setAllSpecies(allSpecies.concat(speciesList.data));
    }
    if (allSpecies.length === 1) {
      loadAllSpecie();
    }
  }, [allSpecies]);

  useEffect(() => {
    async function loadAllBreed() {
      const data = {
        specie_id: species,
      };

      const breedsList = await useService(breedService, "getBreedsBySpecie", [
        data,
      ]);
      setAllBreed([{ name: "--", id: -1 }].concat(breedsList.data));
    }
    if (species !== -1) {
      loadAllBreed();
    } else {
      setAllBreed([{ name: "--", id: -1 }]);
    }
  }, [species]);

  useEffect(() => {
    if (breeds !== -1 && species !== -1) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [breeds, species]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={defaultStyles.page}>
        <GoBackHeader />
        <View style={defaultStyles.container}>
          <KeyboardAvoidingView
            style={defaultStyles.content}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={defaultStyles.formCadastro}>
              <Text style={defaultStyles.inputTopText}>Espécie</Text>
              <View style={defaultStyles.pickerContent}>
                <Picker
                  style={defaultStyles.picker}
                  selectedValue={species}
                  onValueChange={setSpecies}
                >
                  {allSpecies.map((specie, id) => (
                    <Picker.Item
                      key={id}
                      label={specie.name}
                      value={specie.id}
                    />
                  ))}
                </Picker>
              </View>
              <Text style={defaultStyles.inputTopText}>Raça</Text>
              <View style={defaultStyles.pickerContent}>
                <Picker
                  style={defaultStyles.picker}
                  selectedValue={breeds}
                  onValueChange={setBreeds}
                  enabled={species !== -1 ? true : false}
                >
                  {allBreed.map((breed, id) => (
                    <Picker.Item key={id} label={breed.name} value={breed.id} />
                  ))}
                </Picker>
              </View>
              <TouchableOpacity
                style={
                  buttonDisabled
                    ? defaultStyles.buttonDisabled
                    : defaultStyles.button
                }
                onPress={() =>
                  navigation.navigate("colorsex", {
                    name,
                    birthDate,
                    breeds,
                  })
                }
                disabled={buttonDisabled}
              >
                <Text style={defaultStyles.textButton}>Próximo</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          {!isKeyboardVisible && <WaterMark orientation="right" />}
        </View>
        <Stepper step={2} nuSteps={4} />
      </View>
    </TouchableWithoutFeedback>
  );
};
