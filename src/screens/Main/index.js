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


const Main = () =>{
    const [nameVacina, setNomeVacina] = useState("");
    const [dataDose, setDataDose] = useState("");
    const [dataRepetirDose, setDataRepetirDose] = useState("");
    const navigation = useNavigation();

    const handleSignUp = () => {
        navigation.navigate("Main");
      };
    

return (

    <View style= {styles.register}> 

        
        <TouchableOpacity>
      <AntDesign
            name="arrowleft"
            size={24}
            color={colors.primary}
            style={styles.icon}
          />
          </TouchableOpacity>
            
</View>

);
};

export default Main;