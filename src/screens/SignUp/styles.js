import { StyleSheet } from "react-native";
import colors from "../../../assets/styles/colors";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  goBackButton: {
    alignSelf: "flex-start",
    width: 10,
    height: 16,
    marginLeft: 40,
    marginTop: 40,
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
    width: 285,
    height: 300,
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
});

export default styles;
