import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { authContext } from '../../contexts/autContext';

import styles from './Navbar.module.css';

const Navbar = () => {

    const { isAuthenticated, name} = useContext(authContext);

    return (
        <nav className={styles['navbar']}>
            <ul>
                
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/employees">Employees</Link></li>
                    <li><Link to="/tasks">Tasks</Link></li>
                
                
                {isAuthenticated 
                    ? 
                    <div className='logged'>                   
                        <li>Hello {name}</li>           
                        <li><Link to="/auth/logout">Logout</Link></li>
                    </div>
                    : 
                    <div className='not-logged'> 
                        <li><Link to="/auth/login">Login</Link></li>
                        <li><Link to="/auth/register">Register</Link></li>
                    </div>
                }
            </ul>
        </nav>
    );
};

export default Navbar;