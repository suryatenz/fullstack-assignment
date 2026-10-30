// src/store/layoutSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sections: [],
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    addSection: (state, action) => {
      state.sections.push(action.payload);
    },
    removeSection: (state, action) => {
      state.sections = state.sections.filter(
        (section) => section.id !== action.payload
      );
    },
    moveSection: (state, action) => {
      const { fromIndex, toIndex } = action.payload;
      const [movedItem] = state.sections.splice(fromIndex, 1);
      state.sections.splice(toIndex, 0, movedItem);
    },
  },
});

export const { addSection, removeSection, moveSection } = layoutSlice.actions;
export default layoutSlice.reducer;
