import React from 'react';


const Starships = props => {
    const { starships } = props;


    return (
        <div className="card bg-dark border border-dark col-9 p-3">

            <div className="card-body">
                <h4 className="card-title">{starships.name}</h4>
                <p className="card-text">Model: {starships.climate}</p>
                <p className="card-text">Manufacturer: {starships.manufacturer}</p>
                <p className="card-text">Cost in Credits: {starships.cost_in_credits}</p>
                <p className="card-text">Max Speed: {starships.max_atmosphering_speed}</p>
                <p className="card-text">Crew: {starships.crew}</p>
                <p className="card-text">Passengers: {starships.passengers}</p>
                <p className="card-text">Cargo Capacity: {starships.cargo_capacity}</p>
                <p className="card-text">Starship Class: {starships.starship_class}</p>

            </div>


        </div>
    )
}


export default Starships;






