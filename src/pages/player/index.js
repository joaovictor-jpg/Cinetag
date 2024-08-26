import Banner from 'componentes/banner';
import styles from './Player.module.css';
import Titulo from 'componentes/titulo';
import videos from '../../json/db.json';
import { useParams } from 'react-router-dom';

export default function Player() {

    const parametros = useParams();
    const video = videos.find(video => {
        return video.id === Number(parametros.id);
    });



    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
            </section>
        </>
    );
};