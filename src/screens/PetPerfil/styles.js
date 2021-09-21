import { StyleSheet } from "react-native";
import colors from "@assets/styles/colors";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  information: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginVertical: 5,
    marginBottom: 26,
    marginTop: Constants.statusBarHeight + 55,
  },
  cardImage: {
    width: "100%",
    height: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: colors.secondary,
  },
  contentCardTitle: {
    width: "100%",
    height: 50,
    display: "flex",
    position: "absolute",
    backgroundColor: colors.lightToBackground,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 20,
    color: colors.light,
    fontWeight: "bold",
    alignItems: "center",
  },
  contentInfo: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  cardText: {
    fontSize: 15,
    alignItems: "center",
    marginLeft: 5,
  },
});
export default styles;
