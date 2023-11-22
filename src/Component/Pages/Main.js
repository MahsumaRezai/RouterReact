import { Link } from 'react-router-dom';
import classes from './Style.module.css';
const Main = (props) => {
    return (
        <ul className={classes.head} >
            <li><Link to='/'>add student</Link></li>
            <li><Link to='/list'>list of students</Link></li>

        </ul>

    )
}
export default Main;