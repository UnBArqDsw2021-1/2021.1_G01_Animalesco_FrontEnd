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
import styles from "./styles.js";
import colors from "@assets/styles/colors";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loadingLoginRequest, setLoadingLoginRequest] = useState(false);
  const navigation = useNavigation();
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
    <TouchableOpacity
      style={
        buttonDisabled ? styles.contentButtonDisabled : styles.contentButton
      }
      disabled={buttonDisabled || loadingLoginRequest}
      onPress={loginHandler}
    >
      <Text style={styles.button}>ENTRAR</Text>
    </TouchableOpacity>
  );

  const handleSignUp = () => {
    navigation.navigate("userinformation");
  };

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
            // onPressOut={}
            onChangeText={(email) => setEmail(email)}
            value={email}
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
          <View style={styles.viewBtn}>
            <TouchableOpacity style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordtext}>Esqueceu a senha?</Text>
            </TouchableOpacity>
            <View style={styles.login}>
              {loadingLoginRequest
                ? renderLoadingIndicator()
                : renderLoginButton()}
            </View>
            <TouchableOpacity style={styles.signUP} onPress={handleSignUp}>
              <Text style={styles.signupText}>Criar Conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default Login;
