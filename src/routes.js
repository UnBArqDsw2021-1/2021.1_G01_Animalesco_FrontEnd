import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Login,
  UserInformation,
  Password,
  Photo,
  Home,
  PetInformation,
  SpecieBreed,
  PetPhoto,
  RegisterVaccine,
  ColorSex,
  PetPerfil,
  Calendar,
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
      <Stack.Screen name="speciebreed" component={SpecieBreed} />
      <Stack.Screen name="colorsex" component={ColorSex} />
      <Stack.Screen name="petphoto" component={PetPhoto} />
      <Stack.Screen name="registervaccine" component={RegisterVaccine} />
      <Stack.Screen name="petperfil" component={PetPerfil} />
      <Stack.Screen name="calendar" component={Calendar} />
    </Stack.Navigator>
  );
};

export default Routes;
