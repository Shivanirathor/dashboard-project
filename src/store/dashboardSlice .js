
import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    widgets: [], 
  },
  reducers: {
    addWidget: (state, action) => {
      state.widgets.push(action.payload);
    },
    removeWidget: (state, action) => {
      state.widgets = state.widgets.filter(widget => widget.id !== action.payload);
    },
  },
});

export const { addWidget, removeWidget } = dashboardSlice.actions;
export const selectWidgets = (state) => state.dashboard.widgets;
export default dashboardSlice.reducer;
