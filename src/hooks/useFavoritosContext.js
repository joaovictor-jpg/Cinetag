import { FavoritosContext } from "context/FavoritosContext";
import { useContext, useEffect } from "react";

export function useFavoritosContext() {
    const { favoritos, setFavoritos, videos, setVideos } = useContext(FavoritosContext);

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

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/joaovictor-jpg/cinetag-api/videos')
            .then(resp => resp.json())
            .then(dados => {
                setVideos(dados)
            })
    }, [])

    return {
        favoritos,
        adicionarFavorito,
        videos
    }

}