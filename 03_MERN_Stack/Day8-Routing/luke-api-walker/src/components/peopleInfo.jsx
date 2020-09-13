import React from 'react';


const People = props => {
    const { people } = props;


    return (
        <div className="card bg-dark border border-dark col-9 p-3">

            <div className="card-body">
                <h4 className="card-title">{people.name}</h4>
                <p className="card-text">Height: {people.height}</p>
                <p className="card-text">Hair Color: {people.hair_color}</p>
                <p className="card-text">Eye Color: {people.eye_color}</p>
                <p className="card-text">Birthday: {people.birth_year}</p>

            </div>


        </div>
    )
}


export default People;




