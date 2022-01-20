import React, { Component } from 'react';
import axios from 'axios';
//import Details from './Details';
import Student from './Student';
import '../css/App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      roster: []
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    axios.get(`https://api.hatchways.io/assessment/students`)
      .then(res => {
        const data = res.data.students

        this.setState({roster: data})
    })
  }
  
  handleChange = e => {
    let roster = this.state.roster.concat();
    const { value } = e.target
    if (value !== "") {
      roster = roster.filter(item => {
        const firstName = item.firstName.toLowerCase();
        const lastName = item.lastName.toLowerCase();
        const filter = value.toLowerCase();
  
        return firstName.includes(filter) || lastName.includes(filter);
      });
      this.setState({
        roster
      });    
    } 
    else {
      this.getData()
    }
  }  

    render() {
      return (
        <div className="roster-container">
          <div className="roster-body">
            <input 
              className="search-input"
              type="text" 
              id="name" 
              name="name" 
              placeholder="Search by name" 
              onChange={this.handleChange}
            />
            {Object.keys(this.state.roster).map(key => (
              <Student
                key={key}
                index={key}
                roster={this.state.roster[key]}
              />
            ))}
          </div>          
        </div>
      )
    }
}

export default App;
