import { useFavoritosContext } from 'hooks/useFavoritosContext';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { Link } from 'react-router-dom';

export default function Card({ id, titulo, capa }) {
    const { favoritos, adicionarFavorito } = useFavoritosContext();
    const ehFavorito = favoritos.some((fev) => fev.id === id);
    const icone = ehFavorito ? iconeDesfavoritar : iconeFavoritar;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icone} alt='Favoritar filme' className={styles.favoritar} onClick={() => {
                adicionarFavorito({ id, titulo, capa });
            }} />
        </div>
    );
};