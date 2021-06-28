import { ADD_TO_CART, REDUCE_ITEMS, INCREASE_ITEMS, REMOVE_FROM_CART } from "./actionTypes";

export const addToCart = (id, itemQuantity) => {
  return {
    type: ADD_TO_CART,
    id: id,
    itemQuantity: itemQuantity,
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id: id,
  };
};

export const increaseItems = (id) => {
  return {
    type: INCREASE_ITEMS,
    id: id,
  };
};

export const reduceItems = (id) => {
  return {
    type: REDUCE_ITEMS,
    id: id,
  };
};
