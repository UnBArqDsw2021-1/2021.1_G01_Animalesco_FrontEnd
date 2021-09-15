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
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles.js";
import colors from "@assets/styles/colors";


const RegisterCaccine = () =>{
    const [nameVacina, setNomeVacina] = useState("");
    const [dataDose, setDataDose] = useState("");
    const [dataRepetirDose, setDataRepetirDose] = useState("");

    const navigation = useNavigation();
  setStatusBarStyle("dark");
    

return (

    <View style= {styles.register}> 

        <View style={styles.inputRegister}>
        <View style={styles.goBackButton}>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
      <AntDesign
            name="arrowleft"
            size={35}
            color={colors.primary}
            style={styles.icon}
          />
          </TouchableOpacity>
          </View>
            <Image style={styles.logoImage}
              source={require("@assets/images/orange_mask_logo.png")}/>
        <Text style={styles.inputTopText}>Nome da vacina</Text>
            <TextInput
                style={styles.textInput}
                autoCorrect={false}
                placeholderTextColor={colors.gray}
                onChangeText={(nameVacina) => setNomeVacina(nameVacina)}
                value={nameVacina}
            />
        <Text style={styles.inputTopText}>Data da dose</Text>
            <TextInput
                style={styles.textInput}
                autoCorrect={false}
                placeholderTextColor={colors.gray}
                onChangeText={(dataDose) => setDataDose(dataDose)}
                value={dataDose}
                
            />
        <Text style={styles.inputTopText}>Data da próxima dose</Text>
            <TextInput
                style={styles.textInput}
                autoCorrect={false}
                placeholderTextColor={colors.gray}
                onChangeText={(dataRepetirDose) => setDataRepetirDose(dataRepetirDose)}
                value = {dataRepetirDose}
        
            />
        </View>
        <TouchableOpacity style={styles.salvar} >
              <Text style={styles.salvarText}>Salvar</Text>
            </TouchableOpacity>
            </View>


);
};

export default RegisterCaccine;