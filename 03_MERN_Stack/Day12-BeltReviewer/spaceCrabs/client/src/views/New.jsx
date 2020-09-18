import React, { useState } from 'react';
import Axios from 'axios';
import CrabForm from '../components/CrabForm';
import { navigate } from '@reach/router';


const New = props => {
    const initialCrab = {
        name: "",
        spaceShip: "",
        weaponOne: "",
        weaponTwo: "",
        weaponThree: "",
    }
    // const errorCrab = {
    //     name: "",
    //     spaceShip: "",
    //     weaponOne: "",
    //     weaponTwo: "",
    //     weaponThree: "",
    // }

    const [crab, setCrab] = useState(initialCrab);

    const [errors, setErrors] = useState(initialCrab);

    const handleInputChange = (e) => {
        setCrab({
            ...crab,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        setErrors(initialCrab);
        e.preventDefault();
        Axios.post("http://localhost:8000/api/create/crab", crab)
            .then(res => {
                if (res.data.results) {
                    navigate('/');
                }
                else {
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Create a Crab: </h2>
            <CrabForm
                inputs={crab}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                submitValue="Create A Crab"
            />
        </div>
    );
}

export default New;










