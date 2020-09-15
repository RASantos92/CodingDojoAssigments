import React from 'react';


const Planets = props => {
    const { planets } = props;


    return (
        <div className="card bg-dark border border-dark col-9 p-3">

            <div className="card-body">
                <h4 className="card-title">{planets.name}</h4>
                <p className="card-text">Climate: {planets.climate}</p>
                <p className="card-text">Gavity: {planets.gravity}</p>
                <p className="card-text">Terrain: {planets.terrain}</p>
                <p className="card-text">Population: {planets.population}</p>

            </div>


        </div>
    )
}


export default Planets;






