import React, { useState, useEffect } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./styles.js";

import { Stepper, GoBackHeader, WaterMark, Alert } from "@components";
import {
  validateDate,
  formatDate,
  validatePetBirthDay,
  validateHeight,
} from "@utilites";

export const BirthHeight = () => {
  const [birthDate, setBirthDate] = useState("");
  const [petHeigth, setPetHeigth] = useState("");
  const [erro, setErro] = useState("");
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
    if (birthDate && petHeigth) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [birthDate, petHeigth]);

  const submitHandler = () => {
    setErro("");
    if (!validateDate(birthDate) || !validatePetBirthDay(birthDate)) {
      setErro("Data inválida");
      return;
    }
    if (!validateHeight(petHeigth)) {
      setErro("Altura inválida");
      return;
    }
    navigation.navigate("petphoto");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.page}>
        <GoBackHeader />
        <View style={styles.container}>
          <KeyboardAvoidingView
            style={styles.content}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.formCadastro}>
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
              <Text style={styles.inputTopText}>Altura (m)</Text>
              <TextInput
                style={styles.input}
                onChangeText={setPetHeigth}
                value={petHeigth}
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
          </KeyboardAvoidingView>
          {!isKeyboardVisible && <WaterMark orientation="left" />}
        </View>
        <Stepper step={3} nuSteps={4} />
      </View>
    </TouchableWithoutFeedback>
  );
};
