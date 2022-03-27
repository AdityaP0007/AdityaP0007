import React, { Fragment } from "react";
import axios from "axios";
import base_url from "../../Bootapi";
import { useState, useEffect } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import { Button } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const AddStudent = () => {
  //   const [obj, setObj] = useState([]);
  var [studentDto, setStudentDto] = useState();
  var [userDetails, setUserDetails] = useState();

  console.log(studentDto);
  console.log(userDetails);

  var [obj, setObj] = useState([]);
  const getCourseList = () => {
    // event.preventDefault();
    axios.get(`${base_url}/admin/get_all_courses`).then(
      (response) => {
        //response from server
        //console.log(response.data);
        setObj(response.data);
      },
      (error) => {
        //error handling
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getCourseList();
  }, []);

  const [role, setRole] = useState("STUDENT");

  const [obj2, setObj2] = useState({});

  const formHandler = (event) => {
    toast.success("Student Added Successfully !");
    event.preventDefault();
    console.log(role);
    console.log("-----------------------------------------");
    // setStudentDto({ ...studentDto, role: "STUDENT" });
    // setStudentDto({ ...studentDto, userDetails: userDetails });
    // console.log(studentDto);
    // console.log("-----------------------------------------");
    // console.log(userDetails);

    setObj2(studentDto);
    // setObj2({ ...obj2, studentDto });
    // setObj2({ ...obj2, userDetails });
    console.log(obj2);
    //addPostToServer(studentDto);
  };

  const addPostToServer = (data) => {
    axios.post(`${base_url}/admin/add_user`, data).then(
      (response) => {
        //response from server
        console.log(response.data);
      },
      (error) => {
        //error handling
        console.log(error);
      }
    );
  };

  const selecttedCourse = () => {
    var selectedElement = document.getElementById("sel1");
    //alert(selectedElement.value);
    setStudentDto({ ...studentDto, courseName: selectedElement.value });
  };

  return (
    <div>
      {/* {getCourseList()} */}

      {/* <form>
        EmailId
        <input
          type="text"
          onChange={(e) => {
            setStudentDto({ ...studentDto, emailId: e.target.value });
          }}
        />{" "}
        <br />
        <br />
        Password
        <input
          type="text"
          onChange={(e) => {
            setStudentDto({ ...studentDto, password: e.target.value });
          }}
        />
        <br />
        <br />
        Role
        <input type="text" value="STUDENT" id="role" />
        <br />
        <br />
        CourseName
        <select name="" id="sel1" onChange={selecttedCourse}>
          <option>--SELECT COURSE--</option>
          {obj.map((e) => {
            return (
              <option key={e} value={e}>
                {e}
              </option>
            );
          })}
        </select>
        <br />
        <br />
        <h2>User Details</h2>
        Name
        <input
          type="text"
          onChange={(e) => {
            setUserDetails({ ...userDetails, name: e.target.value });
          }}
        />
        <br />
        <br />
        Phone No.
        <input
          type="text"
          onChange={(e) => {
            setUserDetails({ ...userDetails, phoneNumber: e.target.value });
          }}
        />
        <br />
        <br />
        City
        <input
          type="text"
          onChange={(e) => {
            setUserDetails({ ...userDetails, city: e.target.value });
          }}
        />
        <br />
        <br />
        State
        <input
          type="text"
          onChange={(e) => {
            setUserDetails({ ...userDetails, state: e.target.value });
          }}
        />
        <br />
        <br />
        Country
        <input
          type="text"
          onChange={(e) => {
            setUserDetails({ ...userDetails, country: e.target.value });
          }}
        />
        <br />
        <br />
        ZipCode
        <input
          type="text"
          onChange={(e) => {
            setUserDetails({ ...userDetails, zipCode: e.target.value });
          }}
        />
        <br />
        <br />
        <button type="submit" onClick={formHandler}>
          Add User
        </button>
        <br />
        <br />
        <button type="reset">Reset</button>
      </form> */}

      <div className="studentform">
        <ToastContainer />
        <Fragment>
          <Form>
            <FormGroup>
              <label for="emailId">Email Id</label>
              <Input
                type="text"
                placeholder="email id"
                name="emailId"
                id="emailId"
                onChange={(e) => {
                  setStudentDto({ ...studentDto, emailId: e.target.value });
                }}
              />
              <br />
              <label for="password">Password</label>
              <Input
                type="text"
                placeholder="password"
                name="password"
                id="password"
                onChange={(e) => {
                  setStudentDto({ ...studentDto, password: e.target.value });
                }}
              />
              <br />
              <label for="role">role</label>
              <Input
                type="text"
                placeholder="role"
                name="role"
                id="role"
                onChange={(e) => {
                  setStudentDto({ ...studentDto, role: e.target.value });
                }}
              />
              <br />
              CourseName
              <select
                className="form-select"
                name=""
                id="sel1"
                onChange={selecttedCourse}
              >
                <option>--SELECT COURSE--</option>
                {obj.map((e) => {
                  return (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  );
                })}
              </select>
              <br />
              <h2>User Details</h2>
              <br />
              <label for="Name">Name</label>
              <Input
                type="text"
                placeholder="Name"
                name="Name"
                id="Name"
                onChange={(e) => {
                  setUserDetails({ ...userDetails, name: e.target.value });
                }}
              />
              <br />
              <label for="Name">Phone Number</label>
              <Input
                type="text"
                placeholder="phoneNumber"
                name="phoneNumber"
                id="phoneNumber"
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    phoneNumber: e.target.value,
                  });
                }}
              />
              <br />
              <label for="city">City</label>
              <Input
                type="text"
                placeholder="city"
                name="city"
                id="city"
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    city: e.target.value,
                  });
                }}
              />
              <br />
              <label for="state">State</label>
              <Input
                type="state"
                placeholder="state"
                name="state"
                id="state"
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    state: e.target.value,
                  });
                }}
              />
              <br />
              <label for="country">Country</label>
              <Input
                type="country"
                placeholder="country"
                name="country"
                id="country"
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    country: e.target.value,
                  });
                }}
              />
              <br />
              <label for="zipCode">Zip Code</label>
              <Input
                type="zipCode"
                placeholder="zipCode"
                name="zipCode"
                id="zipCode"
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    zipCode: e.target.value,
                  });
                }}
              />
              <br />
              <br />
              <Button color="primary" outline onClick={formHandler}>
                Add User
              </Button>
              <br />
              <br />
              <Button type="reset" color="success" outline>
                Reset
              </Button>
            </FormGroup>
          </Form>
        </Fragment>
      </div>
    </div>
  );
};

export default AddStudent;
