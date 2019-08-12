import React from 'react'
import { Link } from 'react-router-dom'
import Courses from '../../components/Course'

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


    render () {
        const courses = this.state.courses
        return (
            <div className="view-container about ">
            <h3>React Fall 2019</h3>
            <p>
            Code the Dream offers free intensive training in software development to people from diverse low-income backgrounds. In CTD Labs, our coders work with experienced mentors to hone those skills by building apps and technology platforms for a range of startups, nonprofits and government clients. The ultimate aim of Code the Dream is to create a unique win-win, where our coders gain real experience building apps that make the world a little better place, and then use that experience to launch new careers with enormous opportunity for themselves, their families, and their communities.
            </p>
            {courses && <Courses 
            courses={this.state.courses}
            />}
            
        </div>
        )}
}
export default ReactF2019;
