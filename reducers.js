// reducers.js
import { ADD_SHAPE } from './actions';

const initialState = {
    shapes: {},
};

export function gameReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SHAPE:
            return {
                ...state,
                shapes: {
                    ...state.shapes,
                    [action.payload.id]: action.payload.shape,
                },
            };
        default:
            return state;
    }
}