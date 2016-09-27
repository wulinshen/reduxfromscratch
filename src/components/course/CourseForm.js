import React, {Component} from 'react'

const CourseForm = ({course, onSave, onChange, errors}) => {
    return (
           <form>
             <h1>CourseForm</h1>
             <input name='title' label="Title" value ={course.title} 
             onChange={onChange} error={errors.title} />

             <input name='authorId' label="Author" value ={course.authorId} 
             onChange={onChange} error={errors.authorId} />
             
             <input name='length' label="Length" value ={course.length} 
             onChange={onChange} error={errors.length} />

             <input type='submit'  value = "Save"
             className="btn btn-primary" onClick={onSave} />


           </form>
        )
    }


export default CourseForm