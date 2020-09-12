import React, { useState } from 'react';
import Axios from 'axios';


const HelloBlueRed = props => {
    const styles = {
        backgroundColor: props.blue,
        color: props.red,
    }

    return (
        <div style={styles}>
            <h1>The word is: {props.hello}!</h1>
        </div>
    )

}

export default HelloBlueRed;










