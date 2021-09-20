import { StyleSheet } from "react-native";
import colors from "@assets/styles/colors";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    paddingVertical: 55,
  },
  content: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingTop: 15,
  },

  cardContainer: {
    width: "90%",
    height: 100,
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
    backgroundColor: colors.light,
    marginVertical: 5,
  },
  cardImage: {
    width: 100,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: colors.secondary,
  },
  cardContent: {
    marginHorizontal: 10,
    marginVertical: 10,
    display: "flex",
    justifyContent: "space-between",
  },
  cardTitle: {
    fontWeight: "bold",
  },
  cardText: {
    fontSize: 12,
  },
  cardContentTitle: {
    fontSize: 15,
    display: "flex",
    flexDirection: "row",
  },
  cardContentBody: {
    display: "flex",
    flexDirection: "column",
  },
});

export default styles;
