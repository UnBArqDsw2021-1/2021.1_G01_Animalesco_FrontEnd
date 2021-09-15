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
  container: {
    width: "100%",
    height: "88%",
    display: "flex",
    justifyContent: "center",
  },
  content: {
    display: "flex",
    height: "40%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  formCadastro: {
    display: "flex",
    height: "100%",
    width: "65%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  inputTopText: {
    width: 242,
    marginBottom: 3,
    marginLeft: 5,
  },
  input: {
    height: 41,
    width: "100%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    marginBottom: 25,
  },
  nextButton: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 3,
    backgroundColor: colors.secondaryBlue,
  },
  nextText: {
    color: colors.light,
  },
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
    marginBottom: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
