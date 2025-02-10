import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SidebarState {
  isOpen: boolean;
}

const initialState: SidebarState = {
  isOpen: false,
};

export const openSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isOpen = true;
    },
    closeSidebar: (state) => {
      state.isOpen = false;
    },
    toggleSidebar: (state) => {   
      console.log("Toggling Sidebar: ", !state.isOpen);
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openSidebar, closeSidebar, toggleSidebar } = openSlice.actions;


export const selectSidebarOpen = (state: RootState) => state.sidebar.isOpen;

export default openSlice.reducer;
