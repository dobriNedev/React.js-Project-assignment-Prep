import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

import styles from "./Header.module.css";

export const Header = () => {
  const { isAuthenticated, userEmail } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isAuthenticated && <li>Welcome {userEmail}</li>}
          <li>
            <Link to="/catalog">Cars</Link>
          </li>

          {isAuthenticated && (
            <>
              <li>
                <Link to="/create">Add Car</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          )}

          {!isAuthenticated && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
