import { FavoritosContext } from "context/FavoritosContext";
import { useContext } from "react";

export function useFavoritosContext() {
    const { favoritos, setFavoritos } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favoritos.some(item => item.id === novoFavorito.id);

        let novaLista = [...favoritos];

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavoritos(novaLista);
        }

        novaLista = favoritos.filter((fav) => fav.id !== novoFavorito.id);
        return setFavoritos(novaLista);
    }

    return {
        favoritos,
        adicionarFavorito
    }

}