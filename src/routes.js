import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import UserInformation from "./screens/SignUp/UserInformation";
import Password from "./screens/SignUp/Password";
import Photo from "./screens/SignUp/Photo";
import RegisterVaccine from "./screens/RegisterVaccine";

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="RegisterVaccine"
      screenOptions={{
        headerShown: false,
      }}
    >
      
      <Stack.Screen name= "RegisterVaccine" component={RegisterVaccine}/>
    </Stack.Navigator>
  );
};

export default Routes;
