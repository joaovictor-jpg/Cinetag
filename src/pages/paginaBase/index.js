import Cabecalho from "componentes/cabecalho";
import Container from "componentes/container";
import Rodape from "componentes/rodape";
import FavoritosProvider from "context/FavoritosContext";
import { Outlet } from "react-router-dom";

export default function PaginaBase() {
    return(
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    );
};