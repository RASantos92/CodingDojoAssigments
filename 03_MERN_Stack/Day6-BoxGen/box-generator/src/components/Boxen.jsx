import React, { useContext } from 'react';
import BoxenContext from '../contexts/BoxenContext'



const Boxen = props => {
    const { boxen } = useContext(BoxenContext);

    return (
        <div className="d-flex flex-row justify-content-around align-content-between flex-wrap">
            {
                boxen.map((box, i) => {
                    return <div style={{ backgroundColor: box.color, width: box.size + "px", height: box.size + "px", border: "2px solid black", margin: "2px" }}></div>
                })
            }
        </div>
    );
}


export default Boxen;


