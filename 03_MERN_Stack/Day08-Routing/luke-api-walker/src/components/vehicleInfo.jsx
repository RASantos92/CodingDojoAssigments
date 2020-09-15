import React from 'react';


const Vehicles = props => {
    const { vehicles } = props;


    return (
        <div className="card bg-dark border border-dark col-9 p-3">

            <div className="card-body">
                <h4 className="card-title">{vehicles.name}</h4>
                <p className="card-text">Model: {vehicles.model}</p>
                <p className="card-text">Manufacturer: {vehicles.manufacturer}</p>
                <p className="card-text">Cost in Credits: {vehicles.cost_in_credits}</p>
                <p className="card-text">Crew: {vehicles.max_atmosphering_speed}</p>
                <p className="card-text">Passengers: {vehicles.max_atmosphering_speed}</p>
                <p className="card-text">Cargo Capacity: {vehicles.max_atmosphering_speed}</p>
                <p className="card-text">Vehicle Class: {vehicles.class}</p>

            </div>


        </div>
    )
}


export default Vehicles;






