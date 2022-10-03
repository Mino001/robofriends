import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";
import { robots } from '../robots';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.cypress.io/todos/1')
     .then(response => response.json())
     .then(json => console.log(json))
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
      return !robots.length ?
       <h1>Loading</h1> :
       (
          <div className='tc'>
            <h1 className='f1'>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
              <Cardlist robots={filteredRobots} />
            </Scroll>  
          </div>
        );
    }   
  }

export default App;
