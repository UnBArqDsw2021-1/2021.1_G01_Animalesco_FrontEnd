import api from "./api";

class LogoutService {
  constructor() {}

  async getToken() {
    const token = await api.post("/token/logout/");
    return token;
  }
}

export const logoutService = new LogoutService();
Object.freeze(logoutService);
