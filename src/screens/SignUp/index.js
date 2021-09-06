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
  Button,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import styles from "./styles.js";
import colors from "../../../assets/styles/colors";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.page}>
      {/* Tem que colocar essa imagem para ser o botão de voltar */}
      {/* <TouchableOpacity style={styles.goBackButton}>
        <Image
          style={styles.goBackImage}
          source={require("../../../assets/images/arrow_left.png")}
        />
      </TouchableOpacity> */}
      <View style={styles.container}>
        <Image
          style={styles.logoImage}
          source={require("../../../assets/images/orange_logo.png")}
        />
        <View style={styles.content}>
          <View style={styles.formCadastro}>
            <Text style={styles.inputTopText}>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
            />
            <Text style={styles.inputTopText}>Senha</Text>
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
            />
            <TouchableOpacity style={styles.nextButton}>
              <Text style={styles.nextText}>Próximo</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text>
              {/* Aqui vão as bolinhas demonstrando em qual etapa o processo está */}
              . . . .
            </Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
