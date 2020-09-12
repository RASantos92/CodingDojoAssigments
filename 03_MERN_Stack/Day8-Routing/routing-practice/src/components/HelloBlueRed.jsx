import React, { useState } from 'react';
import Axios from 'axios';


const HelloBlueRed = props => {
    const styles = {
        backgroundColor: props.bgcolor,
        color: props.textcolor,
    }

    return (
        <div style={styles}>
            <h1 className="p-3 rounded text-center">The word is: {props.hello}!</h1>
        </div>
    )

}

export default HelloBlueRed;










