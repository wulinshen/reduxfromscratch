import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import CourseList from './CourseList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../actions/courseActions';

class CoursesPage extends Component {
    constructor(props, context){ 
        super(props, context);
    this.redirectToAddCoursePage=this.redirectToAddCoursePage.bind(this);
    }
    
    redirectToAddCoursePage(){
      browserHistory.push("/course");
    }

    render () {
        const {courses} = this.props;
        return (
            <div>
                <h1>CoursesPage</h1>
                <input type="submit" className="btn btn-primary" value="Add Course"
                onClick={this.redirectToAddCoursePage}/> 
                <CourseList courses={courses}/>
            </div>
        )
    }
}

function mapStateToProps (state, ownProps) {
  return {
      courses:state.courses
  } 
}

function mapDispatchToProps (dispatch) {
  return {
     actions:bindActionCreators(courseActions, dispatch)  
   } 
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);



