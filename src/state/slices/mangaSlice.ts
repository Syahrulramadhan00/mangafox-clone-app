import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

interface ImgRecomendation {
    title: string;
    src: string;
}

interface RecomendationState {
    manga: {
        images: ImgRecomendation[];
        loading: boolean;
        error: string | null;
    };
    anime: {
        images: ImgRecomendation[];
        loading: boolean;
        error: string | null;
    };
}

const initialState: RecomendationState = {
    manga: {
        images: [],
        loading: false,
        error: null,
    },
    anime: {
        images: [],
        loading: false,
        error: null,
    },
};

export const fetchMangaRecomendations = createAsyncThunk(
    "recomendations/fetchMangaRecomendations",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("manga/1/recommendations");

            if (response.status !== 200) {
                throw new Error("Failed to fetch recommendations");
            }

            const data = response.data.data.map((item: any) => ({
                title: item.entry.title,
                src: item.entry.images.jpg.image_url,
            }));

            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchAnimeRecomendations = createAsyncThunk(
    "recomendations/fetchAnimeRecomendations",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("anime/1/recommendations");

            if (response.status !== 200) {
                throw new Error("Failed to fetch recommendations");
            }

            const data = response.data.data.map((item: any) => ({
                title: item.entry.title,
                src: item.entry.images.jpg.image_url,
            }));

            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

// Create slice
export const recomendationSlice = createSlice({
    name: "recomendations",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Manga
            .addCase(fetchMangaRecomendations.pending, (state) => {
                state.manga.loading = true; 
                state.manga.error = null;
            })
            .addCase(fetchMangaRecomendations.fulfilled, (state, action) => {
                state.manga.loading = false;
                state.manga.images = action.payload;
            })
            .addCase(fetchMangaRecomendations.rejected, (state, action) => {
                state.manga.loading = false;
                state.manga.error = action.payload as string;
            })

            // Anime
            .addCase(fetchAnimeRecomendations.pending, (state) => {
                state.anime.loading = true;
                state.anime.error = null;
            })
            .addCase(fetchAnimeRecomendations.fulfilled, (state, action) => {
                state.anime.loading = false;
                state.anime.images = action.payload;
            })
            .addCase(fetchAnimeRecomendations.rejected, (state, action) => {
                state.anime.loading = false;
                state.anime.error = action.payload as string;
            });
    },
});

export default recomendationSlice.reducer;
