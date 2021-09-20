import { StyleSheet } from "react-native";
import colors from "@assets/styles/colors";

const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: colors.secondary,
    marginTop: -140
  },
  information: {
    width: "95%",
    height: 100,
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
    backgroundColor: colors.light,
    marginVertical: 5,
    marginTop: 50,
    marginLeft: 10,
  },
});
export default styles;
