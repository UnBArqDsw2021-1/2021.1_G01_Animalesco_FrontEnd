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
import defaultStyles from "@screens/styles.js";

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
      <View style={defaultStyles.page}>
        <GoBackHeader />
        <View style={defaultStyles.container}>
          <KeyboardAvoidingView
            style={defaultStyles.content}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={defaultStyles.formCadastro}>
              <Text style={defaultStyles.inputTopText}>Cor</Text>
              <TextInput
                style={defaultStyles.input}
                onChangeText={setColor}
                value={color}
              />
              <Text style={defaultStyles.inputTopText}>Sexo</Text>
              <View style={defaultStyles.pickerContent}>
                <Picker
                  style={defaultStyles.picker}
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
                  buttonDisabled
                    ? defaultStyles.buttonDisabled
                    : defaultStyles.button
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
                <Text style={defaultStyles.textButton}>Próximo</Text>
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
