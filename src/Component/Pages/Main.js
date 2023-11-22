import { Link } from 'react-router-dom';
const Main = (props) => {
    return (
        <ul>
            <li><Link to='/'>add student</Link></li>
            <li><Link to='/list'>list of students</Link></li>

        </ul>

    )
}
export default Main;