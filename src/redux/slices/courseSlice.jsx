import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1, // defining steps for creating a course , and show at which step you are currently
  course: null,
  editCourse: false,
  paymentLoading: false,
};
const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },

    setEditCourse: (state, action) => {
      state.editCourse = action.payload;
    },

    setCourse: (state, action) => {
      state.course = action.payload;
    },
    setPaymentLoading: (state, action) => {
      state.paymentLoading = action.payload;
    },

    resetCourseState: (state) => {
      state.step = 1;
      state.course = null;
      state.editCourse = false;
    },
  },
});

export const {
  setCourse,
  setEditCourse,
  setPaymentLoading,
  resetCourseState,
  setStep,
} = courseSlice.actions;

export default courseSlice.reducer;
