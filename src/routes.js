import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";

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
    </Stack.Navigator>
  );
};

export default Routes;
