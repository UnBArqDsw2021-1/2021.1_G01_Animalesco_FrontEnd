import React, { useState, useEffect } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  View,
  Image,
  Text,
  TextInput,
  ActivityIndicator,
  Button,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles.js";
import colors from "../../../assets/styles/colors";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loadingLoginRequest, setLoadingLoginRequest] = useState(false);
  setStatusBarStyle("light");

  useEffect(() => {
    if (email && password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [email, password, buttonDisabled]);

  const loginHandler = async () => {
    setLoadingLoginRequest(true);
    const data = { email: email.trim(), password };
    Keyboard.dismiss;
    setLoadingLoginRequest(true);
    // aqui entrará o post para a api

    // await useService(SessionService, "signIn", [data]);
    setLoadingLoginRequest(false);
  };

  const renderLoadingIndicator = () => (
    <ActivityIndicator size="large" color={colors.light} />
  );

  const renderLoginButton = () => (
    <Button
      large
      type="white"
      title="ENTRAR"
      press={loginHandler}
      color={colors.secondaryBlue}
      disabled={buttonDisabled || loadingLoginRequest}
    />
  );

  return (
    <LinearGradient
      style={styles.container}
      start={[0, 0]}
      end={[1.5, 0.8]}
      colors={[colors.primary, colors.secondary]}
    >
      <KeyboardAvoidingView style={styles.content}>
        <Image
          style={styles.logoImage}
          source={require("../../../assets/images/logo_without_background.png")}
        />
        <View style={styles.inputContent}>
          <TextInput
            keyboardType="email-address"
            style={styles.textInput}
            placeholder="Email"
            autoCorrect={false}
            placeholderTextColor={colors.gray}
            onChangeText={(email) => setEmail(email)}
            value={email}
          />
          <TextInput
            style={styles.textInput}
            secureTextEntry
            placeholderTextColor={colors.gray}
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={(password) => setPassword(password)}
            value={password}
          />
          <View style={styles.viewBtn}>
            <TouchableOpacity style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordtext}>Esqueceu a senha?</Text>
            </TouchableOpacity>
            <View style={styles.login}>
              {loadingLoginRequest
                ? renderLoadingIndicator()
                : renderLoginButton()}
            </View>
            <TouchableOpacity style={styles.signUP}>
              <Text style={styles.signupText}>Criar Conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default Login;
