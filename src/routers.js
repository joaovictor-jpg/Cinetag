import Favoritos from "pages/favoritos";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Player from "pages/player";
import NaoEncontrado from "pages/naoEncontrado";
import PaginaBase from "pages/paginaBase";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NaoEncontrado />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};