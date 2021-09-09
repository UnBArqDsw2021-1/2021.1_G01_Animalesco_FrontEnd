import { StyleSheet } from "react-native";
import colors from "@assets/styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  inputContent: {
    marginBottom: 50,
  },
  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: colors.dark,
    borderRadius: 5,
    backgroundColor: colors.light,
    marginVertical: 10,
    width: "100%",
  },
  forgotPasswordtext: {
    color: colors.light,
    paddingBottom: 5,
  },
  signupText: {
    paddingTop: 2,
    color: colors.light,
  },
  viewBtn: {
    marginTop: 10,
  },
  login: {
    borderRadius: 5,
  },
  logoImage: {
    height: 160,
    marginTop: 60,
    resizeMode: "contain",
  },
  contentButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 3,
    backgroundColor: colors.secondaryBlue,
  },
  contentButtonDisabled: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 3,
    backgroundColor: colors.gray,
  },
  button: {
    color: colors.light,
  },
});

export default styles;
