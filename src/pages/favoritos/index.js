import Banner from "componentes/banner";
import styles from "./Favoritos.module.css"
import Titulo from "componentes/titulo";
import Card from "componentes/card";
import { useFavoritosContext } from "hooks/useFavoritosContext";

export default function Favoritos() {
    const { favoritos } = useFavoritosContext();
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favoritos.map(favorito => {
                    return <Card {...favorito} key={favorito.id} />
                })}
            </section>
        </>
    );
};