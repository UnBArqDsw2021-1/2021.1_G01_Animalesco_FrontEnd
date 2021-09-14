import api from "./api";

class LoginService {
  constructor() {}

  async getToken({ username, password }) {
    const data = {
      username: username,
      password: password,
    };
    const token = await api.post("/token/login/", data);
    return token;
  }
}

export const loginService = new LoginService();
Object.freeze(loginService);
