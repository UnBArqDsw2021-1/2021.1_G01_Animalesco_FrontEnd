import React, { useState, useEffect } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import styles from "./styles.js";
import colors from "@assets/styles/colors";

import { Stepper, GoBackHeader, WaterMark, Alert } from "@components";
import { useService, petService } from "@services";
import { formatDateToRequest } from "@utilites";

export const PetPhoto = () => {
  const [image, setImage] = useState(null);
  const [erro, setErro] = useState("");
  const [newPetRequest, setNewPetRequest] = useState();

  const navigation = useNavigation();
  const routes = useRoute();
  const { name, birthDate, breeds, color, sex } = routes.params;

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

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const newPetHandler = async () => {
    setErro("");
    setNewPetRequest(true);

    data = {
      name: name,
      sex: sex,
      breed: breeds,
      birth_date: formatDateToRequest(birthDate),
      color: color,
    };

    const response = await useService(petService, "createPet", [data]);

    if (response.error) {
      setErro("Error ao registrar um novo pet. Tente novamente mais tarde");
      setNewPetRequest(false);
      return;
    }

    setNewPetRequest(false);
    navigation.navigate("home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.page}>
        <GoBackHeader />
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
              {erro !== "" && <Alert message={erro} />}
              {newPetRequest ? (
                <ActivityIndicator size="large" color={colors.light} />
              ) : (
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={newPetHandler}
                >
                  <Text style={styles.submitText}>Registrar novo pet</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
        <Stepper step={4} nuSteps={4} />
      </View>
    </TouchableWithoutFeedback>
  );
};
