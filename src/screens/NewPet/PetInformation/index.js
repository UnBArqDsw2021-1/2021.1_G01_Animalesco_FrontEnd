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
import { Stepper, GoBackHeader, WaterMark } from "@components";

import styles from "./styles.js";

export const PetInformation = () => {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
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
    if (species && name) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [species, name]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.page}>
        <GoBackHeader navigate="home" />
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
              <Text style={styles.inputTopText}>Espécie</Text>
              <TextInput
                style={styles.input}
                onChangeText={setSpecies}
                value={species}
              />
              <TouchableOpacity
                style={
                  buttonDisabled ? styles.nextButtoDisabled : styles.nextButton
                }
                disabled={buttonDisabled}
                onPress={() => navigation.navigate("breed")}
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