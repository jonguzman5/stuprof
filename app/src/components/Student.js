import React, {Component} from 'react';
import Tagger from './Tagger';

class Student extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleDropdown: false,
      isClicked: false,
      tags: []
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

  handleSubmit = newTag => {
    const {setTags} = this.props;
    const {tags} = this.state;
    this.setState({
      tags: tags.concat(newTag)
    })
    setTags(tags);
  }

  getAvg = (arr) => {
    let avgArr = []
    {arr.map((item, i) => {
      avgArr.push(item)
    })}

    let total = 0;
    for(let i = 0; i < avgArr.length; i++) {
        total += parseInt(avgArr[i]);
    }
    let avg = total / avgArr.length;
    return avg;
  }

  render(){
    const { toggleDropdown, isClicked, tags } = this.state;
    const { pic, firstName, lastName, email, company, skill, grades } = this.props.roster;
    const dropdownTF = toggleDropdown ? 'dropdownOn' : 'dropdownOff';
    const isClickedTF = isClicked ? '-': '+';
    return (
      <div className="student-container">
          <div className="img-container">
            <img src={pic} alt=""/>
          </div>
          <div className="desc-container">
            <div className="desc-header">
              <h1>{firstName} {lastName}</h1>
            </div>
            <div className="desc-body">
              <p>Email: {email}</p>
              <p>Company: {company}</p>
              <p>Skill: {skill}</p>
              <p>Average: {this.getAvg(grades)}%</p>
              <div className="tag-container">
                {tags.map((item, i) => {
                  return (
                    <p key={i}>{item.tag}</p>
                  )
                })}                
              </div>                  
              <Tagger
                handleSubmit={this.handleSubmit}
              />
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
