import React, { useState, useEffect } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Picker } from "@react-native-community/picker";
import styles from "./styles.js";

import { Stepper, GoBackHeader, WaterMark } from "@components";

export const ColorSex = () => {
  const [color, setColor] = useState("");
  const [sex, setSex] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const navigation = useNavigation();
  const routes = useRoute();
  const { name, birthDate, breeds } = routes.params;

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
    if (sex && color) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [sex, color]);

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
              <Text style={styles.inputTopText}>Cor</Text>
              <TextInput
                keyboardType="email-address"
                autoCorrect={false}
                style={styles.input}
                onChangeText={setColor}
                value={color}
              />
              <Text style={styles.inputTopText}>Sexo</Text>
              <View style={styles.pickerContent}>
                <Picker
                  style={styles.picker}
                  selectedValue={sex}
                  onValueChange={setSex}
                >
                  <Picker.Item label={"--"} value={""} />
                  <Picker.Item label={"Macho"} value={"M"} />
                  <Picker.Item label={"Fêmea"} value={"F"} />
                </Picker>
              </View>
              <TouchableOpacity
                style={
                  buttonDisabled ? styles.nextButtonDisabled : styles.nextButton
                }
                disabled={buttonDisabled}
                onPress={() =>
                  navigation.navigate("petphoto", {
                    name,
                    birthDate,
                    breeds,
                    color,
                    sex,
                  })
                }
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
