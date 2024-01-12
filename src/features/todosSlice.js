import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        value: [],
    },
    reducers: {
        addTask: (state, action) => {
            state.value.push(action.payload)
        },
        addTasks: (state, action) => {
            state.value = action.payload
        },
        removeTaskById: (state, action) => {
            state.value = state.value.filter((task) => task.id !== action.payload)
        },
        removeAllTasks: (state) => {
            state.value = []
        }
    },
})

// Action creators are generated for each case reducer function
export const { addTask, addTasks, removeTaskById, removeAllTasks } = todosSlice.actions

export default todosSlice.reducer
