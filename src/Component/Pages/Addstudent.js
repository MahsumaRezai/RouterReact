import classes from './Style.module.css';
import { useState } from 'react';

const AddStudent = (props) => {
    const [name, setname] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const From = (event) => {
        event.preventDefault('');
        console.log(name, id, password)
    }
    const NameHandler = (event) => {
        setname(event.target.value);
    }

    const IdHandler = (event) => {
        setId(event.target.value)
    }
    const paswordHandler = (event) => {
        setPassword(event.target.value)
    }

    return (
        <form className={classes.form} onSubmit={From}>
            <label>Name</label>
            <input onChange={NameHandler} />
            <label>ID</label>
            <input onChange={IdHandler} />
            <label>Password</label>
            <input onChange={paswordHandler} />
            <button className={classes.btn}>Submit</button>
        </form>
    )
}
export default AddStudent;