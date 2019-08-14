import React from "react";
import { Link } from "react-router-dom";
import Courses from "../../components/Assignments";

class ReactResources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      courses: null
    };
  }

  componentDidMount() {
    this.getCourses();
  }

  getCourses() {
    fetch(
      "https://api.airtable.com/v0/appgAr8AE94OY9Ej9/react%20resources?maxRecords=10&view=Grid%20view",
      {
        headers: { Authorization: "Bearer " + process.env.REACT_APP_AT_KEY }
      }
    )
      .then(response => response.json())
      .then(responseData => {
        const courses = responseData.records;
        this.setState({ courses }, () => {
          //  console.log(this.state.issues);
        });
      });
  }

  render() {
    const courses = this.state.courses;
    return (
      <div className="view-container ">
        <h3>React Resources</h3>
        <p>
          Hey students, interns, and front-end developers. The following is a
          list of resources that we think will help you on your road to becoming
          a great front-end developer. Go through this list of assignments from
          top to bottom and once you have it all done you should be well on your
          way to being an accomplished front-end dev.
        </p>
        <div className="assignment-box">
          <h4>Resources, Tutorials, & Assignments</h4>
          {courses && <Courses courses={this.state.courses} />}
        </div>
      </div>
    );
  }
}
export default ReactResources;
