import classes from './Style.module.css';
const AddStudent = (props) => {

    return (
        <form className={classes.form}>
            <label>Name</label>
            <input />
            <label>ID</label>
            <input />
            <label>Password</label>
            <input />
            <button className={classes.btn}>Submit</button>
        </form>
    )
}
export default AddStudent;