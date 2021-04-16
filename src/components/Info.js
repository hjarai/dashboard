import hirona from "../../src/assets/img/faces/hirona.png"
import culton from "../../src/assets/img/faces/culton.png"
import { Component } from "react"


class Info extends Component{
  render (){
    return (
      <div className="content">
      <div className="container-fluid">
        <div className="row">

          <div className="col-md-8">
            <div className="card">
              <div className="card-header ">
                <h4 className="card-title">About MiddMood</h4>
                <p className="card-category">What is this dashboard?</p>
              </div>
              <div className="card-body ">
                <p>MiddMood, a sentiment-analysis display based upon Middlebury student Twitter content and newspaper publications. As COVID-19 safety restrictions remain in effect on campus, the opportunity for social connection among students continue to be scarce. Our project MiddMood addresses the absence of social solidarity in the Middlebury student body, by quantifying the answer the question, "How is the Midd student body feeling today?"

Using student Tweets and campus newspaper publications as data source, we will conduct frequency and sentiment analyses to extract topical keywords and determine the level of ambient happiness and stress. By visualizing these findings on a dashboard, students will be able to check in on not only the trends and mood of each week, but how they've changed over the course of the semester.

In this particularly isolating semester, we hope MiddMood can be the catalyst for students finding empathy and feeling a stronger connection to the rest of the school.</p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header ">
                <h4 className="card-title">About Us</h4>
                <p className="card-category">Who are behind MiddMood?</p>
              </div>
              <div className="card-body ">
                <img src={hirona} alt="hirona" width="200" height="200" />
                <img src={culton} alt="culton" width="200" height="200" />
                <p>Hirona ('22) and Culton ('21.5) are Middlebbury CS seniors. This project is part of CS701 Senior Seminar with Prof. Vaccari.</p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    )}
}

export default Info
