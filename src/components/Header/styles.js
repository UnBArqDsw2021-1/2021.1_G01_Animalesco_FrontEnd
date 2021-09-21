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
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    paddingTop: Constants.statusBarHeight,
    top: 0,
    zIndex: 20,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userName: {
    color: colors.light,
    marginRight: 10,
  },
  user: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  userImage: {
    height: 30,
    width: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 100,
  },
  images: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
});

export default styles;
