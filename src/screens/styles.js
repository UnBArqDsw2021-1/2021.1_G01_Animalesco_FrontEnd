import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import colors from "@assets/styles/colors";

const defaultStyles = StyleSheet.create({
  //box
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

  //input
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

  //picker
  pickerContent: {
    height: 41,
    width: "100%",
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    marginBottom: 10,
  },
  picker: {
    paddingHorizontal: 10,
    height: 31,
    width: "100%",
  },

  //button
  button: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: 15,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 3,
    backgroundColor: colors.secondaryBlue,
  },
  buttonDisabled: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: 15,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 3,
    backgroundColor: colors.gray,
  },
  textButton: {
    color: colors.light,
  },

  //photo
  icon: {
    alignSelf: "baseline",
  },
  imageProfile: {
    width: 130,
    height: 130,
    left: 5,
    top: -50,
    borderRadius: 100,
    alignSelf: "center",
  },
  iconPhoto: {
    backgroundColor: colors.grayLight,
    width: 120,
    height: 120,
    borderRadius: 100,
    marginBottom: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default defaultStyles;
