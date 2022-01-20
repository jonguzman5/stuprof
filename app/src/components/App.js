import React, { Component } from 'react';
import axios from 'axios';
//import Details from './Details';
import Student from './Student';
import '../css/App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      roster: [],
      tags: []
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

  setTags = (tags) => {
    console.log(tags)
    this.setState({
      tags
    })
  }
  
  searchName = e => {
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

  searchTag = e => {
    this.setTags();
    let tags = this.state.tags.concat();
    console.log(tags);
    const { value } = e.target
    if (value !== "") {
      tags = tags.filter(item => {
        const tagName = item.tag
        const filter = value
  
        return tagName.includes(filter);
      });
      this.setState({
        tags 
      });    
    } 
    // else {
    //   this.setTags()
    // }
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
              onChange={this.searchName}
            />
            {/* <input 
              className="search-input"
              type="text" 
              id="name" 
              name="name" 
              placeholder="Search by tag" 
              onChange={this.searchTag}
            /> */}
            {Object.keys(this.state.roster).map(key => (
              <Student
                key={key}
                index={key}
                roster={this.state.roster[key]}
                setTags={this.setTags}
              />
            ))}
          </div>          
        </div>
      )
    }
}

export default App;
