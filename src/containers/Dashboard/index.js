import React from "react";
import labsLogo from '../../assets/images/ctd-labs-logo.png'
// import Courses from '../../components/Courses'
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      courses:null
    };
  }
  componentDidMount() {
    this.getCourses()
  }

  getCourses() {
    fetch("https://api.airtable.com/v0/appgAr8AE94OY9Ej9/React%20Fall%202019?maxRecords=3&view=Grid%20view", {
     headers: {"Authorization": "Bearer " + process.env.REACT_APP_AT_KEY}
   }).then((response) => response.json())
       .then((responseData) => {
           const courses = responseData.records
           this.setState({courses}, () => {
              //  console.log(this.state.issues);
           })
     })
  }
  

  render() {
    const courses = this.state.courses
    return (
      <div className="view-container dashboard">
        <div className="dashboard-content">
          <h3>Code the Dream Classes</h3>
          <p>Welcome Code the Dream students. Select your class below to check out the syllabus.</p>
          <ul className="class-list">
         <Link to="react-resources">React - Resources</Link>
         <Link to="react_fall_2019">React - Fall 2019</Link>
          </ul>
        </div>
      </div>
    );
  }
}


export default Dashboard