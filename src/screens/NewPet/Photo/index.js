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
import defaultStyles from "@screens/styles.js";
import colors from "@assets/styles/colors";

import { Stepper, GoBackHeader, WaterMark, Alert } from "@components";
import { useService, petService } from "@services";
import { formatDateToRequest } from "@utilites";
import { usePets } from "@store";

export const PetPhoto = () => {
  const [image, setImage] = useState(null);
  const [erro, setErro] = useState("");
  const [newPetRequest, setNewPetRequest] = useState();
  const { pets, setPets } = usePets();

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

    setPets([...pets, response.data]);
    setNewPetRequest(false);
    navigation.navigate("home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={defaultStyles.page}>
        <GoBackHeader />
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <WaterMark orientation="right" />
          <View style={styles.content}>
            <View style={defaultStyles.formCadastro}>
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={defaultStyles.imageProfile}
                />
              ) : (
                <View style={defaultStyles.iconPhoto}>
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
                  style={defaultStyles.button}
                  onPress={newPetHandler}
                >
                  <Text style={defaultStyles.textButton}>
                    Registrar novo pet
                  </Text>
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
