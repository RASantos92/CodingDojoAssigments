import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

function App() {
  const [names, setNames] = useState([]);

  const getNames = () => {
    Axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(res => setNames(res.data.all))
      .catch(err => console.log(err))
  };


  return (
    <div >
      <button className="btn btn-dark d-flex mx-auto p-3 m-5" onClick={getNames}>Fetch Pokemon</button>
      {
        names.map((poke, i) => {
          return <p key={i}>{poke.text}</p>
        })
      }
    </div>
  );
}

export default App;



