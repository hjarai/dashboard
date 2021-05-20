import React from 'react';
import ReactWordcloud from 'react-wordcloud';



export default function Words({ data }) {


  //sum up all values in new dictionary
  const words_sum = {};
  data.forEach(element => {
    Object.entries(element.words).forEach(entry => {
      if (entry[0] in words_sum) {
        words_sum[entry[0]] = words_sum[entry[0]] + entry[1]
      } else {
        words_sum[entry[0]] = entry[1]
      }
    })
  })

  //format into array
  const words = Object.entries(words_sum).map(entry => {
    return ({ text: entry[0], value: entry[1] })
  })


  //if key exists, add values [...words_set, key: words_set[key]+value]
  //else [...words_set, key:value]
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-header ">
          <h4 className="card-title">Word cloud</h4>
          <p className="card-category">What are people talking about?</p>
        </div>
        <ReactWordcloud words={words} />
      </div>
    </div>)
}