import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

interface ImgRecomendation {
    title: string;
    src: string;
}

interface RecomendationState {
    images: ImgRecomendation[];
    loading: boolean;
    error: string | null;
}

const initialState: RecomendationState = {
    images: [],
    loading: false,
    error: null
};

// Fetch manga recommendations
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

// Create slice
export const recomendationSlice = createSlice({
    name: "recomendations",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMangaRecomendations.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMangaRecomendations.fulfilled, (state, action) => {
                state.loading = false;
                state.images = action.payload;
            })
            .addCase(fetchMangaRecomendations.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default recomendationSlice.reducer;
