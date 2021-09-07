import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import colors from "../../../assets/styles/colors";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: "#E1E7E4",
  },
  goBackButton: {
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  goBackImage: {
    width: 10,
    height: 16,
  },
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  logoImage: {
    width: 240,
    height: 255,
    transform: [{ rotate: "20 deg" }],
    position: "relative",
    left: "-30%",
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
    width: 242,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#aaa",
    marginBottom: 25,
  },
  nextButton: {
    backgroundColor: "#f15a24",
    width: 128,
    height: 33,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  nextText: {
    color: "#fff",
  },
  stepper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
  },
  icon: {
    alignSelf: "baseline",
  },
  imageProfile:{
    width: 130,
    height: 130,
    left: 5,
    top: -50,
    borderRadius: 60,
    alignSelf: 'center',
  },
  iconPhoto: {
    alignSelf: "baseline",
    left: 100,
    top: -70,
  },
});

export default styles;
