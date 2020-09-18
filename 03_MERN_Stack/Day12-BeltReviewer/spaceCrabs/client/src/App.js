import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link } from '@reach/router';
import Main from './views/Main';
import New from './views/New';
import Show from './views/Show';
import Edit from './views/Edit';


function App() {
  return (
    <div className="App">
      {/* <div className="d-flex justify-content-around mx-auto"> */}

      <h1 className="bg-dark text-warning rounded col-3 mx-auto p-2 m-2">SPACE CRABS</h1>
      <div className="d-flex justify-content-around bg-dark text-warning col-6 mx-auto p-2 rounded">
        <Link to="/new" className="btn btn-primary p-2 m-2">Create a Crab</Link>
        <Link to="/" className="btn btn-primary p-2 m-2">Home</Link>
      </div>
      <Router>
        <Main path="/" />
        <New path="/new" />
        <Show path="/crab/:id" />
        <Edit path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
