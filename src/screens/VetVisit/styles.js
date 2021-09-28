import { StyleSheet } from "react-native";
import colors from "@assets/styles/colors";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    height: "50%",
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionInput: {
    height: 123,
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    marginBottom: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    height: "10%",
    borderRadius: 5,
    backgroundColor: "#F15A24",
  },
  buttonDisabled: {
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    height: "10%",
    borderRadius: 5,
    backgroundColor: "#aaa",
  },
  buttonText: {
    color: "#fff",
  },
  scroll: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
