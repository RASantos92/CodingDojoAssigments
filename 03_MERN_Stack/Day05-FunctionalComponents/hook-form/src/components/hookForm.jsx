import React, { useState } from 'react';


const Form = (props) => {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPW: "",
    })

    const onChangeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    const passwordValid = (password) => {
        if (password.length <= 5 && password.length !== 0) {
            return false;
        }
        return true;
    }
    const confirmPW = (cPW) => {
        if (formState.password !== formState.confirmPW && formState.confirmPW !== 0) {
            return false;
        }
        return true;
    }



    return (
        <div className="d-flex justify-content-center align-items-center flex-column p-5 m-2">
            <h1>Please submit User Info below: </h1>
            <form>
                <label>First Name: </label>
                <input type="text" name="firstName" onChange={onChangeHandler} /><br />
                <label>Last Name: </label>
                <input type="text" name="lastName" onChange={onChangeHandler} /><br />
                <label>EMail: </label>
                <input type="text" name="email" onChange={onChangeHandler} /><br />
                <label>Password: </label>
                <input type="password" name="password" onChange={onChangeHandler} /><br />
                {passwordValid(formState.password) ? "" : <p>password needs more than 5 characters!</p>}
                <label>Confirm PW: </label>
                <input type="password" name="confirmPW" onChange={onChangeHandler} /><br />
                {confirmPW(formState.confirmPW) ? "" : <p>passwords do not match!</p>}
            </form>
            <div className="d-flex justify-content-center align-items-center flex-column p-5 m-2">
                <h2>My Form Data</h2>
                <p>First Name: {formState.firstName}</p><br />
                <p>Last Name: {formState.lastName}</p><br />
                <p>Email: {formState.email}</p><br />
            </div>
        </div>
    )
}



export default Form;


