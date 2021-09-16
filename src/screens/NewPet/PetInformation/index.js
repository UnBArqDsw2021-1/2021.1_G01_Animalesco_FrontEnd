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
      <View style={styles.page}>
        <GoBackHeader />
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {!isKeyboardVisible && <WaterMark orientation="left" />}
          <View style={styles.content}>
            <View style={styles.formCadastro}>
              <Text style={styles.inputTopText}>Nome</Text>
              <TextInput
                keyboardType="email-address"
                autoCorrect={false}
                style={styles.input}
                onChangeText={setName}
                value={name}
              />
              <Text style={styles.inputTopText}>Data de nascimento</Text>
              <TextInput
                style={styles.input}
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
                  buttonDisabled ? styles.nextButtonDisabled : styles.nextButton
                }
                disabled={buttonDisabled}
                onPress={submitHandler}
              >
                <Text style={styles.nextText}>Próximo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
        <Stepper step={1} nuSteps={4} />
      </View>
    </TouchableWithoutFeedback>
  );
};
