import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { fetchMangaRecomendations, fetchAnimeRecomendations } from "../state/slices/mangaSlice";
import { RecomendationCard } from "../section/RecomendationCard";

export const Homepage = () => {
    const dispatch = useDispatch<AppDispatch>();

    const manga = useSelector((state: RootState) => state.recomendation.manga);
    const anime = useSelector((state: RootState) => state.recomendation.anime);

    useEffect(() => {
        dispatch(fetchMangaRecomendations());
        dispatch(fetchAnimeRecomendations());
    }, [dispatch]);

    return (
        <div className="bg-midnight">
            <RecomendationCard header="Manga Recommendations" data={manga} />
            <RecomendationCard header="Anime Recommendations" data={anime} />
        </div>
    );
};
