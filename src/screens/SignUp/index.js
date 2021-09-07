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
  
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles from "./styles.js";
import colors from "../../../assets/styles/colors";

import Stepper from "../../components/Stepper.js";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.page}>
       <TouchableOpacity>
      <AntDesign
            name="arrowleft"
            size={24}
            color={colors.primary}
            style={styles.icon}
          />
          </TouchableOpacity>
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
            <Text style={styles.inputTopText}>Nome</Text>
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
            />
            <TouchableOpacity style={styles.nextButton}>
              <Text style={styles.nextText}>Próximo</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.stepper}>
            <Stepper step={1} />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
