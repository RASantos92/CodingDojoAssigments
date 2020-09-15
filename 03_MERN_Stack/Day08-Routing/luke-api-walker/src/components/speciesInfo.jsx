import React from 'react';


const Species = props => {
    const { species } = props;


    return (
        <div className="card bg-dark border border-dark col-9 p-3">

            <div className="card-body">
                <h4 className="card-title">{species.name}</h4>
                <p className="card-text">Classification: {species.classification}</p>
                <p className="card-text">Designation: {species.designation}</p>
                <p className="card-text">Language: {species.language}</p>
                <p className="card-text">Average Height: {species.average_height}</p>
                <p className="card-text">Average Lifespan: {species.average_lifespan}</p>

            </div>


        </div>
    )
}


export default Species;






