import { StyleSheet } from "react-native";
import colors from "@assets/styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: colors.light,
    paddingVertical: 20,
    elevation: 2,
    borderRadius: 5,
  },
  options: {
    minWidth: 110,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRightWidth: 1,
    borderRightColor: colors.dark,
  },
  optionsWithoutBorder: {
    minWidth: 110,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  optionsText: {
    fontSize: 15,
  },
});

export default styles;
