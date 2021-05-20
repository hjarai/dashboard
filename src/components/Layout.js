import React, { Component } from 'react'
import Dashboard from './Dashboard';
import Dial from './Dial';
import Words from './Words';

const server = "https://www.cs.middlebury.edu"

class Layout extends Component {

  constructor() {
    super();
    this.state = {
      range: 'week',
      data: [],
      last: "today",
      pick: 0
    };
  };

  componentDidMount() {
    fetch(`${server}/~ckoster/data/fur_hirona.txt`)
      .then(res => res.text())
      .then(body => {
        const lines = body.split("\n");
        const data_array = lines.filter(line => line !== "").map((line) => JSON.parse(line))
        this.setState({ data: data_array });
        this.setState({ last: data_array.slice(this.state.data.length - 1)[0].date })
      })
      .catch(err => console.error(err))
      ;
  }


  render() {

    const data_length = this.state.data.length;

    const filtered_data = (period) => {
      if (period === 'week') {
        return this.state.data.slice(data_length - 7, data_length);
      } else if (period === 'month') {
        return this.state.data.slice(data_length - 30, data_length);
      } else if (period === 'semester') {
        return this.state.data.slice(data_length - 90, data_length);
      } else if (period === 'pick') {
        const index = this.state.pick * 7;
        return this.state.data.slice(data_length - (index + 7), data_length - index);
      } else {
        return this.state.data
      }
    }

    const dial_value = filtered_data(this.state.range).map(element => element.score).reduce((a, b) => (a + b), 5) / filtered_data(this.state.range).length;


    return (
      <div className="content">
        <div className="cardoutside-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body ">
                  <button onClick={() => this.setState({ range: "week" })}>This week</button>
                  <button onClick={() => this.setState({ range: "month" })}>This Month</button>
                  <button onClick={() => this.setState({ range: "semester" })}>This Semester</button>
                  <button onClick={() => this.setState({ range: "2020" })}>Since 2020</button>
                  <p> </p>
                  <div className="rowC">
                    <p>Show me the mood from  </p>
                    <input type="number" min="1" max="71" value={this.state.pick}
                      onChange={(event) => {
                        this.setState({ range: "pick", pick: (parseInt(event.target.value, 10)) });
                      }} />
                    <p>  weeks ago!</p>
                  </div>
                </div>

                <div className="rowC">
                  <Dial data={dial_value} />
                  <Words data={filtered_data(this.state.range)} />
                </div>
                <div>
                  <Dashboard data={filtered_data(this.state.range)} last={this.state.last} range={this.state.range} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Layout