import React from 'react'
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes.js";
import Logo from '../../assets/images/ctd-logo.png'


const Courses = (courses) => {
  const courseArray = Object.values(courses)
    console.log('courses', typeof courses, courses)
    const courseList = courseArray.map((course, i) => {
      return (
        <li className="course-li">
         {/* <Link to={course.fields.url}>{course.fields.assignment_name}</Link> */}
         {course[i].fields.assignment_name}
       </li>
    )})
   
    return (
    <ul className="course-list">
      {courseList}
  </ul>
)}

export default Courses