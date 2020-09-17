import React from 'react';
import obiWan from './img/obiWan.jpg'

const Error = props => {
    const { error } = props;


    return (
        <div className="card mx-auto bg-dark border border-dark col-6 p-3">
            <h2><i><b>{error}</b></i></h2>
            <img src={obiWan} alt="/public/logo192.png" />
        </div>
    )
}


export default Error;






