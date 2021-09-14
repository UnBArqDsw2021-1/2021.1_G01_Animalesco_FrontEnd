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

import { validatePassword } from "@utilites";
import { Stepper, Alert, GoBackHeader, WaterMark } from "@components";

export const Password = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
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
    if (password && passwordConfirmation) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [password, passwordConfirmation]);

  const submitHandler = () => {
    setErro("");
    if (!validatePassword(password)) {
      setErro("Senha deverá ter entre 5 e 25 caracteres");
      return;
    }
    if (password !== passwordConfirmation) {
      setErro(
        "Senha de confirmação diferente. Os dois campos devem conter a mesma senha"
      );
      return;
    }
    navigation.navigate("photo");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.page}>
        <GoBackHeader navigate="userinformation" />
        <View style={styles.container}>
          <KeyboardAvoidingView
            style={styles.content}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.formCadastro}>
              <Text style={styles.inputTopText}>Senha</Text>
              <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
              />
              <Text style={styles.inputTopText}>Confirmação da senha</Text>
              <TextInput
                style={styles.input}
                onChangeText={setPasswordConfirmation}
                value={passwordConfirmation}
                secureTextEntry={true}
              />
              {erro !== "" && <Alert message={erro} />}
              <TouchableOpacity
                style={
                  buttonDisabled ? styles.nextButtoDisabled : styles.nextButton
                }
                onPress={submitHandler}
                disabled={buttonDisabled}
              >
                <Text style={styles.nextText}>Próximo</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          {!isKeyboardVisible && <WaterMark orientation="left" />}
        </View>
        <Stepper step={2} />
      </View>
    </TouchableWithoutFeedback>
  );
};
