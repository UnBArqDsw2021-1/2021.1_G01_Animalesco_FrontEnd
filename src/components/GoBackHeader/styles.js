import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import colors from "@assets/styles/colors";

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: Constants.statusBarHeight + 55,
    paddingLeft: 20,
    backgroundColor: colors.ice,
    paddingTop: Constants.statusBarHeight,
    top: 0,
    zIndex: 20,
  },
  headerWithoutBackground: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: Constants.statusBarHeight + 55,
    paddingLeft: 20,
    paddingTop: Constants.statusBarHeight,
    top: 0,
    zIndex: 20,
  },
});

export default styles;
