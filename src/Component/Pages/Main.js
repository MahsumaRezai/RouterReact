import { Link } from 'react-router-dom';
import classes from './Style.module.css';
const Main = (props) => {
    return (
        <ul className={classes.head} >
            <li><Link to='/' className={classes.link}>Add Students</Link></li>
            <li><Link to='/list' className={classes.link}>List Of Students</Link></li>

        </ul>

    )
}
export default Main;