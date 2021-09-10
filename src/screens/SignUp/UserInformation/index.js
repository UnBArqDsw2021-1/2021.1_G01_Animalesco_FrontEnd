import React, { useState, useEffect } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  View,
  Image,
  Text,
  Keyboard,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles.js";
import colors from "@assets/styles/colors";

import Stepper from "@components/Stepper.js";

const UserInformation = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
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
    if (name && email) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [name, email]);

  const WaterMark = () => (
    <View style={styles.logoImageContent}>
      <Image
        style={styles.logoImage}
        source={require("@assets/images/orange_mask_logo.png")}
      />
    </View>
  );

  return (
    <TouchableWithoutFeedback>
      <View style={styles.page} onPress={Keyboard.dismiss}>
        <View style={styles.goBackButton}>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <AntDesign name="arrowleft" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {!isKeyboardVisible && <WaterMark />}
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
              <Text style={styles.inputTopText}>Nome</Text>
              <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
              />
              <TouchableOpacity
                style={
                  buttonDisabled ? styles.nextButtoDisabled : styles.nextButton
                }
                disabled={buttonDisabled}
                onPress={() => navigation.navigate("password")}
              >
                <Text style={styles.nextText}>Próximo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.stepper}>
          <Stepper step={1} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default UserInformation;
