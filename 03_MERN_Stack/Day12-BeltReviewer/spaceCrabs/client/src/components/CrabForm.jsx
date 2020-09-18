import React from 'react';


const CrabForm = props => {
    const { inputs, errors, handleInputChange, handleSubmit, submitValue } = props;


    return (
        <form className="col-5 mx-auto bg-light p-4 rounded" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" value={inputs.name} onChange={handleInputChange} className="form-control" />
                <span className="text-danger">{errors.name.message ? errors.name.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="spaceShip">Space Ship: </label>
                <input type="text" name="spaceShip" value={inputs.spaceShip} onChange={handleInputChange} className="form-control" />
                <span className="text-danger">{errors.spaceShip.message ? errors.spaceShip.message : ""}</span>
            </div>
            <p>(Optional):</p>
            <div className="form-group">
                <label htmlFor="weaponOne">Weapon One: </label>
                <input type="text" name="weaponOne" value={inputs.weaponOne} onChange={handleInputChange} className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="weaponTwo">Weapon Two: </label>
                <input type="text" name="weaponTwo" value={inputs.weaponTwo} onChange={handleInputChange} className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="weaponThree">Weapon Three: </label>
                <input type="text" name="weaponThree" value={inputs.weaponThree} onChange={handleInputChange} className="form-control" />
            </div>
            <input type="submit" value={submitValue} className="btn btn-secondary" />
        </form>
    );


}
export default CrabForm;