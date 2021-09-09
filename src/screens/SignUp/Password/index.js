import React, { useState, useEffect } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles.js";
import colors from "@assets/styles/colors";

import Stepper from "@components/Stepper.js";

const Password = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigation = useNavigation();
  setStatusBarStyle("dark");

  useEffect(() => {
    if (password && passwordConfirmation) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [password, passwordConfirmation]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.page}>
        <View style={styles.goBackButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate("userinformation")}
          >
            <AntDesign name="arrowleft" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>
        <View
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
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
              <TouchableOpacity
                style={
                  buttonDisabled ? styles.nextButtoDisabled : styles.nextButton
                }
                onPress={() => navigation.navigate("photo")}
                disabled={buttonDisabled}
              >
                <Text style={styles.nextText}>Próximo</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <View style={styles.logoImageContent}>
            <Image
              style={styles.logoImage}
              source={require("@assets/images/orange_mask_logo.png")}
            />
          </View>
        </View>
        <View style={styles.stepper}>
          <Stepper step={2} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Password;
