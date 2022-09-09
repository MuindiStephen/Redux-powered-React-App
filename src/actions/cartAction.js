//creating the actions
//actions to be dispatched on some user interactions

import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/ActionTypes"


//actions and their specific type
const addItem = () => {
    return {
        type: ADD_ITEM,
    };
}

const deleteItem = () => {
    return {
        type: DELETE_ITEM,
    };
}

export {addItem, deleteItem};