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
        //console.log(data[0].grades)
        this.setState({roster: data})
    })
  }

    render() {
      return (
        <div className="roster-container">
          <div className="roster-body">
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
