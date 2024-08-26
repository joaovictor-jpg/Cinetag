import Favoritos from "pages/favoritos";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "componentes/cabecalho";
import Rodape from "componentes/rodape";
import Container from "componentes/container";
import FavoritosProvider from "context/FavoritosContext";
import Player from "pages/player";
import NaoEncontrado from "pages/naoEncontrado";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                        <Route path="/:id" element={<Player />}></Route>
                        <Route path="*" element={<NaoEncontrado />}></Route>
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape />
        </BrowserRouter>
    );
};