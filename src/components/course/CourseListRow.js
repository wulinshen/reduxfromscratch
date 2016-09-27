
import React from 'react'
import { Link } from 'react-router';


const CourseListRow = ({course}) => {
    return (
                <tr>
                   <td><Link to={'/course/'+course.id}> {course.title} </Link></td>
                   <td>{course.authorId}</td>
                   <td>{course.length}</td>
                </tr>             
    );
};

export default CourseListRow;