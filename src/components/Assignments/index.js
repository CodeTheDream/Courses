import React from 'react'
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes.js";
import Logo from '../../assets/images/ctd-logo.png';
import LinkIcon from '../../assets/images/link-icon.png';


const Assignments = (courses) => {
  const courseArray = Object.values(courses.courses)
    console.log('courses', courses)
    const courseList = courseArray.map((course, i) => {
      console.log(course, i)
      return (
        <li className={course.fields.highlight ? "assignment-li highlighted-assignment" : "assignment-li"} key={course.fields.name}>
         <div>{course.fields.url ? <a target="_blank" href={course.fields.url}>{course.fields.name}</a> : course.fields.name}</div>
         <div>{course.fields.week}</div>
         <div>{course.fields.due_date}</div>
         {course.fields.url && <div className="assignment-link"><a target="_blank" href={course.fields.url}><img src={LinkIcon}/></a></div>}
       </li>
    )})
   
    return (
    <ul className="assignment-list">
        <li className="assignment-li schedule-header">
         <div>Title</div>
         <div>Week</div>
         <div>Due Date</div>
         <div>Link</div>
       </li>
      {courseList}
  </ul>
)}

export default Assignments