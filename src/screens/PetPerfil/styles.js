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
    top: - 50
    
  },
  information: {
    width: "100%",
    height: 100,
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
    backgroundColor: colors.secondary,
    marginVertical: 5,
    marginBottom: 26
  },
  cardTitle: {
    fontSize: 15,
    top: - 50,
    fontWeight: "bold",
    alignItems: "center",
    marginLeft: 120
  },
  cardText:{
    fontSize: 12,
    alignItems: "center",
    marginLeft: 5

  }

});
export default styles;
