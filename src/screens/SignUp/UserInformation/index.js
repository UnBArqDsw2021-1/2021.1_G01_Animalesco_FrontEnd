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

import defaultStyles from "@screens/styles.js";
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
    navigation.navigate("password", { email, username });
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
              <Text style={defaultStyles.inputTopText}>Email</Text>
              <TextInput
                keyboardType="email-address"
                autoCorrect={false}
                style={defaultStyles.input}
                onChangeText={setEmail}
                value={email}
              />
              <Text style={defaultStyles.inputTopText}>Username</Text>
              <TextInput
                style={defaultStyles.input}
                onChangeText={setUsername}
                value={username}
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
        <Stepper step={1} nuSteps={3} />
      </View>
    </TouchableWithoutFeedback>
  );
};
