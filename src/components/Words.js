import React from 'react';
import ReactWordcloud from 'react-wordcloud';
 
const words = [
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 11,
  },
  {
    text: 'thought',
    value: 16,
  },
  {
    text: 'bad',
    value: 17,
  },
  {
    text: 'covid',
    value: 500,
  },
  {
    text: 'quarantine',
    value: 300,
  },
  {
    text: 'middlebury',
    value: 230,
  },

]

export default function Words() {
  return (
    <div className="col-md-8">
    <div className="card">
    <div className="card-header ">
          <h4 className="card-title">Word cloud</h4>
          <p className="card-category">What are people talking about?</p>
        </div>
        <ReactWordcloud words={words} />
        </div></div>)
}