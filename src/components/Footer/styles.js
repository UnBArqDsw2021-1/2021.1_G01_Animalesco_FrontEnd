import { StyleSheet } from "react-native";
import colors from "@assets/styles/colors";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 55,
    width: "100%",
    bottom: 0,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  itens: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  itensText: {
    color: colors.light,
    fontSize: 12,
  },
});

export default styles;
