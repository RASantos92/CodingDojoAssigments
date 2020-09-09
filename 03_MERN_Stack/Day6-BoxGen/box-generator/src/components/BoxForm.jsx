import React, { useContext } from 'react';
import BoxenContext from '../contexts/BoxenContext'

const BoxForm = props => {
    const { color, setColor, boxen, setBoxen } = useContext(BoxenContext);
    const handleSubmit = (e) =>{
        e.preventDefault();
        setBoxen(banana => [...banana, color]);
        setColor("");
    }

    return (
        <form className="col-5 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <div>
                    <label htmlFor="color">Color: </label>
                </div>
                <div>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setColor(e.target.value)}
                        value={color}
                    />
                </div>
            </div>
            <input type="submit" value="Add a Box" className="btn btn-warning btn-outline-primary" />
        </form>
    )
}

export default BoxForm;















