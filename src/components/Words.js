import React from 'react';
import ReactWordcloud from 'react-wordcloud';
 
// const words = [
//   {
//     text: 'told',
//     value: 64,
//   },
//   {
//     text: 'mistake',
//     value: 11,
//   },
//   {
//     text: 'thought',
//     value: 16,
//   },
//   {
//     text: 'bad',
//     value: 17,
//   },
//   {
//     text: 'covid',
//     value: 500,
//   },
//   {
//     text: 'quarantine',
//     value: 300,
//   },
//   {
//     text: 'middlebury',
//     value: 230,
//   },

// ]

export default function Words({data}) {


  //const words = Object.entries(data[0].words).map(element => {return ({text:element[0], value:element[1]})});
  // var words_set = [];
  // var new_words_set = [];
  // // for each day in the data
  // data.forEach(element => {
  //   // for each word in the day
  //   Object.entries(element.words).forEach(entry => {
  //     if (entry[0] in words_set.map(element => element.text)){
  //       new_words_set = words_set.map(word => {
  //         return (word.text !== entry[0])? word : {text:word.text, value: (word.value+entry[1])}})
  //     } else {
  //       new_words_set = [...words_set, {text:entry[0], value:entry[1]}]
  //     }
  //     words_set = new_words_set;
  //   })
  // });

  //sum up all values in new dictionary
  const words_sum = {};
  data.forEach(element => {
    Object.entries(element.words).forEach(entry => {
      if(entry[0] in words_sum){
        words_sum[entry[0]] = words_sum[entry[0]]+entry[1]
      } else {
        words_sum[entry[0]] = entry[1]
      }
    })
  })

  //format into array
  const words = Object.entries(words_sum).map(entry =>{
    return({text:entry[0], value:entry[1]})
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
        </div></div>)
}