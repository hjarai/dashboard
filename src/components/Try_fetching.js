import React, { Component } from 'react'
//import ChartistGraph from 'react-chartist'
//import data_json from '../data/filtered.json'
// import Test2 from './Test2';
// import Dial from './Dial';
// import Words from './Words';
//import data_file from '../data/last_one.json'

//database
//file lives somewhere to be fetched
//script for jsonl --> json

class Try_fetching extends Component {

  constructor(){
    super();
    this.state ={
      range: 'week',
      data: [],
    };
  };

  render(){
    const data_array = [];
    fetch('last_one.txt')
        .then(res => res.text())
        .then(body => {
            const lines = body.split("\n");
            lines.forEach(line => data_array.append(line.json()));
            this.setState({data:data_array})
        });


   
    return (

  <h1>WHY IS THIS HAPPENING</h1>

    )
  }
}

export default Try_fetching