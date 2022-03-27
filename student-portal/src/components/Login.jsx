import axios from "axios";
import base_url from "../Bootapi";
import { useState } from "react";

const Login = () => {
  const handler = (event) => {
    event.preventDefault();
    postToServer(login);
  };

  const [login, setLogin] = useState({});
  const [userState, setUserState] = useState({});

  const postToServer = (data) => {
    axios.post(`${base_url}/login/}`, data).then(
      (response) => {
        console.log(response.data);
        setUserState(response.data);
        console.log(userState.role);
        if (userState.role.localeCompare("ADMIN") === 0) {
          console.log("YOU ARE LOGGED IN AS ADMIN");

          //   axios.post(`${base_url}/admin`).then(
          //     (response) => {},
          //     (error) => {}
          //   );
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="logindiv">
      <h1>Login</h1>

      <form action="">
        Email <br />
        <input
          type="text"
          id="email"
          placeholder="email"
          onChange={(e) => {
            setLogin({ ...login, email: e.target.value });
          }}
        />
        <br />
        <br />
        Password <br />
        <input
          type="password"
          id="password"
          placeholder="password"
          onChange={(e) => {
            setLogin({ ...login, password: e.target.value });
          }}
        />
        <br />
        <br />
        <button className="btn1" type="submit" onClick={handler}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
