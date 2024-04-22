// Admin.js
import React, { useState } from 'react';
import "./Admin.css"

import {BrowserRouter,Routes,Route,Link} from "react-router-dom";


// AddStudentFrom Component:
// import "./AddStudentForm.css"

const AddStudentForm = () => {
  return (
    <div id = "AddStudentForm">
      <h1>Add Student</h1>
      <p>This is the add student form.</p>
    </div>
  );
}


// UpdateStudentForm Component:
// import "./UpdateStudentForm.css"

const UpdateStudentForm = () => {
  return (
    <div id = "UpdateStudentForm">
      <h1>Update Student</h1>
      <p>This is the update student form.</p>
    </div>
  );
}


// DeleteStudentForm Component:

// import "./DeleteStudentForm.css"

const DeleteStudentForm = () => {
  return (
    <div id = "DeleteStudentForm">
      <h1>Delete Student</h1>
      <p>This is the delete student form.</p>
    </div>
  );
}






const Admin = () => {
  let [Component,setComponent] = useState(<AddStudentForm/>)
  return (
<div id="Admin">
      <h1>Admin</h1>
      <p>This is the admin page.</p>
      <div id="Section">

        {
          Component
        }
       
        <div id="Btns">
          <button onClick={()=>setComponent(<AddStudentForm/>)} className='AdminBtns' to="/admin/addstudent">Add Student</button>
          <button onClick={()=>setComponent(<UpdateStudentForm/>)} className='AdminBtns' to="/admin/updatestudents">Update Student</button>
          <button onClick={()=>setComponent(<DeleteStudentForm/>)} className='AdminBtns' to="/admin/deletestudent">Delete Student</button>
        </div>
      </div>
    </div>
  );
}

export default Admin;


