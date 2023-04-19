import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

import styles from "./Header.module.css";

export const Header = () => {
  const { isAuthenticated, userEmail } = useContext(AuthContext);

  const user = userEmail?.substring(0, userEmail.indexOf("@"));

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/catalog">Cars</Link>
          </li>

          {isAuthenticated && (
            <>
              <li>
                <Link to="/create">Add Car</Link>
              </li>
              <li>
                <Link to="/logout">Logout {user}</Link>
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
