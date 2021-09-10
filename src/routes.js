import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, UserInformation, Password, Photo } from "@screens";

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
      <Stack.Screen name="userinformation" component={UserInformation} />
      <Stack.Screen name="password" component={Password} />
      <Stack.Screen name="photo" component={Photo} />
    </Stack.Navigator>
  );
};

export default Routes;
