import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/openSlice";
import recomendationReducer from "./slices/mangaSlice";


export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    recomendation: recomendationReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
