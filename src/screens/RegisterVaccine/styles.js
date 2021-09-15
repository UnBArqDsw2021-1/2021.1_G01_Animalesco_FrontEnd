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
    
  width: "100%",
  display: "flex",
  justifyContent: "center",

},
textInput:{
  paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: colors.gray,
    marginVertical: 10,
    width: "70%",
    borderRadius: 5,
    borderWidth: 1,
    
},
inputTopText:{
  width: "100%",
  marginLeft: 5,
  left: "17%",

},
salvar:{
  width: "50%",
  left: "20%",
  display: "flex",
  justifyContent: "center",
  marginTop: 15,
  alignItems: "center",
  paddingVertical: 10,
  borderRadius: 3,
  backgroundColor: colors.gray,

},
salvarText:{
    paddingTop: 2,
    color: colors.light,
},

  goBackButton: {
    alignSelf: "flex-start",
    width: 50,
    height: 16,
    marginLeft: 40,
    marginTop: 40,
    marginLeft: 10,
  },
  nextButton:{
    width: "50%",
    display: "flex",
    justifyContent: "center",
    marginTop: 15,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 3,
    left: "20%",
    backgroundColor: colors.secondaryBlue,

  },
  form: {
    display: "flex",
    height: "80%",
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default styles;