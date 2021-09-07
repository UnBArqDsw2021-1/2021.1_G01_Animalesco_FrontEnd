import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import SignUp1 from "./screens/SignUp1";
import SignUp2 from "./screens/SignUp2";
import SignUp3 from "./screens/SignUp3";

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signUp1" component={SignUp1} />
      <Stack.Screen name="signUp2" component={SignUp2} />
      <Stack.Screen name="signUp3" component={SignUp3} />
    </Stack.Navigator>
  );
};

export default Routes;
