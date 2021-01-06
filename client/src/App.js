import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

const isEmpty = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

async function getTest(){
  return axios.get('/test').then(res => res.data) 
}

class App extends Component {
  state = {
    getTest : {
      data : {},
      loading : true
    },
    getother : {}
  };
  
  async componentDidMount() {
    this.setState({getTest : {data : await getTest(), loading : false}});
  }

  render() {

    return (
      <div className="App">
        <h1>Hello from the frontend!</h1>
        {!this.state.getTest.loading ? <h1>{this.state.getTest.data[1].description}</h1> : null}
      </div>
    );
}
}


export default App;