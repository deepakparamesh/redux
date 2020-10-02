import { createAction, createReducer } from '@reduxjs/toolkit';

export const bugAdded = createAction("bugAdded");

export const bugRemoved = createAction("bugRemoved");

export const bugResolved = createAction("bugResolved");

/** Reducers **/

let lastId = 0;

export default createReducer([], {
    // key: value
    // actions: function(event => event handler)
    [bugAdded.type]: (bugs, action) => {
        bugs.push({   
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        })
    },

    [bugResolved.type]: (bugs, action) => {
        const index = bugs.findIndex(bug => bug.id === action.payload.id)
        bugs[index].resolved = true;
    },

    [bugRemoved.type]: (bugs, action) => {
        const index = bugs.findIndex(bug => bug.id === action.payload.id)
        bugs.splice(1, index)
        // bugs. (bug => bug.id !== action.payload.id);
    }
});