// actions.js
export const ADD_SHAPE = 'ADD_SHAPE';

export function addShape(id, shape) {
    return {
        type: ADD_SHAPE,
        payload: { id, shape },
    };
}