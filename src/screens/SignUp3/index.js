import React, { useState } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles.js";
import colors from "../../../assets/styles/colors";

import Stepper from "../../components/Stepper.js";

const SignUp3 = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();
  setStatusBarStyle("dark");

  return (
    <KeyboardAvoidingView
      style={styles.page}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.goBackButton}>
        <TouchableOpacity onPress={() => navigation.navigate("signUp2")}>
          <AntDesign
            name="arrowleft"
            size={24}
            color={colors.primary}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              <Text style={styles.inputTopText}>Nome</Text>
              <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
              />
              <TouchableOpacity style={styles.nextButton}>
                <Text style={styles.nextText}>Finalizar Cadastro</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.stepper}>
              <Stepper step={3} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUp3;
