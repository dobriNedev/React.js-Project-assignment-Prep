import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useContext } from 'react';
import { authContext } from '../../contexts/autContext';

const Navbar = () => {

    const { isAuthenticated, userEmail } = useContext(authContext);

    return (
        <nav className={styles['navbar']}>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                {isAuthenticated && (
                    <div className='user'>
                    <li>Hello {userEmail}</li>
                    <li><Link to="/employees">Employees</Link></li>
                    <li><Link to="/tasks">Tasks</Link></li>
                    <li><Link to="/auth/logout">Logout</Link></li>
                    </div>
                )}
                {!isAuthenticated && (
                    <div className='guest'>
                    <li><Link to="/auth/login">Login</Link></li>
                    <li><Link to="/auth/register">Register</Link></li>
                    </div>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;