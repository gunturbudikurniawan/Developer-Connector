import axios from "axios";
import store from "../store";
import { LOGOUT } from "../actions/types";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});
/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired
 logout the user if the token has expired
 // "start": "node server",
    // "server": "nodemon server",
    // "client": "npm start --prefix client",
    // "dev": "concurrently \"npm run server\" \"npm run client\"",
    // "heroku-postbuld": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
**/

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.data.msg === "Token is not valid") {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;
