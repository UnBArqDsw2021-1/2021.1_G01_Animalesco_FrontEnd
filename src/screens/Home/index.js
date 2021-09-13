import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./styles";

export const Home = () => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback>
      <View>
        <TouchableOpacity
          style={styles.newPet}
          onPress={() => navigation.navigate("petinformation")}
        >
          <Text>Teste</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};
