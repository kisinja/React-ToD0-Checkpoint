// src/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({ id: Date.now(), description: action.payload, isDone: false });
        },
        editTask: (state, action) => {
            const taskIndex = state.tasks.findIndex(task => task.id === action.payload.id);
            if (taskIndex !== -1) {
                state.tasks[taskIndex] = { ...state.tasks[taskIndex], description: action.payload.description };
            }
        },
        toggleTask: (state, action) => {
            const taskIndex = state.tasks.findIndex(task => task.id === action.payload);
            if (taskIndex !== -1) {
                state.tasks[taskIndex].isDone = !state.tasks[taskIndex].isDone;
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
    },
});

export const { addTask, editTask, toggleTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
