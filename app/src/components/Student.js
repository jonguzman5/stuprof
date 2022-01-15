import React from 'react';

const avg = (arr) => arr.reduce((a, b) => a + b) / arr.length

function Student(props){
  return (
    <div className="student-container">
        <div className="img-container">
          <img src={props.roster.pic} alt="" />
        </div>
        <div className="desc-container">
          <div className="desc-header">
            <h1>{props.roster.firstName} {props.roster.lastName}</h1>
          </div>
          <div className="desc-body">
            <p>Email: {props.roster.email}</p>
            <p>Company: {props.roster.company}</p>
            <p>Skill: {props.roster.skill}</p>
            <p>Average: {avg(props.roster.grades)}</p>
          </div>
        </div>
    </div>
  );
}

export default Student;
