import api from '../../api.js';

const login = (username, password) => {
  return api
    .post("login", { // Since the baseURL is already set in api.js, you don't need to concatenate it here
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const AuthService = {
  
  login,
  
}

export default AuthService;
