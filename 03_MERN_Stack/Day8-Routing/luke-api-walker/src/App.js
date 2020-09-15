import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Axios from 'axios';
import { Router, navigate } from "@reach/router";
import StarWarsComp from './components/StarWarsComp';


function App() {
  const [query, setQuery] = useState({
    query: "",
    id: 1
  })

  const handleInput = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${query.query}/${query.id}`)
    setQuery({
      ...query,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="">
      <div className="d-flex mx-auto col-6 justify-content-between align-items-center p-2 m-5">
      </div>

      < form className="form-inline d-flex justify-content-between mx-auto col-6 p-2 m-5" onSubmit={handleSubmit} ><b>Search for:</b>
        <select name="query" onChange={handleInput}>
          <option value="">-- Make your selection --</option>
          <option value="people">People</option>
          <option value="planets">Planets</option>
          <option value="films">Films</option>
          <option value="species">Species</option>
          <option value="vehicles">Vehicles</option>
          <option value="starships">Starships</option>
        </select><b>ID:</b>
        <input type="number" min="1" max="" name="id" value={query.id} onChange={handleInput} />
        <input type="submit" className="btn btn-dark shadow" value="Explore the Galaxy" />
      </form >

      <div className="d-flex mx-auto col-6 justify-content-between align-items-center p-2 m-5">
        <Router>
          <StarWarsComp path="/:query/:id" />
          {/* <PeopleInfo path="/:query/:id" /> */}
        </Router>
      </div>
    </div >
  );
}

export default App;
