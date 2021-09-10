import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import colors from "@assets/styles/colors";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.ice,
  },
  goBackButton: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "6%",
    paddingLeft: 20,
  },
  container: {
    height: "88%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  logoImageContent: {
    height: "48%",
    width: "100%",
  },
  logoImage: {
    resizeMode: "contain",
    transform: [{ rotate: "20 deg" }],
    opacity: 0.1,
    left: "-22%",
  },
  content: {
    height: "40%",
    display: "flex",
    alignItems: "center",
  },
  formCadastro: {
    display: "flex",
    height: "100%",
    width: "65%",
    alignItems: "center",
  },
  inputTopText: {
    width: 242,
    marginBottom: 3,
    marginLeft: 5,
  },
  input: {
    height: 41,
    width: 242,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    marginBottom: 25,
  },
  nextButton: {
    width: 242,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 3,
    backgroundColor: colors.secondaryBlue,
  },
  nextButtoDisabled: {
    width: 242,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 3,
    backgroundColor: colors.gray,
  },
  nextText: {
    color: colors.light,
  },
  stepper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "6%",
    width: 120,
  },
});

export default styles;
