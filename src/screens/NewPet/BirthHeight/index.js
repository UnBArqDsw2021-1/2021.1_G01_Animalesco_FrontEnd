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

import { Stepper, Alert } from "@components";
import { Header, WaterMark } from "../components/index";

export const BirthHeight = () => {
  const [birthDate, setBirthDate] = useState("");
  const [petHeigth, setPetHeigth] = useState("");
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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.page}>
        <Header navigate="petphoto" />
        <View style={styles.container}>
          <KeyboardAvoidingView
            style={styles.content}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.formCadastro}>
              <Text style={styles.inputTopText}>Data de nascimento</Text>
              <TextInput
                style={styles.input}
                onChangeText={setBirthDate}
                value={birthDate}
                secureTextEntry={true}
              />
              <Text style={styles.inputTopText}>Altura</Text>
              <TextInput
                style={styles.input}
                onChangeText={setPetHeigth}
                value={petHeigth}
                secureTextEntry={true}
              />
              <TouchableOpacity
                style={
                  buttonDisabled ? styles.nextButtoDisabled : styles.nextButton
                }
                disabled={buttonDisabled}
                onPress={() => navigation.navigate("petphoto")}
              >
                <Text style={styles.nextText}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          {!isKeyboardVisible && <WaterMark orientation="left" />}
        </View>
        <Stepper step={4} nuSteps={4} />
      </View>
    </TouchableWithoutFeedback>
  );
};
