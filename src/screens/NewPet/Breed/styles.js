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
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  content: {
    height: "50%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formCadastro: {
    display: "flex",
    height: "100%",
    width: "65%",
    justifyContent: "center",
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
    marginTop: 15,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 3,
    backgroundColor: colors.secondaryBlue,
  },
  nextButtoDisabled: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: 15,
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
