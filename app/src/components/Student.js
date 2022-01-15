import React from 'react';

const avg = (arr) => arr.reduce((a, b) => a + b) / arr.length

function Student(props){
  const { pic, firstName, lastName, email, company, skill, grades } = props.roster;
  return (
    <div className="student-container">
        <div className="img-container">
          <img src={pic} alt="" />
        </div>
        <div className="desc-container">
          <div className="desc-header">
            <h1>{firstName} {lastName}</h1>
          </div>
          <div className="desc-body">
            <p>Email: {email}</p>
            <p>Company: {company}</p>
            <p>Skill: {skill}</p>
            <p>Average: {avg(grades)}</p>
          </div>
        </div>
    </div>
  );
}

export default Student;
