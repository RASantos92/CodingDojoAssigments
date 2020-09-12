import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link } from "@reach/router";
import HelloWorld from './components/HelloWorld';
import Number4 from './components/Number4';
import Hello from './components/Hello';
import HelloBlueRed from './components/HelloBlueRed';


function App(props) {
  // console.log(props);
  // const route = "";

  return (
    <div className="">
      <div className="d-flex mx-auto col-9 justify-content-between align-items-center p-2 m-5">
        <Link to="/home"><i><p>Welcome</p></i></Link>
        <Link to="/4"><i><p>The number is: {props.route}</p></i></Link>
        <Link to="/hello"><i><p>The word is:</p></i></Link>
        <Link to="/hello/blue/red"><i><p>The word is:</p></i></Link>
      </div>

      <div className="d-flex mx-auto col-6 justify-content-between align-items-center p-2 m-5">
        <Router>
          <HelloWorld path="/home" />
          <Number4 path="/:number" />
          <Hello path="/:word" />
          <HelloBlueRed path="/:hello/:blue/:red" />
        </Router>
      </div>
    </div>
  );
}

export default App;




