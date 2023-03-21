import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles['navbar']}>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/employees">Employees</Link></li>
                <li><Link to="/tasks">Tasks</Link></li>

                {/* for authenticated users */}
                <li><Link to="/auth/logout">Logout</Link></li>
                {/* for not authenticated users */}
                <li><Link to="/auth/login">Login</Link></li>
                <li><Link to="/auth/register">Register</Link></li>

            </ul>
        </nav>
    );
};

export default Navbar;