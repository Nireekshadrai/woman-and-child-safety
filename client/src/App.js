import React from "react";
import "./indexxxx.css";
function handle(){
  window.alert("Thanks for the feedback, we'll look into it!!")
}
export default function App() {
  return (
    <div><h1>FEEDBACK FORM</h1>
    <div class="form-container">
      <form class="register-form">
       
        
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
          id="feedback"
          class="form-field"
          type="text"
          placeholder="Feedback"
          name="feedback"
        />
        <button class="form-field" type="submit" onClick={handle}>
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}