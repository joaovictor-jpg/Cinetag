import { createContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = 'Favoritos';

export default function FavoritosProvider({ children }) {
    const [favoritos, setFavoritos] = useState([]);
    const [videos, setVideos] = useState([]);
    return (
        <FavoritosContext.Provider value={{ favoritos, setFavoritos, videos, setVideos }}>
            {children}
        </FavoritosContext.Provider>
    );
};
