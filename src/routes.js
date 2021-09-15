import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Login,
  UserInformation,
  Password,
  Photo,
  Home,
  PetInformation,
  Breed,
  PetPhoto,
  BirthHeight,
  RegisterVaccine,
} from "@screens";

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
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="petinformation" component={PetInformation} />
      <Stack.Screen name="breed" component={Breed} />
      <Stack.Screen name="petphoto" component={PetPhoto} />
      <Stack.Screen name="birthheight" component={BirthHeight} />
      <Stack.Screen name="registerVaccine" component={RegisterVaccine} />
      
    </Stack.Navigator>
  );
};

export default Routes;
