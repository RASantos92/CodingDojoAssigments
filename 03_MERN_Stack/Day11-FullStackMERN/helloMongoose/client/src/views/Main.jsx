import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Main = props => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/students')  //base for our URLs- After this becomes 'endpoint'
            .then(response => setStudents(response.data.results))
            .catch(err => console.log(err));
    }, [])


    return (
        <div>
            {
                students.map((s, i) => <p key={i}>{s.firstName} {s.lastName} has {s.books.length}
                    {s.books.length === 1 ? " book" : " books"}.</p>)
            }
        </div>
    );
}


export default Main;