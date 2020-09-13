import React, { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import { Router, Link } from '@reach/router';


function App() {
  const [names, setNames] = useState([]);

  // fetch version
  // const getPokedata = () => {
  //     fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=1050")
  //         .then((response) => response.json())
  //         .then((response) => {
  //             console.log(response.results);
  //             setPokedata(response.results);
  //         })
  //         .catch((error) => console.log(error));
  // };

  const getNames = () => {
    Axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
      .then(response => setNames(response.data.results))
      .catch(error => console.log(error))
  };


  return (
    <div className=" d-flex flex-column mx-auto justify-content-center align-items-center p-3 m-5 ">
      <button className="btn btn-dark d-flex mx-auto p-3 m-5" onClick={getNames}>Fetch Pokemon</button>
      <div className="d-flex flex-wrap border border-info rounded m-4">
        {
          names.map((poke, i) => {
            return <p className="col-3" key={i} > {poke.name}</p>
          })
        }
      </div>
    </div >
  );
}

export default App;


