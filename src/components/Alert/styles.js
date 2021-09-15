import { StyleSheet } from "react-native";
import colors from "@assets/styles/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ice,
    width: "100%",
    borderRadius: 5,
    backgroundColor: colors.dangerLight,
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  message: {
    color: colors.dangerDark,
    textAlign: "center",
  },
});

export default styles;
