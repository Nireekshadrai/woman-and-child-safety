import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import ReactDOM from "react-dom";
import 'mapbox-gl/dist/mapbox-gl.css';

import "./styles.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './images/com.jpg'
import image2 from './images/My Post.jpg'
import image3 from './images/map.jpg'
import image4 from './images/blog.jpg'
import image5 from './images/children.jpg'
import image6 from './images/7.jpg'
import image7 from './images/volun.jpeg';
import {Dropdown} from 'react-bootstrap';
import About from './pages/About/About.js'
import Contact from './pages/Contact/Contact.js'
import App from './App.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Upload from './upload.js';
import Map from './map.js'
import Maploc from "./maploc.js"
import Selfdefense from "./self-defense"
import Donation from "./links.js"

function Rout() {
  return (
    <div>
      <div className="h">
      <h1 className="h1">Women and Child Safety</h1>
      </div>
      <Router>
        <div className="f">
        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    women's community
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/self">Self Defense</Dropdown.Item>
    <Dropdown.Item href="/map">Maps</Dropdown.Item>
    <Dropdown.Item href="/maploc">get your current location</Dropdown.Item>
  </Dropdown.Menu> &nbsp;&nbsp;&nbsp;
</Dropdown>
<br/>
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    children's community
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/links">Donations</Dropdown.Item>
    <Dropdown.Item href="/upload">Volunteer</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>

          <Link to="/">

            <button className="buttonstyle">Home</button></Link>
          <Link to="/about">
            <button className="buttonstyle">About</button>
          </Link>
          <Link to="/contact">
            <button className="buttonstyle">Contact Us</button>
          </Link>
          <Link to="/feed">
            <button className="buttonstyle">Feedback</button>
          </Link>
          
         <a href="http://localhost:9999" ><button className="buttonstyle">Sign In</button></a>
         <a href="http://localhost:3001" ><button className="buttonstyle">Join Chatroom</button></a>
         
         
        
    
        </div>
        <Switch>
          <Route path="/about"><About />
          </Route>
          <Route exact path="/"><Appli />
          </Route>
          <Route path="/contact"><Contact />
          </Route>
          <Route path="/feed"><App />
          </Route>
          <Route path="/upload"><Upload/></Route>
          <Route path="/self"><Selfdefense/></Route>
          <Route path="/map"><Map/></Route>
          <Route path="/maploc"><Maploc/></Route>
         < Route path="/links"><Donation/></Route>

          
        </Switch>



      </Router>
     

    </div>
  );
}

function Appli() {
  return (
    <><Router>
      <div className="quote">
        <marquee behavior="alternate"direction="right" height="50" scrollamount="8">""THE BEST PROTECTION AN WOMAN CAN HAVE IS COURAGE""</marquee>
      </div>
        <div id= "alice">
        <AliceCarousel autoPlay autoPlayInterval="2000" style="align:center">
          <Link to="/about">
         <img src={image1} className="sliderimg"/>
         </Link>
         <Link to="/contact">
          <img src={image2} className="sliderimg"/>
          </Link>
          <img src={image3} className="sliderimg"/>
          <img src={image4} className="sliderimg"/>
        </AliceCarousel>
       
        </div>
        <div id="alice1">
        <AliceCarousel autoPlay autoPlayInterval="2000">
          <img src={image5} className="sliderimg" />
          <img src={image6} className="sliderimg" />
          <img src={image7} className="sliderimg" />
        </AliceCarousel>
        <Switch>
          <Route path="/about"><About/></Route>
          <Route path="/contact"><Contact/></Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <Rout/>
  </div>, rootElement);
