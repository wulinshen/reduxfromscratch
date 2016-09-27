import React, {Component} from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import * as courseActions from '../actions/courseActions';
import CourseForm from './CourseForm';


class ManageCoursePage extends Component {
    constructor(props, context){ 
        super(props, context);

        this.state = {
           course:Object.assign({}, this.props.course),
           errors:{}
        };

    this.updateCourseState=this.updateCourseState.bind(this);
    this.saveCourse=this.saveCourse.bind(this);

    }
  
    updateCourseState(event){
         const field = event.target.name;
         let course = this.state.course;
         course[field] = event.target.value;
         return this.setState({course});
    }

    saveCourse(event){
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        browserHistory.push('/courses');
    }

    render () {
        return (
            <div>
                <h1>ManageCoursePage</h1>
                 <CourseForm 
                 onChange={this.updateCourseState}
                 onSave={this.saveCourse}
                 course={this.state.course}
                 errors={this.state.errors}
                 />
            </div>
        )
    }
}

function getCourseById (courses, id) {
    // body
    const course = courses.filter(course=>course.id==id);
    if (course.lenght) return course[0];
    return null;
}

function mapStateToProps (state, ownProps) {
  const courseId = ownProps.params.id;
  let course = {id:'', title:'', authorId:'', length:''};
    if (courseId && state.courses.length>0){
      course=getCourseById(state.courses, courseId);
  }
  return {
      course:course
  } 
}

function mapDispatchToProps (dispatch) {
  return {
     actions:bindActionCreators(courseActions, dispatch)  
   } 
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);



