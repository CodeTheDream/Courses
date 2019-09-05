import React from 'react'
import { Link } from 'react-router-dom'
import Assignments from '../../components/Assignments'

class ReactF2019 extends React.Component {
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
        fetch("https://api.airtable.com/v0/appgAr8AE94OY9Ej9/React%20Fall%202019?&view=Grid%20view", {
         headers: {"Authorization": "Bearer " + process.env.REACT_APP_AT_KEY}
       }).then((response) => response.json())
           .then((responseData) => {
               const courses = responseData.records
               this.setState({courses}, () => {
                  //  console.log(this.state.issues);
               })
         })
      }


    render () {
        const courses = this.state.courses
        return (
            <div className="view-container">
            <h3>React Fall 2019</h3>
            <p>
             Welcome React Fall 2019 Remote students. This is going to be an awesome cohort! Below is a list of assignments and due dates. 
            </p>
            <div className="assignment-box">
            <h4>Schedule</h4>
            {courses && <Assignments
            courses={this.state.courses}
            />}
            </div>
            
        </div>
        )}
}
export default ReactF2019;
