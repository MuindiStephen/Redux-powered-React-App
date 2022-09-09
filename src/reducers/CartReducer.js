//contains reducer logic related to our CartReducer component

import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/ActionTypes";

//initiating the state
const initialState = {
  numOfItems: 0,
};


//providing logic for the app actions that is ADD_ITEM and DELETE_ITEM
const CartReducer = (state = initialState, action) => {
    //switch stmt
    //switched the type of action dispatched
    //and returns an updated state
    switch(action.type){
        case ADD_ITEM:
            return {
                state, numOfItems : state.numOfItems+1,
            }
        case DELETE_ITEM:
            return {
                state, numOfItems : state.numOfItems-1,
            }
        default:
            return state;
    }
}

export default CartReducer