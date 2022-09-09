//creating the UI/View

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../actions/cartAction";

const Cart = () => {
    //read and access store using useSelector() method
    const state = useSelector((state) => state)
    const dispatch = useDispatch();  //dispatch an action on button onclick

    console.log('store', state);
  return (
    <div className="cart">
      <h2>Number of items in Cart: {state.numOfItems}</h2>

      <button className="green" 
       onClick={() => {
        dispatch(addItem());
      }}>
      Add Item to Cart
      </button>

      <button className="red"
        onClick={() => {dispatch(deleteItem());
        }}>
        Remove Item from Cart
      </button>
    </div>
  );
};

export default Cart;