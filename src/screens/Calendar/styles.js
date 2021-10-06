import { StyleSheet } from "react-native";
import colors from "@assets/styles/colors";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingVertical: 65,
  },
  calendar: {
    height: "70%",
    display: "flex",
    justifyContent: "space-between",
  },
  hr: {
    height: 3,
    borderBottomColor: "#fff",
    borderBottomWidth: 3,
  },
  vetVisits: {
    height: "100%",
  },
});

export default styles;
