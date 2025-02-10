import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../state/store"
import { useEffect } from "react";
import { fetchMangaRecomendations } from "../state/slices/mangaSlice";


export const RecomendationCard = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { images, loading, error} = useSelector((state: RootState) => state.recomendation);

    useEffect(() => {
        dispatch(fetchMangaRecomendations());
    },[dispatch])

    if (loading) return <p>Loading...</p>
    if (error) return <p>error....</p>
  return (
    <div className="flex flex-row space-x-3">
            {images.map((img, index) => (
                <img key={index} src={img.src} alt={`Manga ${index}`} />
            ))}
    </div>
  )
}
