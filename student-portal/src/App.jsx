import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
import base_url from "./Bootapi";
import React, { useState } from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AddUser from "./components/AddUser";
import Welcome from "./components/Welcome";
import AddStudent from "./components/Admin/AddStudent";
import AddFaculty from "./components/Admin/AddFaculty";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Col, Container, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";

import Header from "./components/Header";
import Adminmenus from "./components/Adminmenus";

function App() {
  //too call the server

  // const addUser = function (event) {
  //   console.log("Creating the userDetails Object");

  //   setUser({ ...user, userDetails1: userDetails });
  //   console.log(user);

  //   //console.log("in getcourse list");

  //   event.preventDefault();

  //   //console.log(user);

  //   axios.get(`${base_url}/admin`).then(
  //     (response) => {
  //       //response from server
  //       console.log(response.data);
  //     },
  //     (error) => {
  //       //error handling
  //       console.log(error);
  //     }
  //   );
  // };

  // //postDataToServer

  // const [user, setUser] = useState({});
  // const [userDetails, setUserDetails] = useState({});

  const buttonHandler = () => {
    toast.success("This is it");
  };

  return (
    <div>
      <ToastContainer />

      <Router>
        {/* <Link to="/adduser">AddUser</Link>
        <Link to="/login">Login</Link>
        <Link to="/welcome">Welcome</Link>

        <Switch>
          <Route path="/adduser">
            <AddUser />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Welcome />
          <Route path="/welcome"></Route>
        </Switch> */}

        <Container>
          <Header></Header>
          <Row>
            <Col lg={4}>
              <Adminmenus></Adminmenus>
            </Col>

            <Col lg={8}>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/add_student" exact>
                <AddStudent></AddStudent>
              </Route>

              <Route path="/add_faculty" exact>
                {/* <AddFaculty /> */}
              </Route>
            </Col>
          </Row>
        </Container>
      </Router>

      {/* <AddStudent></AddStudent> */}
      {/* <AddFaculty></AddFaculty> */}
    </div>
  );
}

export default App;
