import React, { Component } from "react";
import ReactDOM from "react-dom";
import OtpInput from "react-otp-input";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <h3 id="head"> Phone Verification </h3>
        <p id="para"> Enter the OTP you recieved on 89206-6XXXX  </p>
       <div id="otp"> <OtpInput
          onChange={otp => console.log(otp)}
          numInputs={6}
          separator={<span>--</span>}
        />
        </div>
        <a href="#.com" id="anc1">Change Number</a>
        <a href="#.com" id="anc2">Re-send OTP</a>
        <div id="btn1"><button id="btn">Verify Phone Number</button></div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
