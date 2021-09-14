import api from "./api";

class UserService {
  constructor() {}

  async createUser({ username, password, re_password, email }) {
    const data = {
      username: username,
      password: password,
      re_password: re_password,
      email: email,
    };

    const response = await api.post("/users/", data);
    return response;
  }
}

export const userService = new UserService();
Object.freeze(userService);
