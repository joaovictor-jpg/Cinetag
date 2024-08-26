import Banner from "componentes/banner";
import Titulo from "componentes/titulo";
import Card from "componentes/card";
import styles from "./Inicio.module.css";
import { useFavoritosContext } from "hooks/useFavoritosContext";

export default function Inicio() {

    const {videos} = useFavoritosContext();

    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    );
};