import { NavLink } from 'react-router-dom';
import styles from './CabecalhoLink.module.css';

export default function CabecalhoLink({ url, children }) {
    return (
        <NavLink to={url} className={styles.link}>
            {children}
        </NavLink>
    );
};