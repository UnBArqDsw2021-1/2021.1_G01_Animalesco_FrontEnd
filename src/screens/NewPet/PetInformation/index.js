import React, { useState, useEffect } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
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
import { Stepper, GoBackHeader, WaterMark, Alert } from "@components";
import { validateDate, formatDate, validatePetBirthDay } from "@utilites";

import defaultStyles from "@screens/styles.js";
import styles from "./styles.js";

export const PetInformation = () => {
  const [erro, setErro] = useState("");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const navigation = useNavigation();

  setStatusBarStyle("dark");

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

  useEffect(() => {
    if (birthDate && name) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [birthDate, name]);

  const submitHandler = () => {
    setErro("");
    if (!validateDate(birthDate) || !validatePetBirthDay(birthDate)) {
      setErro("Data inválida");
      return;
    }
    navigation.navigate("speciebreed", { name, birthDate });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={defaultStyles.page}>
        <GoBackHeader />
        <KeyboardAvoidingView
          style={defaultStyles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {!isKeyboardVisible && <WaterMark orientation="left" />}
          <View style={defaultStyles.content}>
            <View style={styles.formCadastro}>
              <Text style={defaultStyles.inputTopText}>Nome</Text>
              <TextInput
                keyboardType="email-address"
                autoCorrect={false}
                style={defaultStyles.input}
                onChangeText={setName}
                value={name}
              />
              <Text style={defaultStyles.inputTopText}>Data de nascimento</Text>
              <TextInput
                style={defaultStyles.input}
                onChangeText={(value) => {
                  setBirthDate(formatDate(value));
                }}
                value={birthDate}
                placeholder="dd/mm/aaaa"
                keyboardType="numeric"
              />
              {erro !== "" && <Alert message={erro} />}
              <TouchableOpacity
                style={
                  buttonDisabled
                    ? defaultStyles.buttonDisabled
                    : defaultStyles.button
                }
                disabled={buttonDisabled}
                onPress={submitHandler}
              >
                <Text style={defaultStyles.textButton}>Próximo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
        <Stepper step={1} nuSteps={4} />
      </View>
    </TouchableWithoutFeedback>
  );
};
