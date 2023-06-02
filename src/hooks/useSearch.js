import {useReducer } from 'react';
const initialState = {
    searchResults: [],
    searchResultLoading: false,
    status: "idle",
    error: null,
}
function reducer() {
    switch(action.type) {
        case "pending":
            return {
                ...state,
                status: "fetching",
            }
    }
}