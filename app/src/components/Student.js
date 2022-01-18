import React, {Component} from 'react';

const avg = (arr) => arr.reduce((a, b) => a + b) / arr.length

class Student extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleDropdown: false,
      isClicked: false
    }
  }

  toggleDropdown = (text) => {
    const { toggleDropdown, isClicked } = this.state;
    return (
      this.setState({
        toggleDropdown: !toggleDropdown,
        isClicked: !isClicked
      })
    )
  }

  render(){
    const { toggleDropdown, isClicked } = this.state;
    const { pic, firstName, lastName, email, company, skill, grades } = this.props.roster;
    const dropdownTF = toggleDropdown ? 'dropdownOn' : 'dropdownOff';
    const isClickedTF = isClicked ? '-': '+';
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
              <div
                className={`dropdown ${dropdownTF}`}
              >
                {grades.map((item, i) => {
                  return (
                    <p key={i}>Test {i + 1}: {item}</p>
                  )
                })}       
              </div>              
            </div>
          </div>
          <div className="btn-container">
            <button onClick={this.toggleDropdown}>{isClickedTF}</button>
          </div>
      </div>
    );
  }
}

export default Student;
