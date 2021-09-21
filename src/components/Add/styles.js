import { StyleSheet } from "react-native";
import colors from "@assets/styles/colors";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    height: 55,
    width: 55,
    right: 15,
    bottom: 70,
  },
  containerWithoutFoot: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    height: 55,
    width: 55,
    right: 15,
    bottom: 15,
  },
  content: {
    backgroundColor: colors.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    width: 50,
    height: 50,
  },
});

export default styles;
