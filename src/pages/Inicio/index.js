import Cabecalho from "componentes/cabecalho";
import Rodape from "componentes/rodape";
import Banner from "componentes/banner";
import Titulo from "componentes/titulo";
import Card from "componentes/card";
import styles from "./Inicio.module.css";
import videos from "../../json/db.json";

export default function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
            <Rodape />
        </>
    );
};