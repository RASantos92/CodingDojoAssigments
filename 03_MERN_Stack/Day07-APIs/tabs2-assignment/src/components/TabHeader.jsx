import React from 'react';


const TabHeader = (props) => {
    const selected = {
        backgroundColor: "green"
    }

    const notSelected = {
        backgroundColor: "gray"
    }

    return (
        <div >
            <button onClick={() => props.clickHandler(props.index)}
                style={props.selected ? selected : notSelected}><i>Tab {props.index + 1}</i>
            </button>
        </div>
    )

}

export default TabHeader;
















