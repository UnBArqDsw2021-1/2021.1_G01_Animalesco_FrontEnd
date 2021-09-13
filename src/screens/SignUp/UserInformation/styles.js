import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import colors from "@assets/styles/colors";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.ice,
  },
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  content: {
    height: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formCadastro: {
    display: "flex",
    height: "100%",
    width: "65%",
    alignItems: "center",
  },
  inputTopText: {
    width: "100%",
    marginBottom: 3,
    marginLeft: 5,
  },
  input: {
    height: 41,
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    marginBottom: 10,
  },
  nextButton: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 3,
    marginTop: 15,
    backgroundColor: colors.secondaryBlue,
  },
  nextButtoDisabled: {
    width: "100%",
    marginTop: 15,
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
});

export default styles;
