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
import { Stepper, Alert, GoBackHeader, WaterMark } from "@components";
import { validateUsername, validateEmail } from "@utilites";

import styles from "./styles.js";

export const UserInformation = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
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
    if (username && email) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [username, email]);

  const submitHandler = () => {
    setErro("");
    if (!validateEmail(email)) {
      setErro("Email inválido. Verifique o formato do email");
      return;
    }
    if (!validateUsername(username)) {
      setErro("Username deverá apenas letras e números");
      return;
    }
    navigation.navigate("password");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.page}>
        <GoBackHeader navigate="login" />
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {!isKeyboardVisible && <WaterMark orientation="left" />}
          <View style={styles.content}>
            <View style={styles.formCadastro}>
              <Text style={styles.inputTopText}>Email</Text>
              <TextInput
                keyboardType="email-address"
                autoCorrect={false}
                style={styles.input}
                onChangeText={setEmail}
                value={email}
              />
              <Text style={styles.inputTopText}>Username</Text>
              <TextInput
                style={styles.input}
                onChangeText={setUsername}
                value={username}
              />
              {erro !== "" && <Alert message={erro} />}
              <TouchableOpacity
                style={
                  buttonDisabled ? styles.nextButtoDisabled : styles.nextButton
                }
                disabled={buttonDisabled}
                onPress={submitHandler}
              >
                <Text style={styles.nextText}>Próximo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
        <Stepper step={1} nuSteps={3} />
      </View>
    </TouchableWithoutFeedback>
  );
};
