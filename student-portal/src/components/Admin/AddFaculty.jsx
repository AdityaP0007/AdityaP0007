// import React from "react";
// import axios from "axios";
// import base_url from "../../Bootapi";
// import { useState, useEffect } from "react";

// const AddFaculty = () => {
//   //   const [obj, setObj] = useState([]);

//   var [obj, setObj] = useState([]);

//   const getSubjectNameList = () => {
//     // event.preventDefault();
//     axios.get(`${base_url}/admin/get_course_name_and_subject_name_list`).then(
//       (response) => {
//         //response from server
//         //console.log(response.data);
//         setObj(response.data[1]);
//       },
//       (error) => {
//         //error handling
//         console.log(error);
//       }
//     );
//   };

//   useEffect(() => {
//     getSubjectNameList();
//   }, []);

//   const [facultyDto, setFacultyDto] = useState({});
//   const [userDetails, setUserDetails] = useState({});

//   const formHandler = (event) => {
//     event.preventDefault();
//     setFacultyDto({ ...facultyDto, role: "FACULTY" });
//     setFacultyDto({ ...facultyDto, userDetails: userDetails });
//     console.log(facultyDto);
//     console.log(userDetails);
//     addPostToServer(facultyDto);
//   };

//   const addPostToServer = (data) => {
//     axios.post(`${base_url}/admin/add_user`, data).then(
//       (response) => {
//         //response from server
//         console.log(response.data);
//       },
//       (error) => {
//         //error handling
//         console.log(error);
//       }
//     );
//   };

//   const seletedSubjectName = () => {
//     var selectedElement = document.getElementById("sel1");
//     //alert(selectedElement.value);
//     setFacultyDto({ ...facultyDto, subjectName: selectedElement.value });
//   };

//   return (
//     <div>
//       {/* {getCourseList()} */}

//       <form>
//         EmailId
//         <input
//           type="text"
//           onChange={(e) => {
//             setFacultyDto({ ...facultyDto, emailId: e.target.value });
//           }}
//         />{" "}
//         <br />
//         <br />
//         Password
//         <input
//           type="text"
//           onChange={(e) => {
//             setFacultyDto({ ...facultyDto, password: e.target.value });
//           }}
//         />
//         <br />
//         <br />
//         Role
//         <input type="text" value="FACULTY" readOnly id="role" />
//         <br />
//         <br />
//         Subject Name
//         <select name="" id="sel1" onChange={seletedSubjectName}>
//           <option>--SELECT SUBJECT--</option>
//           {obj.map((e) => {
//             return (
//               <option key={e} value={e}>
//                 {e}
//               </option>
//             );
//           })}
//         </select>
//         <br />
//         <br />
//         <h2>User Details</h2>
//         Name
//         <input
//           type="text"
//           onChange={(e) => {
//             setUserDetails({ ...userDetails, name: e.target.value });
//           }}
//         />
//         <br />
//         <br />
//         Phone No.
//         <input
//           type="text"
//           onChange={(e) => {
//             setUserDetails({ ...userDetails, phoneNumber: e.target.value });
//           }}
//         />
//         <br />
//         <br />
//         City
//         <input
//           type="text"
//           onChange={(e) => {
//             setUserDetails({ ...userDetails, city: e.target.value });
//           }}
//         />
//         <br />
//         <br />
//         State
//         <input
//           type="text"
//           onChange={(e) => {
//             setUserDetails({ ...userDetails, state: e.target.value });
//           }}
//         />
//         <br />
//         <br />
//         Country
//         <input
//           type="text"
//           onChange={(e) => {
//             setUserDetails({ ...userDetails, country: e.target.value });
//           }}
//         />
//         <br />
//         <br />
//         ZipCode
//         <input
//           type="text"
//           onChange={(e) => {
//             setUserDetails({ ...userDetails, zipCode: e.target.value });
//           }}
//         />
//         <br />
//         <br />
//         <button type="submit" onClick={formHandler}>
//           Add User
//         </button>
//         <br />
//         <br />
//         <button type="reset">Reset</button>
//       </form>
//     </div>
//   );
// };

// export default AddFaculty;
