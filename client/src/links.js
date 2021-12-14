import React from 'react'
import donate from "./images/don.jpg"
const Donation = () => {
    return (
        <div className="donation">
            <p className="qu">"Be the first to make a differnce, Take a step towards humanity"</p>
            <div><img src={donate}  className="don"></img></div>
            <font size="10"><a href="https://www.akshayapatra.org/donate-to-midday-meal-programme?gclid=Cj0KCQiAzMGNBhCyARIsANpUkzNZ746fN0u7OFY0NIL8FbLT-roIZ7uIXfXropSXu_-sVWCIh9qt2ZYaAixJEALw_wcB">Donate To Child - Mid-Day Meal</a></font><br/>
            <font size="10"><a href="https://milaap.org/fundraisers/sponsor-a-child-in-india"> Sponsor Education and Food For Children</a></font><br/>
            <font size="10"><a href="https://www.educategirls.ngo/Donate.aspx?utm_source=adwords&utm_medium=paid&utm_campaign=donation&gclid=Cj0KCQiAzMGNBhCyARIsANpUkzNlvfvpMGe8AdWeMlmLnUUKk0qzTMrUGzaOtLht5bLKTF1tzSJqF9IaAk3cEALw_wcB">Donation for Girls' Education</a></font><br/>
            <font size="10"><a href="https://www.miraclefoundation.org/donate-2/">Donate to Make a Difference</a></font>
        </div>
    );
}
export default Donation;