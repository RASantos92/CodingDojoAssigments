import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

function App() {
  const [names, setNames] = useState([]);

  const getNames = () => {
    Axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
      .then(response => setNames(response.data.results))
      .catch(error => console.log(error))
  };


  return (
    <div className=" d-flex flex-column mx-auto justify-content-center align-items-center p-3 m-5 ">
      <button className="btn btn-dark d-flex mx-auto p-3 m-5" onClick={getNames}>Fetch Pokemon</button>
      {
        names.map((poke, i) => {
          return <p key={i}>{poke.name}</p>
        }) 
      }
    </div>
  );
}

export default App;



