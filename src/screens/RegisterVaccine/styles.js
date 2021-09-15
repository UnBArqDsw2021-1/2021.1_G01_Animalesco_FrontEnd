import { StyleSheet } from "react-native";
import colors from "@assets/styles/colors";

const styles = StyleSheet.create({

register: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.ice,

},
inputRegister:{
    
    marginBottom: 50,
    left: 50,

},
textInput:{
    paddingHorizontal: 100,
    paddingVertical: 5,
    color: colors.dark,
    borderRadius: 5,
    backgroundColor: colors.light,
    marginVertical: 10,
    width: "100%",
},
inputTopText:{

},
salvar:{
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 3,
    backgroundColor: colors.primary,
    marginBottom: 60,

},
salvarText:{
    paddingTop: 2,
    color: colors.light,
},
logoImage: {
    height: 145,
    marginTop: 60,
    resizeMode: "contain",
    right: 50
  },
  icon: {
    top: 50,
    right: 50,
    alignSelf: "baseline",
    
  },
  goBackButton: {
    alignSelf: "flex-start",
    width: 50,
    height: 16,
    marginLeft: 40,
    marginTop: 40,
    marginLeft: 10,
  },
});
export default styles;