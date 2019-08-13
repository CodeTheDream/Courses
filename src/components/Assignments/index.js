import React from 'react'
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes.js";
import Logo from '../../assets/images/ctd-logo.png'


const Assignments = (courses) => {
  const courseArray = Object.values(courses.courses)
    console.log('courses', courses)
    const courseList = courseArray.map((course, i) => {
      console.log(course, i)
      return (
        <li className="assignment-li" key={course.fields.name}>
         <a target="_blank" href={course.fields.url}> {course.fields.name}</a>
        
       </li>
    )})
   
    return (
    <ul className="assignment-list">
      {courseList}
  </ul>
)}

export default Assignments