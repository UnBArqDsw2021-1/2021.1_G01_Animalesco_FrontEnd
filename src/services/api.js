import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "https://animalesco-backend.herokuapp.com/api/v1",
});

api.interceptors.request.use(
  async (config) => {
    let accessToken = await AsyncStorage.getItem("@animalesco:auth_token");

    config.headers.authorization = `token ${accessToken}`;
    return config;
  },
  (error) => {
    console.log(error);
  }
);

export default api;
