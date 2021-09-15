import React, { useState, useEffect } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  validateDate,
  formatDate,
  validatePetBirthDay,
  validateHeight,
} from "@utilites";
import { GoBackHeader, Alert } from "@components";
import styles from "./styles.js";
import colors from "@assets/styles/colors";


export const RegisterVaccine = () =>{
    const [nameVacina, setNomeVacina] = useState("");
    const [dataDose, setDataDose] = useState("");
    const [dataRepetirDose, setDataRepetirDose] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [erro, setErro] = useState("");

    const navigation = useNavigation();
  setStatusBarStyle("dark");

  useEffect(() => {
    if (dataDose && dataRepetirDose) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [dataDose, dataRepetirDose]);

  const submitHandler = () => {
    setErro("");
    if (!validateDate(dataDose) || !validatePetBirthDay(dataDose)) {
      setErro("Data inválida");
      return;
    }
    if (!validateDate(dataRepetirDose) || !validatePetBirthDay(dataRepetirDose)) {
      setErro("Data inválida");
      return;
    }
  };
    

return (

    <View style= {styles.register}> 

        <View style={styles.inputRegister}>
        <View >
        <GoBackHeader navigate="home"/>
          </View>
          <View style={styles.form}>
      
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
                onChangeText={(value) => {
                  setDataDose(formatDate(value));
                }}
                value={dataDose}
                placeholder="dd/mm/aaaa"
                keyboardType="numeric"
              />
        <Text style={styles.inputTopText}>Data da próxima dose</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(value) => {
                  setDataRepetirDose(formatDate(value));
                }}
                value={dataRepetirDose}
                placeholder="dd/mm/aaaa"
                keyboardType="numeric"
              />
        </View>
        
        {erro !== "" && <Alert message={erro} />}
        <TouchableOpacity
                style={
                  buttonDisabled ? styles.salvar : styles.nextButton
                }
                disabled={buttonDisabled}
                onPress={submitHandler}
              >
                <Text style={styles.salvarText}>Salvar</Text>
              </TouchableOpacity>
              
            </View>
            </View>
);
};

