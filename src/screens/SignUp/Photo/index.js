import React, { useState, useEffect } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import styles from "./styles.js";
import colors from "@assets/styles/colors";

import { Stepper } from "@components";
import { Header, WaterMark } from "../components/index";

export const Photo = () => {
  const [image, setImage] = useState(null);

  setStatusBarStyle("dark");

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const imagePickerCall = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.page}>
        <Header navigate="password" />
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <WaterMark orientation="right" />
          <View style={styles.content}>
            <View style={styles.formCadastro}>
              {image ? (
                <Image source={{ uri: image }} style={styles.imageProfile} />
              ) : (
                <View style={styles.iconPhoto}>
                  <MaterialIcons
                    name="photo-camera"
                    size={42}
                    color={colors.secondaryBlue}
                    onPress={imagePickerCall}
                  />
                </View>
              )}
              <TouchableOpacity style={styles.nextButton}>
                <Text style={styles.nextText}>Finalizar Cadastro</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
        <Stepper step={3} />
      </View>
    </TouchableWithoutFeedback>
  );
};
