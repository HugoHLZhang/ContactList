import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()
    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/createUser', {name, email, age})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={Submit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" 
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" 
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="text" name="age" id="age" 
                    onChange={(e) => setAge(e.target.value)}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateUser;