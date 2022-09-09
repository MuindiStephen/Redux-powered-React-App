//import { configureStore } from "@reduxjs/toolkit";

import { createStore } from "redux";
//import { legacy_createStore as createStore} from 'redux'
import CartReducer from "./reducers/CartReducer";


//creating the store
const store  = createStore(CartReducer);

//const store = configureStore(CartReducer);

export default store