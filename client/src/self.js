import React from "react";
import ReactDOM from "react-dom";
import "./self.css";
class Heading extends React.Component{
    render(){
        return(
            <div id="block">
                <div id="head">
                    <h1>Self-Defense</h1>
                </div>
                <div class="scroll-left">
                    <p>नारी शक्ति है ,सम्मान है</p>
                </div>
            </div>
            
        )
    }
}
class Intro extends React.Component{
    render()
    {
        return(
            <div id="intro">
                <h3>Verbal harassment was the most common form, but 51 percent of women said they were touched or groped in an unwelcome way, while 27 percent of women survived sexual assault.
                Even if you’ve personally never felt yourself in a situation that made you feel physically unsafe, having reassurance about your next steps (and what you can do to help yourself should the unfortunate circumstance ever happen) can make all the difference.
                A study from the University of Oregon found that women who participated in a self-defense class felt they:</h3>
                <ul>
                    <li>had better safety strategies in place</li>
                    <li>were more equipped to deal with strangers, and people they know, in the context of potential assault or abuse</li>
                    <li>had more positive feelings about their bodies</li>
                    <li>had increased self-confidence</li>
                </ul>
            </div>
        )
    }
}
class Defense extends React.Component{
    render(){

    return(
        <div width="30px" height="80px" id="defense">
                <br/>
                <img src="self-defense.png" width="200px" height="200px" />
                <p>Self defense videos</p>  
                <iframe width="820" height="445" src="https://www.youtube.com/embed/KVpxP3ZZtAc"></iframe>
                <iframe width="820" height="445" src="https://www.youtube.com/embed/T7aNSRoDCmg"></iframe>
        </div>
        )
    }
}
class Helpline extends React.Component{
    render(){
        return(
            <div width="30px" height="80px" id="helpline">
                <br/>
                <img src="helpline.jpeg" width="200px" height="200px" />
                <p >You are not alone.........</p>
                <p>Call(Domestic Abuse): 1090</p>
                <p>Call(Bangalore Women Police): 080 2294 3250</p>                    
            </div>
        )
    }
}
class Maps extends React.Component{
    render(){
        return(
            <div width="30px" height="80px" id="safety" >
                <br/>
                <img src="women_safety.jpeg" width="200px" height="200px" />
                <p>Let the maps guide you......</p>
                
            </div>
        )
    }
}
class Main extends React.Component{
    render()
    {
        return(
            <div>
                <Heading/>
                <Intro/>
                <div align="center">
                    <Defense/>
                </div>
                <div align="center">
                    <Helpline/>
                </div>
                <div align="center">
                    <Maps/>
                </div>
            </div>
        )
    }
}


export default Main;