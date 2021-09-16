import React, { useState, useEffect } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  View,
  Image,
  Text,
  TextInput,
  ActivityIndicator,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles.js";
import defaultStyles from "@screens/styles.js";
import colors from "@assets/styles/colors";

import { validateUsername, validatePassword } from "@utilites";
import { Alert } from "@components";
import { loginService, useService } from "@services";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loadingLoginRequest, setLoadingLoginRequest] = useState(false);
  const navigation = useNavigation();
  setStatusBarStyle("light");

  useEffect(() => {
    if (username && password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [username, password, buttonDisabled]);

  const loginHandler = async () => {
    setErro("");
    if (!validateUsername(username) || !validatePassword(password)) {
      setErro("Senha ou username incorretos");
      return;
    }

    setLoadingLoginRequest(true);
    const data = { username, password };
    Keyboard.dismiss;
    setLoadingLoginRequest(true);
    // aqui entrará o post para a api

    const response = await useService(loginService, "getToken", [data]);

    if (response.error) {
      setErro("Senha ou username incorretos");
      setLoadingLoginRequest(false);
      return;
    } else {
      try {
        await AsyncStorage.setItem(
          "@animalesco:auth_token",
          response.data.auth_token
        );
      } catch (e) {
        setErro("Erro ao efetuar o login, tente novamente");
        setLoadingLoginRequest(false);
        return;
      }
    }

    setLoadingLoginRequest(false);
    navigation.navigate("home");
  };

  const renderLoadingIndicator = () => (
    <ActivityIndicator size="large" color={colors.light} />
  );

  const renderLoginButton = () => (
    <TouchableOpacity
      style={
        buttonDisabled ? defaultStyles.buttonDisabled : defaultStyles.button
      }
      disabled={buttonDisabled || loadingLoginRequest}
      onPress={loginHandler}
    >
      <Text style={defaultStyles.textButton}>ENTRAR</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      style={styles.container}
      start={[0, 0]}
      end={[1.5, 0.8]}
      colors={[colors.primary, colors.secondary]}
    >
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Image
          style={styles.logoImage}
          source={require("@assets/images/logo_without_background.png")}
        />
        <View style={styles.inputContent}>
          <Text style={styles.inputTopText}>Username</Text>
          <TextInput
            style={styles.textInput}
            autoCorrect={false}
            placeholderTextColor={colors.gray}
            onChangeText={(username) => setUsername(username)}
            value={username}
          />
          <Text style={styles.inputTopText}>Senha</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry
            placeholderTextColor={colors.gray}
            autoCorrect={false}
            onChangeText={(password) => setPassword(password)}
            value={password}
          />
          {erro !== "" && <Alert message={erro} />}
          <View style={styles.viewBtn}>
            {/* <TouchableOpacity style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordtext}>Esqueceu a senha?</Text>
            </TouchableOpacity> */}
            <View style={styles.login}>
              {loadingLoginRequest
                ? renderLoadingIndicator()
                : renderLoginButton()}
            </View>
            <TouchableOpacity
              style={styles.signUP}
              onPress={() => navigation.navigate("userinformation")}
            >
              <Text style={styles.signupText}>Criar Conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};
