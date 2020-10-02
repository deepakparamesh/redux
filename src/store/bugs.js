import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        // actions => action handlers
        bugAdded: (bugs, action) => {
            bugs.push({   
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            });
        },

        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id)
            bugs[index].resolved = true;
        },

        bugRemoved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id)
            bugs.splice(1, index)
        }
    }
});

export const {bugAdded, bugResolved, bugRemoved} = slice.actions;
export default slice.reducer;