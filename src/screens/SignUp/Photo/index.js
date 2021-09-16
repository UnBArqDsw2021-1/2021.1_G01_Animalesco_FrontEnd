import React, { useState, useEffect } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  View,
  Image,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import styles from "./styles.js";
import defaultStyles from "@screens/styles.js";
import colors from "@assets/styles/colors";

import { Stepper, GoBackHeader, WaterMark, Alert } from "@components";
import { userService, useService } from "@services";

export const Photo = () => {
  const [signUpRequest, setSignUpRequest] = useState(false);
  const [erro, setErro] = useState("");
  const [image, setImage] = useState(null);

  const navigation = useNavigation();
  const routes = useRoute();
  const { email, username, password, passwordConfirmation } = routes.params;

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

  const signUpHandler = async () => {
    setErro("");
    setSignUpRequest(true);

    data = {
      username: username,
      password: password,
      re_password: passwordConfirmation,
      email: email,
    };

    const response = await useService(userService, "createUser", [data]);

    if (response.error) {
      setErro("Error no cadastro. Tente novamente mais tarde");
      setSignUpRequest(false);
      return;
    }

    setSignUpRequest(false);
    navigation.navigate("login");
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
              {signUpRequest ? (
                <ActivityIndicator size="large" color={colors.light} />
              ) : (
                <TouchableOpacity
                  style={defaultStyles.button}
                  onPress={signUpHandler}
                >
                  <Text style={defaultStyles.textButton}>
                    Finalizar Cadastro
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
        <Stepper step={3} nuSteps={3} />
      </View>
    </TouchableWithoutFeedback>
  );
};
