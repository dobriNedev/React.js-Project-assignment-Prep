import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.css';

const PageNotFound = () => {
    return(
        <div className={styles["not-found"]}>
        <div>
            <p>Something went wrong! <Link to="/">Back</Link> to dashboard!</p>
        </div>
    </div>
    );
};

export default PageNotFound;