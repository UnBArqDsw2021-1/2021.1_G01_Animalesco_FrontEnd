import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="signUp"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="login" component={Login} /> */}
      <Stack.Screen name="signUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default Routes;
