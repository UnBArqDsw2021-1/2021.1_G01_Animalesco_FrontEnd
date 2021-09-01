import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  View,
  Image,
  Text,
  TextInput,
  ActivityIndicator,
  Button,
  Keyboard,
} from "react-native";
import styles from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loadingLoginRequest, setLoadingLoginRequest] = useState(false);

  useEffect(() => {
    if (email && password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [email, password]);

  const loginHandler = async () => {
    setLoadingLoginRequest(true);
    console.log(email);
    console.log(password);
    const data = { email: email.trim(), password };
    Keyboard.dismiss;
    setLoadingLoginRequest(true);
    console.log(data);
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
      disabled={buttonDisabled || loadingLoginRequest}
    />
  );

  return (
    <KeyboardAvoidingView>
      {/* <View style={styles.logo}>
        <Image
          style={styles.logoImage}
          source={require("../../../assets/images/logo.png")}
        />
      </View> */}
      <View>
        <Text>
          <TextInput
            keyboardType="email-address"
            style={styles.textInput}
            placeholder="Email"
            autoCorrect={false}
            placeholderTextColor="#FFF"
            onChangeText={(email) => setEmail(email)}
            value={email}
          />
          <TextInput
            style={styles.textInput}
            secureTextEntry
            placeholderTextColor="#FFF"
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={(password) => setPassword(password)}
            value={password}
          />
        </Text>
      </View>
      <View style={styles.viewBtn}>
        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate("forgotPassword");
          }}
          style={styles.forgotPasswordButton}
        >
          <Text style={styles.forgotPasswordtext}>Esqueceu a senha?</Text>
        </TouchableOpacity> */}
        <View style={styles.login}>
          {loadingLoginRequest ? renderLoadingIndicator() : renderLoginButton()}
        </View>
        {/* <TouchableOpacity
          style={styles.signUP}
          onPress={() => {
            navigation.navigate("location");
          }}
        >
          <Text style={styles.signupText}>Criar Conta</Text>
        </TouchableOpacity> */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
