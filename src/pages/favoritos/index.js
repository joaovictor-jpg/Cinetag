import Banner from "componentes/banner";
import styles from "./Favoritos.module.css"
import Titulo from "componentes/titulo";
import videos from "../../json/db.json"
import Card from "componentes/card";

export default function Favoritos() {
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    );
};