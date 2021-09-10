import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logoImageContent: {
    height: "50%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  logoImageLeft: {
    resizeMode: "contain",
    transform: [{ rotate: "20 deg" }],
    opacity: 0.1,
    left: "-22%",
  },
  logoImageRight: {
    resizeMode: "contain",
    transform: [{ rotate: "-20 deg" }, { scaleX: -1 }],
    opacity: 0.1,
    left: "30%",
  },
});

export default styles;
