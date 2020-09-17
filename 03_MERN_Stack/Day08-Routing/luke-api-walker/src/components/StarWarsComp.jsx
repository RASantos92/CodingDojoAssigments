import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import People from './peopleInfo';
import Planets from './planetInfo';
import Films from './filmInfo';
import Species from './speciesInfo';
import Vehicles from './vehicleInfo';
import Starships from './starshipInfo';
import Error from './error';

const StarWarsComp = props => {
  const [people, setPeople] = useState(null);
  const [planets, setPlanets] = useState(null);
  const [films, setFilms] = useState(null);
  const [species, setSpecies] = useState(null);
  const [vehicles, setVehicles] = useState(null);
  const [starships, setStarships] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    Axios.get(`https://swapi.dev/api/${props.query}/${props.id}/`)
      .then(response => {
        if (props.query === "people") {
          setPeople(response.data);
          setPlanets(null);
          setFilms(null);
          setSpecies(null);
          setVehicles(null);
          setStarships(null);
          setError(null);
        }
        else if (props.query === "planets") {
          setPeople(null);
          setPlanets(response.data);
          setFilms(null);
          setSpecies(null);
          setVehicles(null);
          setStarships(null);
          setError(null);
        }
        else if (props.query === "films") {
          setPeople(null);
          setPlanets(null);
          setFilms(response.data);
          setSpecies(null);
          setVehicles(null);
          setStarships(null);
          setError(null);
        }
        else if (props.query === "species") {
          setPeople(null);
          setPlanets(null);
          setFilms(null);
          setSpecies(response.data);
          setVehicles(null);
          setStarships(null);
          setError(null);
        }
        else if (props.query === "vehicles") {
          setPeople(null);
          setPlanets(null);
          setFilms(null);
          setSpecies(null);
          setVehicles(response.data);
          setStarships(null);
          setError(null);
        }
        else if (props.query === "starships") {
          setPeople(null);
          setPlanets(null);
          setFilms(null);
          setSpecies(null);
          setVehicles(null);
          setStarships(response.data);
          setError(null);
        }
        else if (props.query === "error") {
          setPeople(null);
          setPlanets(null);
          setFilms(null);
          setSpecies(null);
          setVehicles(null);
          setStarships(null);
          setError(null);
        }
      })
      .catch(error => {
        console.log(error.response.status);
        setPeople(null);
        setPlanets(null);
        setFilms(null);
        setSpecies(null);
        setVehicles(null);
        setStarships(null);
        setError("These aren't the Droids you're looking for!")
      });
  }, [props])




  return (
    <div className="d-flex text-align align-items-center p-2 m-3">
      <h1><i>Delivered, the Galaxy has:</i></h1>
      {
        people ? <People people={people} /> : null
      }
      {
        planets ? <Planets planets={planets} /> : null
      }
      {
        films ? <Films films={films} /> : null
      }
      {
        species ? <Species species={species} /> : null
      }
      {
        vehicles ? <Vehicles vehicles={vehicles} /> : null
      }
      {
        starships ? <Starships starships={starships} /> : null
      }
      {
        error ? <Error error={error} /> : null
      }
    </div>
  )

}

export default StarWarsComp;

