import React from 'react'
import './About.css'
import image from './child.png'
import img2 from './women.jpeg'
const About = () => {
    return (
        <div className="py-5 service-26">
            <div className="container">
                <div className="row wrap-service-26">
                    <div className="col-md-7 align-self-center">
                        <div className="max-box">
                            <h3 className="mt-3"> Any Society that Fails to Motivate Women is Not Modern </h3>
                            <p className="mt-3">We are probably living in the worst time our modern society has ever seen in 
                    terms of women security. We aim to makewomen feel as strong as ever and strong enough to fight the parasites of our society,strong enough to fight the odds,
                    strong enough to protect themselves against any sexual assaults. </p>
                            <p>  We aim at giving power to those without whom we cease to exist. 
                    Our idea is to design a system which shall make every place and every hour safer for women again. 
                    A system which shall re-establish how very gregarious mankind is. This system shall 
                    geotag and send SOS alert to the nearest police station, close contacts and 
                    also alert people in and around the venue of the crime, everything just at a click of a button. 
                    The idea is to make up for the time it takes police to arrive at the location</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={img2} className="img-fluid" />
                    </div>
                </div>
                <div className="row wrap-service-26 mt-4 pt-3">
                    <div className="col-md-6">
                        <img src={image} className="img1-fluid" />
                    </div>
                    <div className="col-md-6-align-self-center">
                        <h3 className="mt-3">Orphan care isn't about someone doing everything, but everyone doing something.</h3>
                        <p className="mt-3">Protecting children from harm and violence is not just the duty of parents and the authorities concerned. Society has to play its part as well.</p>
                        <p>These children, who have no home, no parents, and no siblings to play with, are kept in a place where all they 
                            have left is their childhood; and even that is taken away from them in these living hells. Most people would define the word orphanage as a public or private
                             institution for the care and protection of children without parents.</p>
                    </div>
                </div>
            </div><br/><br/><br/>
            <div class="timeline">
                <div class="container">
                    <div class="section-header"><br/><br/><br/><br/><br/><br/>
                        <h2>TEAM MEMBERS</h2>
                    </div>
                    <div class="timeline-start">
                        <div class="timeline-container left">
                            <div class="timeline-content">
                                <h2><span>01</span>Nireeksha D Rai</h2>
                            </div>
                        </div>
                        <div class="timeline-container right">
                            <div class="timeline-content">
                                <h2><span>02</span>Policharla Sai Sailaja</h2>
                            </div>
                        </div>
                        <div class="timeline-container left">
                            <div class="timeline-content">
                                <h2><span>03</span>Jagruthi K J</h2>
                            </div>
                        </div>
                        
                       
                      
                    </div>
                </div>
            </div>

        </div>
    )
}
export default About;