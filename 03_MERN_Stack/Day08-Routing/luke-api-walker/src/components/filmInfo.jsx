import React from 'react';


const Films = props => {
    const { films } = props;


    return (
        <div className="card bg-dark border border-dark col-9 p-3">

            <div className="card-body">
                <h4 className="card-title">{films.title}</h4>
                <p className="card-text">Episode: {films.episode_id}</p>
                <p className="card-text">Release Date: {films.release_date}</p>
                <p className="card-text">Director: {films.director}</p>
                <p className="card-text">Producer: {films.producer}</p>

            </div>


        </div>
    )
}


export default Films;






