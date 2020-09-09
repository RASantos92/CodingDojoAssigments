import React, { useContext } from 'react';
import BoxenContext from '../contexts/BoxenContext'



const Boxen = props => {
    const{boxen} = useContext(BoxenContext);

    return(
        <div>
            {
                boxen.map((box, i) => {
                    return <div style={{backgroundColor:box, width:"200px", height:"200px", border:"2px solid black"}}></div>
                })
            }
        </div>
    );
}


export default Boxen;


