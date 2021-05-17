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
                <h4 className="card-title">Our App</h4>
                <p className="card-category">What is this dashboard?</p>
              </div>
              <div className="card-body ">
                <p>MiddMood is a sentiment-analysis display based upon Middlebury student Twitter content and newspaper publications. We believe that our project addresses the absence of social solidarity in the Middlebury student body, by quantitatively answering the question, "How is the Midd student body feeling today?" 

Using student Tweets and campus newspaper publications as data sources, we conduct word-frequency and sentiment analysis to extract topical keywords and determine the level of ambient happiness in our community.

By visualizing these findings on a dashboard, students can check in on the trends and mood of each week, and how they've changed over the course of the semester. In this particularly isolating year, we hope MiddMood can be the catalyst for students finding empathy and feeling a stronger connection to the rest of the school.

</p>
              </div>
            </div>

            <div className="card">
              <div className="card-header ">
                <h4 className="card-title">Our App</h4>
                <p className="card-category">What if I don’t agree with the mood dial?
</p>
              </div>
              <div className="card-body ">
                <p>MWe’d like to emphasize that our dashboard should in no way suggest how you should feel. Rather, our aim is to provide an assessment of ambient mood from a collection of student-written text; this may or may not be consistent with your feelings today.

Lastly, if you think that our assessment is incorrect, please Tweet at us (@MiddMood) and say that we are wrong! We’ll add you to our model so your content can be incorporated into the dashboard!


</p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header ">
                <h4 className="card-title">Who are We?</h4>
                <p className="card-category">Who are behind MiddMood?</p>
              </div>
              <div className="card-body ">
                <img src={hirona} alt="hirona" width="200" height="200" />
                <img src={culton} alt="culton" width="200" height="200" />
                <p>Hirona ('22) and Culton ('21.5) are Middlebury Computer Science students enrolled in the CS701 Senior Seminar with Prof. Vaccari—MiddMood is our final project!

</p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    )}
}

export default Info
