import api from "./api";

class LoginService {
  constructor() {}

  async getToken({ username, password }) {
    let data = new FormData();

    data.append("username", "username");
    data.append("password", "password");
    data.append("re_password", "password");
    data.append("email", "username@username.com");

    // const token = await api.post("/token/login/", data);
    const token = await api.post("/users/", data);

    console.log(token);

    return token;
  }
}

const loginService = new LoginService();
Object.freeze(loginService);
export default loginService;
