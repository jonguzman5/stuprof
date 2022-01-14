import React from 'react';

const avg = (arr) => arr.reduce((a, b) => a + b) / arr.length

function Student(props){
  return (
    <div>
        <img src={props.roster.pic} alt="" />
        <p>Email: {props.roster.email}</p>
        <p>Company: {props.roster.company}</p>
        <p>Skill: {props.roster.skill}</p>
        <p>Average: {avg(props.roster.grades)}</p>
        {/* {props.roster.grades.map((item, i) => {
            
            return (
                <p key={i}>{item}</p>
            )
        })}    */}
    </div>
  );
}

export default Student;
