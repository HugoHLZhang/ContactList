import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateUser = () => {
    const {id} = useParams();
    
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get('http://localhost:3001/getUser/'+ id)
        .then(result => {
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
        })
        .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3001/updateUser/'+ id, {name, email, age})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={Update}>
            <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={name}
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" id="age" value={age}
                    onChange={(e) => setAge(e.target.value)}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UpdateUser;